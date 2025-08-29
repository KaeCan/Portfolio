import type { ExperienceItem } from '../types/index';

const WORK_HOURS_PER_YEAR = 2080;

export const calculateTotalHours = (experiences: ExperienceItem[]): number => {
    let totalHours = 0;

    experiences.forEach(exp => {
        const duration = exp.duration;
        // Parse duration like "Jan 2022 - Present" or "Mar 2020 - Dec 2022" or "2020 - 2022"
        const periods = duration.split(' - ');

        if (periods.length === 2) {
            const startDate = parseDate(periods[0]);
            const endDate =
                periods[1] === 'Present' ? new Date() : parseDate(periods[1]);

            if (startDate && endDate) {
                const timeDifference = endDate.getTime() - startDate.getTime();
                const yearsDifference =
                    timeDifference / (1000 * 60 * 60 * 24 * 365.25); // account for leap years

                const workHours = yearsDifference * WORK_HOURS_PER_YEAR;
                totalHours += workHours;
            }
        }
    });

    return totalHours;
};

export const parseDate = (dateStr: string): Date | null => {
    // formats like "Jan 2022", "January 2022", "2022", "Jan 15, 2022", "January 15, 2022"
    const trimmed = dateStr.trim();

    // just a year
    if (/^\d{4}$/.test(trimmed)) {
        return new Date(parseInt(trimmed), 0, 1);
    }

    // month and year
    const monthYearMatch = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (monthYearMatch) {
        const monthName = monthYearMatch[1];
        const year = parseInt(monthYearMatch[2]);
        const monthIndex = getMonthIndex(monthName);
        if (monthIndex !== -1) {
            return new Date(year, monthIndex, 1);
        }
    }

    const monthDayYearMatch = trimmed.match(
        /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/
    );
    if (monthDayYearMatch) {
        const monthName = monthDayYearMatch[1];
        const day = parseInt(monthDayYearMatch[2]);
        const year = parseInt(monthDayYearMatch[3]);
        const monthIndex = getMonthIndex(monthName);
        if (monthIndex !== -1) {
            return new Date(year, monthIndex, day);
        }
    }

    return null;
};

export const getMonthIndex = (monthName: string): number => {
    const months = [
        'jan',
        'january',
        'feb',
        'february',
        'mar',
        'march',
        'apr',
        'april',
        'may',
        'jun',
        'june',
        'jul',
        'july',
        'aug',
        'august',
        'sep',
        'september',
        'oct',
        'october',
        'nov',
        'november',
        'dec',
        'december',
    ];

    const monthIndex = months.indexOf(monthName.toLowerCase());
    if (monthIndex !== -1) {
        return Math.floor(monthIndex / 2);
    }

    return -1;
};

export const calculateYears = (totalHours: number): number => {
    // work hours only
    return Math.floor(totalHours / WORK_HOURS_PER_YEAR);
};

export const formatExperienceDisplay = (
    totalHours: number,
    totalYears: number
): string => {
    return `${totalHours.toFixed(3)} Hrs<br />(${totalYears}+ years)`;
};

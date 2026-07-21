import type { ExperienceDuration } from '@/types/content';

const WORK_HOURS_PER_YEAR = 2080;

export const parseDate = (dateStr: string): Date | null => {
    const trimmed = dateStr.trim();

    if (/^\d{4}$/.test(trimmed)) {
        return new Date(parseInt(trimmed, 10), 0, 1);
    }

    const monthYearMatch = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (monthYearMatch) {
        const monthIndex = getMonthIndex(monthYearMatch[1]);
        if (monthIndex !== -1) {
            return new Date(parseInt(monthYearMatch[2], 10), monthIndex, 1);
        }
    }

    const monthDayYearMatch = trimmed.match(
        /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/
    );
    if (monthDayYearMatch) {
        const monthIndex = getMonthIndex(monthDayYearMatch[1]);
        if (monthIndex !== -1) {
            return new Date(
                parseInt(monthDayYearMatch[3], 10),
                monthIndex,
                parseInt(monthDayYearMatch[2], 10)
            );
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

export const calculateTotalHours = (
    experiences: ExperienceDuration[]
): number => {
    let totalHours = 0;

    const sortedExperiences = [...experiences].sort((a, b) => {
        const aStart = parseDate(a.duration.split(' - ')[0]);
        const bStart = parseDate(b.duration.split(' - ')[0]);

        if (!aStart || !bStart) return 0;
        return aStart.getTime() - bStart.getTime();
    });

    for (const exp of sortedExperiences) {
        const periods = exp.duration.split(' - ');

        if (periods.length === 2) {
            const startDate = parseDate(periods[0]);
            const endDate =
                periods[1] === 'Present' ? new Date() : parseDate(periods[1]);

            if (startDate && endDate) {
                const yearsDifference =
                    (endDate.getTime() - startDate.getTime()) /
                    (1000 * 60 * 60 * 24 * 365.25);
                totalHours += yearsDifference * WORK_HOURS_PER_YEAR;
            }
        }
    }

    return totalHours;
};

export const calculateYears = (totalHours: number): number =>
    Math.floor(totalHours / WORK_HOURS_PER_YEAR);

export interface ExperienceMetrics {
    totalHours: number;
    totalYears: number;
}

export const getExperienceMetrics = (
    experiences: ExperienceDuration[]
): ExperienceMetrics => {
    const totalHours = calculateTotalHours(experiences);
    return {
        totalHours,
        totalYears: calculateYears(totalHours),
    };
};

export const formatHours = (totalHours: number): string =>
    totalHours.toFixed(3);

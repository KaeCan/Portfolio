import type { JSX } from 'react';
import { formatHours } from '@/features/experience/utils/experience-hours';
import { StatNumber } from '../ExperienceStats/ExperienceStats.styles';
import { useLiveExperienceHours } from './hooks/useLiveExperienceHours';

interface Props {
    durations: string[];
}

export function LiveExperienceHours({ durations }: Props): JSX.Element {
    const metrics = useLiveExperienceHours(durations);

    return (
        <StatNumber>
            {formatHours(metrics.totalHours)} Hrs
            <br />({metrics.totalYears}+ years)
        </StatNumber>
    );
}

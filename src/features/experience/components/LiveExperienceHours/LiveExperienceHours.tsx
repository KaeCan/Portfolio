import type { JSX } from 'react';
import { formatHours } from '@/features/experience/utils/experience-hours';
import {
    StatNumber,
    StatNumberSecondary,
} from '../ExperienceStats/ExperienceStats.styles';
import { useLiveExperienceHours } from './hooks/useLiveExperienceHours';

interface Props {
    durations: string[];
}

export function LiveExperienceHours({ durations }: Props): JSX.Element {
    const metrics = useLiveExperienceHours(durations);

    return (
        <StatNumber>
            {metrics.totalYears}+ years
            <br />
            <StatNumberSecondary>
                ({formatHours(metrics.totalHours)} hours)
            </StatNumberSecondary>
        </StatNumber>
    );
}

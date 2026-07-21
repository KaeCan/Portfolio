import type { JSX } from 'react';
import { LiveExperienceHours } from '../LiveExperienceHours/LiveExperienceHours';
import type { ExperienceViewModel, SiteStat } from '@/types/content';
import {
    Stat,
    StatGrid,
    StatLabel,
    StatNumber,
    Stats,
} from './ExperienceStats.styles';

interface Props {
    experiences: ExperienceViewModel[];
    stats: SiteStat[];
}

export function ExperienceStats({ experiences, stats }: Props): JSX.Element {
    const durations = experiences.map(exp => exp.duration);

    return (
        <Stats>
            <Stat>
                <LiveExperienceHours durations={durations} />
                <StatLabel>Total Work Experience</StatLabel>
            </Stat>

            <StatGrid>
                {stats.map(stat => (
                    <Stat key={stat.label}>
                        <StatNumber>{stat.number}</StatNumber>
                        <StatLabel>{stat.label}</StatLabel>
                    </Stat>
                ))}
            </StatGrid>
        </Stats>
    );
}

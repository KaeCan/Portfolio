import type { JSX } from 'react';
import { ExperienceCard } from './components/ExperienceCard/ExperienceCard';
import { ExperienceStats } from './components/ExperienceStats/ExperienceStats';
import type { ExperienceViewModel, SiteStat } from '@/types/content';
import { Container, List, Section } from './Experience.styles';

interface Props {
    experiences: ExperienceViewModel[];
    stats: SiteStat[];
}

export function Experience({ experiences, stats }: Props): JSX.Element {
    return (
        <Section>
            <Container>
                <List>
                    {experiences.map(exp => (
                        <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                </List>

                <ExperienceStats experiences={experiences} stats={stats} />
            </Container>
        </Section>
    );
}

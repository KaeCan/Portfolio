import type { JSX } from 'react';
import { TechChip } from '@/components/ui/shared/TechChip.styles';
import type { ExperienceViewModel } from '../../types';
import {
    BulletItem,
    Bullets,
    Card,
    Company,
    Description,
    Duration,
    Header,
    Position,
    Summary,
    TechList,
} from './ExperienceCard.styles';

interface Props {
    experience: ExperienceViewModel;
}

export function ExperienceCard({ experience }: Props): JSX.Element {
    return (
        <Card>
            <Header>
                <div>
                    <Position>{experience.position}</Position>
                    <Company>{experience.company}</Company>
                </div>
                <Duration>{experience.duration}</Duration>
            </Header>

            {experience.summary && <Summary>{experience.summary}</Summary>}

            {Array.isArray(experience.description) ? (
                <Bullets>
                    {experience.description.map(bullet => (
                        <BulletItem key={bullet}>{bullet}</BulletItem>
                    ))}
                </Bullets>
            ) : (
                <Description>{experience.description}</Description>
            )}

            <TechList>
                {experience.technologies.map(tech => (
                    <TechChip key={tech}>{tech}</TechChip>
                ))}
            </TechList>
        </Card>
    );
}

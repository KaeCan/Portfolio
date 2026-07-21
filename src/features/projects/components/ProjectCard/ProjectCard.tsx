import type { JSX } from 'react';
import { Icon } from '@/components/ui/shared/Icon';
import { TechChip } from '@/components/ui/shared/TechChip.styles';
import type { ProjectViewModel } from '../../types';
import {
    Actions,
    BtnPrimary,
    BtnSecondary,
    Card,
    Content,
    Description,
    ImageWrap,
    Placeholder,
    TechList,
    Title,
} from './ProjectCard.styles';

interface Props {
    project: ProjectViewModel;
}

export function ProjectCard({ project }: Props): JSX.Element {
    const isSingleButton = Boolean(
        (project.liveUrl && !project.githubUrl) ||
        (!project.liveUrl && project.githubUrl)
    );

    return (
        <Card>
            <ImageWrap>
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                    />
                ) : (
                    <Placeholder aria-hidden="true">◆</Placeholder>
                )}
            </ImageWrap>
            <Content>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <TechList>
                    {project.technologies.map(tech => (
                        <TechChip key={tech}>{tech}</TechChip>
                    ))}
                </TechList>
            </Content>
            <Actions>
                {project.liveUrl && (
                    <BtnPrimary
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-full={isSingleButton ? 'true' : 'false'}
                    >
                        <Icon name="link" size={18} />
                        Live Demo
                    </BtnPrimary>
                )}
                {project.githubUrl && (
                    <BtnSecondary
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-full={isSingleButton ? 'true' : 'false'}
                    >
                        <Icon name="github" size={18} />
                        View Code
                    </BtnSecondary>
                )}
            </Actions>
        </Card>
    );
}

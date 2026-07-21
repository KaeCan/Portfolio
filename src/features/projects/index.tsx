import type { JSX } from 'react';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { ProjectsGithubLink } from './components/ProjectsGithubLink/ProjectsGithubLink';
import type { ProjectViewModel } from './types';
import { Container, Grid, Section } from './Projects.styles';

interface Props {
    projects: ProjectViewModel[];
    githubProfile: string;
}

export function Projects({ projects, githubProfile }: Props): JSX.Element {
    return (
        <Section>
            <Container>
                <Grid>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </Grid>

                <ProjectsGithubLink githubProfile={githubProfile} />
            </Container>
        </Section>
    );
}

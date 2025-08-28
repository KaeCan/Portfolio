import React from 'react';
import { Box, Typography, Container, Chip, Link } from '@mui/material';
import projectsStyles from './projects.styles';
import projectsData from '../../shared/data/projects.json';
import type { Project } from '../../shared/types/index';

const Projects: React.FC = () => {
    const projects: Project[] = projectsData.projects;

    return (
        <Box component="section" sx={projectsStyles.getProjectsSectionStyles()}>
            <Container sx={projectsStyles.getProjectsContainerStyles()}>
                <Box sx={projectsStyles.getProjectsGridStyles()}>
                    {projects.map(project => (
                        <Box key={project.id}>
                            <Box sx={projectsStyles.getProjectCardStyles()}>
                                <Box
                                    sx={projectsStyles.getProjectImageStyles()}
                                >
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: 0.8,
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            sx={projectsStyles.getProjectEmojiStyles()}
                                        >
                                            🚀
                                        </Box>
                                    )}
                                </Box>
                                <Box
                                    sx={projectsStyles.getProjectContentStyles()}
                                >
                                    <Typography
                                        component="h3"
                                        sx={projectsStyles.getProjectTitleStyles()}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        sx={projectsStyles.getProjectDescriptionStyles()}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box
                                        sx={projectsStyles.getTechWrapperStyles()}
                                    >
                                        {project.technologies.map(tech => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                sx={projectsStyles.getProjectTechStyles()}
                                                size="small"
                                            />
                                        ))}
                                    </Box>
                                </Box>
                                <Box
                                    sx={projectsStyles.getProjectActionsStyles()}
                                >
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={projectsStyles.getProjectButtonStyles(
                                                'primary'
                                            )}
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                />
                                            </svg>
                                            Live Demo
                                        </Link>
                                    )}
                                    {project.githubUrl && (
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={projectsStyles.getProjectButtonStyles(
                                                'secondary'
                                            )}
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.927 0-1.088.39-1.979 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.58 9.58 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.704 1.028 1.595 1.028 2.683 0 3.842-2.339 4.678-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" />
                                            </svg>
                                            View Code
                                        </Link>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box sx={projectsStyles.getGithubCenterStyles()}>
                    <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={projectsStyles.getGithubButtonStyles()}
                    >
                        <svg
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        <Box
                            component="span"
                            sx={projectsStyles.getGithubTextStyles()}
                        >
                            View All Projects on GitHub
                        </Box>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;

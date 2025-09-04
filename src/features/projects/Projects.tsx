import React from 'react';
import { Box, Typography, Container, Chip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import projectsStyles from './projects.styles';
import projectsData from '../../shared/data/projects.json';
import type { Project } from '../../shared/types/index';



const Projects: React.FC = () => {
    const projects: Project[] = projectsData.projects;

    return (
        <Box component="section" sx={projectsStyles.getProjectsSectionStyles()}>
            <Container sx={projectsStyles.getProjectsContainerStyles()}>
                <Box sx={projectsStyles.getProjectsGridStyles()}>
                    {projects.map((project) => (
                        <Box key={project.title}>
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
                                    {((): JSX.Element => {
                                        const hasLiveUrl = !!project.liveUrl;
                                        const hasGithubUrl = !!project.githubUrl;
                                        const _isSingleButton = (hasLiveUrl && !hasGithubUrl) || (!hasLiveUrl && hasGithubUrl);

                                        return (
                                            <>
                                                {project.liveUrl && (
                                                    <Link
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={projectsStyles.getProjectButtonStyles(
                                                            'primary',
                                                            _isSingleButton
                                                        )}
                                                    >
                                                        <LinkIcon />
                                                        Live Demo
                                                    </Link>
                                                )}
                                                {project.githubUrl && (
                                                    <Link
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={projectsStyles.getProjectButtonStyles(
                                                            'secondary',
                                                            _isSingleButton
                                                        )}
                                                    >
                                                        <GitHubIcon />
                                                        View Code
                                                    </Link>
                                                )}
                                            </>
                                        );
                                    })()}
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
                        <GitHubIcon />
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

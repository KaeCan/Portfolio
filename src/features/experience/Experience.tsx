import React from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import experienceStyles from './experience.styles';
import experienceData from '../../shared/data/experience.json';
import type { ExperienceItem, StatItem } from '../../shared/types/index';

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = experienceData.experiences;
    const stats: StatItem[] = experienceData.stats;

    return (
        <Box
            component="section"
            sx={experienceStyles.getExperienceSectionStyles()}
        >
            <Container sx={experienceStyles.getExperienceContainerStyles()}>
                <Box sx={experienceStyles.getExperienceMainContainerStyles()}>
                    <Box sx={experienceStyles.getExperienceListStyles()}>
                        {experiences.map((exp, index) => (
                            <Box
                                key={index}
                                sx={experienceStyles.getExperienceCardStyles()}
                            >
                                <Box
                                    sx={experienceStyles.getExperienceHeaderRowStyles()}
                                >
                                    <Box>
                                        <Typography
                                            sx={experienceStyles.getExperiencePositionStyles()}
                                        >
                                            {exp.position}
                                        </Typography>
                                        <Typography
                                            sx={experienceStyles.getExperienceCompanyStyles()}
                                        >
                                            {exp.company}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={experienceStyles.getExperienceBoxStyles()}
                                    >
                                        <Box
                                            component="span"
                                            sx={experienceStyles.getExperienceDurationStyles()}
                                        >
                                            {exp.duration}
                                        </Box>
                                    </Box>
                                </Box>

                                <Typography
                                    sx={experienceStyles.getExperienceDescriptionStyles()}
                                >
                                    {exp.description}
                                </Typography>

                                <Box
                                    sx={experienceStyles.getTechContainerStyles()}
                                >
                                    {exp.technologies.map(tech => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={experienceStyles.getExperienceTechStyles()}
                                            size="small"
                                        />
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={experienceStyles.getStatsGridStyles()}>
                        {stats.map((stat, index) => (
                            <Box
                                key={index}
                                sx={experienceStyles.getStatCardStyles()}
                            >
                                <Typography
                                    sx={experienceStyles.getStatNumberStyles()}
                                >
                                    {stat.number}
                                </Typography>
                                <Typography
                                    sx={experienceStyles.getStatLabelStyles()}
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Experience;

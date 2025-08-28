import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import skillsStyles from './skills.styles';
import skillsData from '../../shared/data/skills.json';
import type { SkillsData } from '../../shared/types/index';

const Skills: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [isExpanded, setIsExpanded] = useState(false);

    const skillsDataImported = skillsData.skillsData;
    const categories = skillsData.categories;

    const getCategoryIcon = (categoryKey: string): JSX.Element | null => {
        const iconStyle = { width: 32, height: 32, color: 'white' };

        switch (categoryKey) {
            case 'frontend':
                return (
                    <svg
                        style={iconStyle}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                );
            case 'backend':
                return (
                    <svg
                        style={iconStyle}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                    </svg>
                );
            case 'tools':
                return (
                    <svg
                        style={iconStyle}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                );
            case 'other':
                return (
                    <svg
                        style={iconStyle}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                    </svg>
                );
            default:
                return null;
        }
    };

    const handleCategoryClick = (categoryKey: string): void => {
        if (!isExpanded) {
            setIsExpanded(true);
            setSelectedCategory(categoryKey);
        } else {
            setSelectedCategory(categoryKey);
        }
    };

    return (
        <Box component="section" sx={skillsStyles.getSkillsSectionStyles()}>
            <Box sx={skillsStyles.getSkillsMainContainerStyles()}>
                <Box
                    sx={skillsStyles.getCategoryTilesContainerStyles(
                        isExpanded
                    )}
                >
                    <Box sx={skillsStyles.getCategoryContainerStyles()}>
                        {categories.map(category => (
                            <Box
                                key={category.key}
                                onClick={() =>
                                    handleCategoryClick(category.key)
                                }
                                sx={skillsStyles.getCategoryTileStyles(
                                    category,
                                    isExpanded,
                                    selectedCategory === category.key,
                                    selectedCategory !== null &&
                                        selectedCategory !== category.key
                                )}
                            >
                                <Box
                                    sx={skillsStyles.getCategoryIconContainerStyles(
                                        isExpanded
                                    )}
                                >
                                    {getCategoryIcon(category.key)}
                                </Box>
                                <Typography
                                    sx={skillsStyles.getCategoryLabelStyles(
                                        isExpanded
                                    )}
                                >
                                    {category.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={skillsStyles.getSkillsDisplayAreaStyles(isExpanded)}>
                    {selectedCategory && isExpanded && (
                        <Box sx={skillsStyles.getSkillsCardStyles()}>
                            <Typography
                                component="h3"
                                sx={skillsStyles.getSkillsTitleStyles()}
                            >
                                {
                                    categories.find(
                                        cat => cat.key === selectedCategory
                                    )?.label
                                }{' '}
                                Technologies
                            </Typography>
                            <Box sx={skillsStyles.getSkillsGridStyles()}>
                                {skillsDataImported[
                                    selectedCategory as keyof SkillsData
                                ].map((skill, index) => (
                                    <Box key={skill.label}>
                                        <Box
                                            sx={skillsStyles.getSkillItemStyles(
                                                index
                                            )}
                                        >
                                            <Box
                                                sx={skillsStyles.getSkillIconStyles()}
                                            >
                                                {skill.icon}
                                            </Box>
                                            <Typography
                                                sx={skillsStyles.getSkillLabelStyles()}
                                            >
                                                {skill.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;

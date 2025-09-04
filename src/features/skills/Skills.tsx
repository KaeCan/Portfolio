import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import DvrIcon from '@mui/icons-material/Dvr';
import CodeIcon from '@mui/icons-material/Code';
import HandymanIcon from '@mui/icons-material/Handyman';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import skillsStyles from './skills.styles';
import skillsData from '../../shared/data/skills.json';
import type { SkillsData, SkillItem } from '../../shared/types/index';

const Skills: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayCategory, setDisplayCategory] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastClickTime = useRef<number>(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const skillsDataImported = skillsData.skillsData;
    const categories = skillsData.categories;

    useEffect(() => {
        return (): void => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const getCategoryIcon = (categoryKey: string): JSX.Element | null => {
        const iconSize = isMobile ? (isExpanded ? 24 : 28) : 32;
        const iconStyle = { width: iconSize, height: iconSize, color: 'white' };

        switch (categoryKey) {
            case 'frameworks':
                return (
                    <DvrIcon style={iconStyle} />
                );
            case 'languagesAndPlatforms':
                return (
                    <CodeIcon style={iconStyle} />
                );
            case 'tools':
                return (
                    <HandymanIcon style={iconStyle} />
                );
            case 'other':
                return (
                    <MiscellaneousServicesIcon style={iconStyle} />
                );
            default:
                return null;
        }
    };

    const handleCategoryClick = (categoryKey: string): void => {
        const currentTime = Date.now();
        const timeSinceLastClick = currentTime - lastClickTime.current;
        const isRapidClick = timeSinceLastClick < 800;

        lastClickTime.current = currentTime;

        if (!isExpanded) {
            setIsExpanded(true);
            setSelectedCategory(categoryKey);
            setDisplayCategory(categoryKey);
        } else if (selectedCategory !== categoryKey) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            if (isRapidClick || isTransitioning) {
                setSelectedCategory(categoryKey);
                setDisplayCategory(categoryKey);
                setIsTransitioning(false);
                return;
            }

            setIsTransitioning(true);
            setSelectedCategory(categoryKey);

            timeoutRef.current = setTimeout(() => {
                setDisplayCategory(categoryKey);
                setIsTransitioning(false);
            }, 200);
        }
    };

    return (
        <Box
            component="section"
            sx={skillsStyles.getSkillsSectionStyles(isExpanded)}
        >
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
                                    sx={skillsStyles.getCategoryIconContainerStyles()}
                                >
                                    {getCategoryIcon(category.key)}
                                </Box>
                                <Typography
                                    sx={skillsStyles.getCategoryLabelStyles()}
                                >
                                    {category.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={skillsStyles.getSkillsDisplayAreaStyles(isExpanded)}>
                    <Box sx={skillsStyles.getSkillsCardStyles()}>
                        <Typography
                            component="h3"
                            sx={skillsStyles.getSkillsTitleStyles()}
                        >
                            {selectedCategory
                                ? `${categories.find(cat => cat.key === selectedCategory)?.label}`
                                : 'Select a category'}
                        </Typography>
                        <Box sx={skillsStyles.getSkillsGridStyles()}>
                            {displayCategory && isExpanded ? (
                                (skillsDataImported[displayCategory as keyof SkillsData] || []).map((skill: SkillItem, index: number) => (
                                    <Box
                                        key={`${displayCategory}-${skill.label}`}
                                    >
                                        <Box
                                            sx={skillsStyles.getSkillItemStyles(
                                                index,
                                                isTransitioning
                                            )}
                                        >
                                            <Box
                                                sx={skillsStyles.getSkillIconStyles()}
                                            >
                                                {typeof skill.icon === 'string' && skill.icon.startsWith('http') ? (
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.label}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'contain',
                                                            filter: 'brightness(0) invert(1)',
                                                        }}
                                                    />
                                                ) : (
                                                    skill.icon
                                                )}
                                            </Box>
                                            <Typography
                                                sx={skillsStyles.getSkillLabelStyles()}
                                            >
                                                {skill.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))
                            ) : (
                                <Box
                                    sx={{
                                        height: '200px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.5)',
                                    }}
                                >
                                    Choose a category above to view skills
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;

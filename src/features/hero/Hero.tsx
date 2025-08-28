import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import heroStyles from './hero.styles';

const Hero: React.FC = () => {
    return (
        <Box component="section" sx={heroStyles.getHeroSectionStyles()}>
            <Container sx={heroStyles.getHeroContainerStyles()}>
                <Box sx={heroStyles.getProfileImageContainerStyles()}>
                    <Box sx={heroStyles.getProfileImageOuterStyles()}>
                        <Box sx={heroStyles.getProfileImageInnerStyles()}>
                            <svg
                                width="64"
                                height="64"
                                fill="#9ca3af"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Box>
                    </Box>
                </Box>

                <Typography
                    component="h1"
                    sx={heroStyles.getMainHeadingStyles()}
                >
                    Hi, I&apos;m{' '}
                    <Box
                        component="span"
                        sx={heroStyles.getNameGradientStyles()}
                    >
                        Kyle Chan
                    </Box>
                </Typography>

                <Typography sx={heroStyles.getSubtitleStyles()}>
                    Full Stack Developer
                </Typography>

                <Box sx={heroStyles.getCommandHintContainerStyles()}>
                    <Box sx={heroStyles.getCommandHintStyles()}>
                        <Box sx={heroStyles.getKbdContainerStyles()}>
                            <Box component="kbd" sx={heroStyles.getKbdStyles()}>
                                {typeof window !== 'undefined' &&
                                navigator?.userAgent
                                    ?.toLowerCase()
                                    .includes('mac')
                                    ? '⌘'
                                    : 'Ctrl'}
                            </Box>
                            <Box component="kbd" sx={heroStyles.getKbdStyles()}>
                                K
                            </Box>
                        </Box>
                        <Typography variant="body2">
                            or tap the menu button to navigate
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;

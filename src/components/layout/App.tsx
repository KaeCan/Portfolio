import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Box, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Hero from '../../features/hero';
import Skills from '../../features/skills';
import Experience from '../../features/experience';
import Projects from '../../features/projects';
import CustomCommandPalette from '../../features/command-palette';
import appStyles from '../../shared/styles/app.styles';
import type { PageType } from '../../shared/types/index';

const App: React.FC = () => {
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<PageType>('home');

    useEffect(() => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (
                (navigator?.userAgent?.toLowerCase().includes('mac')
                    ? e.metaKey
                    : e.ctrlKey) &&
                e.key === 'k'
            ) {
                e.preventDefault();
                e.stopPropagation();
                setIsCommandPaletteOpen(prev => !prev);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return (): void =>
            document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const renderCurrentPage = (): JSX.Element => {
        switch (currentPage) {
            case 'home':
                return <Hero key="home" />;
            case 'skills':
                return <Skills key="skills" />;
            case 'experience':
                return <Experience key="experience" />;
            case 'projects':
                return <Projects key="projects" />;
            default:
                return <Hero key="home" />;
        }
    };

    return (
        <Box sx={appStyles.getAppContainerStyles()}>
            <TransitionGroup>
                <CSSTransition
                    key={currentPage}
                    timeout={300}
                    classNames="page-transition"
                    appear
                >
                    <Box sx={appStyles.getPageContainerStyles()}>
                        {renderCurrentPage()}
                    </Box>
                </CSSTransition>
            </TransitionGroup>
            <CustomCommandPalette
                isOpen={isCommandPaletteOpen}
                setIsOpen={setIsCommandPaletteOpen}
                currentPage={currentPage}
                onNavigate={setCurrentPage}
            />

            <Fab
                color="primary"
                aria-label="open command palette"
                onClick={() => setIsCommandPaletteOpen(true)}
                sx={appStyles.getFabStyles()}
            >
                <MenuIcon />
            </Fab>
        </Box>
    );
};

export default App;

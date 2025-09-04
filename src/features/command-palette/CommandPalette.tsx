import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, Modal, Fade } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeBracketIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import RectangleStackIcon from '@mui/icons-material/Layers';
import UserIcon from '@mui/icons-material/Person';
import EnvelopeIcon from '@mui/icons-material/Email';
import DocumentArrowDownIcon from '@mui/icons-material/Download';
import commandPaletteStyles from './command-palette.styles';
import commandsData from '../../shared/data/commands.json';
import type {
    PageType,
    CommandItem,
    CommandGroup,
    CustomCommandPaletteProps,
} from '../../shared/types/index';

const iconMap = {
    HomeIcon,
    CodeBracketIcon,
    WorkIcon,
    RectangleStackIcon,
    UserIcon,
    EnvelopeIcon,
    DocumentArrowDownIcon,
};

const CustomCommandPalette: React.FC<CustomCommandPaletteProps> = ({
    isOpen,
    setIsOpen,
    currentPage,
    onNavigate,
}) => {
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const navigateToPage = (page: PageType): void => {
        onNavigate(page);
        setIsOpen(false);
    };

    const commandGroups: CommandGroup[] = commandsData.commandGroups.map(
        group => ({
            ...group,
            items: group.items.map(item => {
                if ('page' in item) {
                    return {
                        id: item.id,
                        children:
                            currentPage === item.page
                                ? item.currentPageText
                                : item.children,
                        icon: item.icon,
                        onClick: () => navigateToPage(item.page as PageType),
                    };
                }
                return {
                    id: item.id,
                    children: item.children,
                    icon: item.icon,
                    href: item.href,
                    target: item.target,
                    rel: item.rel,
                };
            }),
        })
    );

    const filteredGroups = commandGroups
        .map(group => ({
            ...group,
            items: group.items.filter(
                item =>
                    item.children
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    group.heading.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter(group => group.items.length > 0);

    const allItems = filteredGroups.flatMap(group => group.items);

    const handleItemAction = useCallback(
        (item: CommandItem) => {
            if (item.onClick) {
                item.onClick();
            } else if (item.href) {
                if (item.target === '_blank') {
                    window.open(
                        item.href,
                        item.target,
                        item.rel ? `rel=${item.rel}` : ''
                    );
                } else {
                    window.location.href = item.href;
                }
                setIsOpen(false);
            }
        },
        [setIsOpen]
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (!isOpen) return;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex(prev =>
                        Math.min(prev + 1, allItems.length - 1)
                    );
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex(prev => Math.max(prev - 1, 0));
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (allItems[selectedIndex]) {
                        handleItemAction(allItems[selectedIndex]);
                    }
                    break;
                case 'Escape':
                    e.preventDefault();
                    setIsOpen(false);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return (): void =>
            document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, allItems, selectedIndex, setIsOpen, handleItemAction]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    const handleFadeEntered = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setSearch('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !scrollContainerRef.current) return;

        const selectedElement = scrollContainerRef.current.querySelector(
            `[data-item-index="${selectedIndex}"]`
        );
        if (selectedElement) {
            selectedElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
        }
    }, [selectedIndex, isOpen]);

    const renderIcon = (iconName: string): JSX.Element | null => {
        const Icon = iconMap[iconName as keyof typeof iconMap];
        if (!Icon) return null;
        return <Icon className="w-5 h-5" />;
    };

    let currentItemIndex = 0;

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            closeAfterTransition
            slotProps={{
                backdrop: commandPaletteStyles.getBackdropStyles(),
            }}
            sx={commandPaletteStyles.getModalStyles()}
        >
            <Fade in={isOpen} timeout={300} onEntered={handleFadeEntered}>
                <Box
                    sx={commandPaletteStyles.getCommandPaletteContainerStyles()}
                >
                    <Box
                        sx={commandPaletteStyles.getSearchInputContainerStyles()}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search for commands, sections, or actions..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={commandPaletteStyles.getSearchInputStyles()}
                        />
                        <style>
                            {commandPaletteStyles.getSearchInputPlaceholderStyles()}
                        </style>
                    </Box>

                    <Box
                        ref={scrollContainerRef}
                        sx={commandPaletteStyles.getResultsContainerStyles()}
                    >
                        {filteredGroups.length > 0 ? (
                            filteredGroups.map(group => (
                                <Box
                                    key={group.id}
                                    sx={commandPaletteStyles.getGroupContainerStyles()}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={commandPaletteStyles.getGroupHeadingStyles()}
                                    >
                                        {group.heading}
                                    </Typography>

                                    {group.items.map(item => {
                                        const isSelected =
                                            currentItemIndex === selectedIndex;
                                        const itemIndex = currentItemIndex++;

                                        return (
                                            <Box
                                                key={item.id}
                                                data-item-index={itemIndex}
                                                onClick={() =>
                                                    handleItemAction(item)
                                                }
                                                onMouseEnter={() =>
                                                    setSelectedIndex(itemIndex)
                                                }
                                                sx={commandPaletteStyles.getCommandItemStyles(
                                                    isSelected
                                                )}
                                            >
                                                {renderIcon(item.icon)}
                                                <Typography
                                                    sx={commandPaletteStyles.getCommandItemTextStyles()}
                                                >
                                                    {item.children}
                                                </Typography>
                                                {item.href && (
                                                    <Typography
                                                        variant="caption"
                                                        sx={commandPaletteStyles.getCommandItemBadgeStyles()}
                                                    >
                                                        {item.target ===
                                                        '_blank'
                                                            ? 'Link'
                                                            : 'Action'}
                                                    </Typography>
                                                )}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            ))
                        ) : (
                            <Box
                                sx={commandPaletteStyles.getNoResultsContainerStyles()}
                            >
                                <Typography
                                    sx={commandPaletteStyles.getNoResultsTextStyles()}
                                >
                                    No results found for &quot;{search}&quot;
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    <Box sx={commandPaletteStyles.getFooterStyles()}>
                        <Box
                            sx={commandPaletteStyles.getFooterControlsStyles()}
                        >
                            <Box
                                sx={commandPaletteStyles.getFooterControlItemStyles()}
                            >
                                <Box
                                    component="kbd"
                                    sx={commandPaletteStyles.getKbdStyles()}
                                >
                                    ↑↓
                                </Box>
                                <Typography variant="caption">
                                    to navigate
                                </Typography>
                            </Box>
                            <Box
                                sx={commandPaletteStyles.getFooterControlItemStyles()}
                            >
                                <Box
                                    component="kbd"
                                    sx={commandPaletteStyles.getKbdStyles()}
                                >
                                    ↵
                                </Box>
                                <Typography variant="caption">
                                    to select
                                </Typography>
                            </Box>
                            <Box
                                sx={commandPaletteStyles.getFooterControlItemStyles()}
                            >
                                <Box
                                    component="kbd"
                                    sx={commandPaletteStyles.getKbdStyles()}
                                >
                                    esc
                                </Box>
                                <Typography variant="caption">
                                    to close
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default CustomCommandPalette;

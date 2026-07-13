import { useState, useEffect, useRef, useCallback, type JSX } from 'react';
import './command-palette.css';

export type NavIcon = 'home' | 'experience';
export type ActionIcon = 'github' | 'linkedin' | 'email' | 'resume';

export interface NavCommand {
    id: string;
    label: string;
    currentLabel: string;
    href: string;
    icon: NavIcon;
    path: string;
}

export interface LinkCommand {
    id: string;
    label: string;
    href: string;
    icon: ActionIcon;
    external: boolean;
}

export interface PaletteCommands {
    navigation: NavCommand[];
    social: LinkCommand[];
    actions: LinkCommand[];
}

interface Props {
    commands: PaletteCommands;
    currentPath: string;
}

interface FlatItem {
    id: string;
    label: string;
    href: string;
    icon: NavIcon | ActionIcon;
    external?: boolean;
    badge?: string;
}

const iconPaths: Record<NavIcon | ActionIcon, string> = {
    home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    experience:
        'M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4z',
    github: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.4 3.6 18.4 4 18.4 4c.6 1.6.2 2.8.1 3.1a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z',
    linkedin:
        'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    email: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
    resume: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
};

function Icon({ name }: { name: NavIcon | ActionIcon }): JSX.Element {
    return (
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d={iconPaths[name]} />
        </svg>
    );
}

export default function CommandPalette({
    commands,
    currentPath,
}: Props): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const groups: { id: string; heading: string; items: FlatItem[] }[] = [
        {
            id: 'navigation',
            heading: 'Navigation',
            items: commands.navigation.map(item => ({
                id: item.id,
                label:
                    currentPath === item.path ? item.currentLabel : item.label,
                href: item.href,
                icon: item.icon,
            })),
        },
        {
            id: 'social',
            heading: 'Social & Contact',
            items: commands.social.map(item => ({
                id: item.id,
                label: item.label,
                href: item.href,
                icon: item.icon,
                external: item.external,
                badge: item.external ? 'Link' : 'Action',
            })),
        },
        {
            id: 'actions',
            heading: 'Actions',
            items: commands.actions.map(item => ({
                id: item.id,
                label: item.label,
                href: item.href,
                icon: item.icon,
                external: item.external,
                badge: item.external ? 'Link' : 'Action',
            })),
        },
    ];

    const filteredGroups = groups
        .map(group => ({
            ...group,
            items: group.items.filter(
                item =>
                    item.label.toLowerCase().includes(search.toLowerCase()) ||
                    group.heading.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter(group => group.items.length > 0);

    const allItems: FlatItem[] = filteredGroups.flatMap(group => group.items);

    const runItem = useCallback((item: FlatItem): void => {
        if (item.external) {
            window.open(item.href, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = item.href;
        }
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            let innerFrame = 0;
            const outerFrame = requestAnimationFrame((): void => {
                innerFrame = requestAnimationFrame((): void => {
                    setIsVisible(true);
                });
            });
            return (): void => {
                cancelAnimationFrame(outerFrame);
                cancelAnimationFrame(innerFrame);
            };
        }

        setIsVisible(false);
        const timeout = window.setTimeout((): void => {
            setIsMounted(false);
            setSearch('');
            setSelectedIndex(0);
        }, 300);

        return (): void => window.clearTimeout(timeout);
    }, [isOpen]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent): void => {
            const isMac = navigator.userAgent.toLowerCase().includes('mac');
            if ((isMac ? e.metaKey : e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return (): void => document.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev =>
                    Math.min(prev + 1, Math.max(allItems.length - 1, 0))
                );
                return;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
                return;
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                if (allItems[selectedIndex]) runItem(allItems[selectedIndex]);
                return;
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return (): void => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen, allItems, selectedIndex, runItem]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    useEffect(() => {
        if (isOpen && isVisible) {
            inputRef.current?.focus();
        }
    }, [isOpen, isVisible]);

    useEffect(() => {
        if (!isOpen || !listRef.current) return;
        const selected = listRef.current.querySelector(
            `[data-item-index="${selectedIndex}"]`
        );
        selected?.scrollIntoView({ block: 'nearest' });
    }, [selectedIndex, isOpen]);

    let itemIndex = 0;

    return (
        <>
            <button
                type="button"
                className="menu-fab"
                aria-label="Open command palette"
                onClick={(): void => setIsOpen(true)}
            >
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </button>

            {isMounted && (
                <div
                    className={
                        isVisible
                            ? 'cp-overlay cp-overlay--open'
                            : 'cp-overlay'
                    }
                >
                    <button
                        type="button"
                        className="cp-backdrop"
                        aria-label="Close command palette"
                        onClick={(): void => setIsOpen(false)}
                    />
                    <div
                        className="cp"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Command palette"
                    >
                        <div className="cp__search">
                            <input
                                ref={inputRef}
                                className="cp__input"
                                type="text"
                                placeholder="Search for commands, sections, or actions..."
                                value={search}
                                onChange={(e): void =>
                                    setSearch(e.target.value)
                                }
                            />
                        </div>

                        <div className="cp__results" ref={listRef}>
                            {filteredGroups.length > 0 ? (
                                filteredGroups.map(group => (
                                    <div key={group.id} className="cp__group">
                                        <p className="cp__heading">
                                            {group.heading}
                                        </p>
                                        {group.items.map(item => {
                                            const index = itemIndex++;
                                            const isSelected =
                                                index === selectedIndex;
                                            return (
                                                <button
                                                    key={item.id}
                                                    type="button"
                                                    data-item-index={index}
                                                    className={
                                                        isSelected
                                                            ? 'cp__item cp__item--selected'
                                                            : 'cp__item'
                                                    }
                                                    onClick={(): void =>
                                                        runItem(item)
                                                    }
                                                    onMouseEnter={(): void =>
                                                        setSelectedIndex(index)
                                                    }
                                                >
                                                    <Icon name={item.icon} />
                                                    <span>{item.label}</span>
                                                    {item.badge && (
                                                        <span className="cp__badge">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                ))
                            ) : (
                                <p className="cp__empty">
                                    No results found for &quot;{search}&quot;
                                </p>
                            )}
                        </div>

                        <div className="cp__footer">
                            <span className="cp__hint">
                                <kbd className="kbd">↑↓</kbd> to navigate
                            </span>
                            <span className="cp__hint">
                                <kbd className="kbd">↵</kbd> to select
                            </span>
                            <span className="cp__hint">
                                <kbd className="kbd">esc</kbd> to close
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

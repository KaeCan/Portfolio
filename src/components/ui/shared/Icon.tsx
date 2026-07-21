import type { JSX } from 'react';
import type { IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa6';
import {
    LuBriefcase,
    LuDownload,
    LuExternalLink,
    LuHouse,
    LuMail,
    LuMenu,
    LuUser,
} from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import type { IconName } from '@/types/icons';

const icons: Record<IconName, IconType> = {
    home: LuHouse,
    experience: LuBriefcase,
    github: SiGithub,
    linkedin: FaLinkedinIn,
    email: LuMail,
    resume: LuDownload,
    link: LuExternalLink,
    menu: LuMenu,
    user: LuUser,
};

interface Props {
    name: IconName;
    size?: number;
    className?: string;
}

export function Icon({ name, size = 20, className }: Props): JSX.Element {
    const Component = icons[name];

    return <Component size={size} aria-hidden className={className} />;
}

import type { JSX } from 'react';
import { Avatar, AvatarImage, Ring, Wrap } from './HeroAvatar.styles';

interface Props {
    name: string;
}

const headshotSrc = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/headshot.png`;

export function HeroAvatar({ name }: Props): JSX.Element {
    return (
        <Wrap>
            <Ring>
                <Avatar>
                    <AvatarImage src={headshotSrc} alt={name} />
                </Avatar>
            </Ring>
        </Wrap>
    );
}

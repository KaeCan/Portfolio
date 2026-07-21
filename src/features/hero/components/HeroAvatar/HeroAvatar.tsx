import type { JSX } from 'react';
import { Icon } from '@/components/ui/shared/Icon';
import { Avatar, Ring, Wrap } from './HeroAvatar.styles';

export function HeroAvatar(): JSX.Element {
    return (
        <Wrap>
            <Ring>
                <Avatar>
                    <Icon name="user" size={64} />
                </Avatar>
            </Ring>
        </Wrap>
    );
}

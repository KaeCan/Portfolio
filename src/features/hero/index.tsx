import type { JSX } from 'react';
import { HeroAvatar } from './components/HeroAvatar/HeroAvatar';
import { HeroHint } from './components/HeroHint/HeroHint';
import { Container, Heading, Section, Subtitle } from './Hero.styles';

interface Props {
    name: string;
    role: string;
}

export function Hero({ name, role }: Props): JSX.Element {
    return (
        <Section>
            <Container>
                <HeroAvatar />

                <Heading>{name}</Heading>

                <Subtitle>{role}</Subtitle>

                <HeroHint />
            </Container>
        </Section>
    );
}

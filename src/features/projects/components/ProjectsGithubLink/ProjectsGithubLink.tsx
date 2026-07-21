import type { JSX } from 'react';
import { Icon } from '@/components/ui/shared/Icon';
import { GithubBtn, GithubWrap } from './ProjectsGithubLink.styles';

interface Props {
    githubProfile: string;
}

export function ProjectsGithubLink({ githubProfile }: Props): JSX.Element {
    return (
        <GithubWrap>
            <GithubBtn
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name="github" />
                <span>View All Projects on GitHub</span>
            </GithubBtn>
        </GithubWrap>
    );
}

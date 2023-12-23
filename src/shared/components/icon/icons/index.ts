import { Angular } from './Angular.icon';
import { GitHub } from './GitHub.icon';
import { GitLab } from './GitLab.icon';
import { LinkedIn } from './LinkedIn.icon';
import { React } from './React.icon';

export const icons = {
    'angular': Angular,
    'linkedIn': LinkedIn,
    'gitLab': GitLab,
    'gitHub': GitHub,
    'react': React
}

export type IconName = keyof typeof icons;
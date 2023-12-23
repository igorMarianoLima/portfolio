import { Angular } from './Angular.icon';
import { GitHub } from './GitHub.icon';
import { GitLab } from './GitLab.icon';
import { LinkedIn } from './LinkedIn.icon';

export const icons = {
    'angular': Angular,
    'linkedIn': LinkedIn,
    'gitLab': GitLab,
    'gitHub': GitHub
}

export type IconName = keyof typeof icons;
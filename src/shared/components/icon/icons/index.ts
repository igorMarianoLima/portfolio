import { Angular } from './Angular.icon';
import { GitHub } from './GitHub.icon';
import { GitLab } from './GitLab.icon';
import { LinkedIn } from './LinkedIn.icon';
import { Nest } from './Nest.icon';
import { React } from './React.icon';
import { ReactNative } from './ReactNative.icon';

export const icons = {
    'angular': Angular,
    'linkedIn': LinkedIn,
    'gitLab': GitLab,
    'gitHub': GitHub,
    'react': React,
    'nest': Nest,
    'reactNative': ReactNative
}

export type IconName = keyof typeof icons;
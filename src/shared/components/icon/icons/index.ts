import { Angular } from './Angular.icon';
import { Figma } from './Figma.icon';
import { GitHub } from './GitHub.icon';
import { GitLab } from './GitLab.icon';
import { LinkedIn } from './LinkedIn.icon';
import { Nest } from './Nest.icon';
import { React } from './React.icon';
import { ReactNative } from './ReactNative.icon';
import { Sql } from './Sql.icon';

export const icons = {
    'angular': Angular,
    'linkedIn': LinkedIn,
    'gitLab': GitLab,
    'gitHub': GitHub,
    'react': React,
    'nest': Nest,
    'reactNative': ReactNative,
    'sql': Sql,
    'figma': Figma
}

export type IconName = keyof typeof icons;
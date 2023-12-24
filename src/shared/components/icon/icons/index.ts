import { Angular } from './Angular.icon';
import { Css } from './Css.icon';
import { Figma } from './Figma.icon';
import { GitHub } from './GitHub.icon';
import { GitLab } from './GitLab.icon';
import { Html } from './Html.icon';
import { LinkedIn } from './LinkedIn.icon';
import { Nest } from './Nest.icon';
import { React } from './React.icon';
import { ReactNative } from './ReactNative.icon';
import { Sql } from './Sql.icon';
import { TypeScript } from './TypeScript.icon';

export const icons = {
    'angular': Angular,
    'linkedIn': LinkedIn,
    'gitLab': GitLab,
    'gitHub': GitHub,
    'react': React,
    'nest': Nest,
    'reactNative': ReactNative,
    'sql': Sql,
    'figma': Figma,
    'html': Html,
    'css': Css,
    'typeScript': TypeScript
}

export type IconName = keyof typeof icons;
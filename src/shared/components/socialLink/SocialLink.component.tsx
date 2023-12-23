import { Icon } from '../icon/Icon.component';
import { SocialLinkProps } from './SocialLink.interface';
import * as S from './SocialLink.styles';

export const SocialLink = ({
    icon,
    label,
    redirectTo
}: SocialLinkProps) => {
    return(
        <S.Link className='p1sb' href={redirectTo}>
            <Icon name={icon} size={24} /> {label}
        </S.Link>
    )
}
import { Icon } from '../../../shared/components/icon/Icon.component';
import { SocialLink } from './Footer.interface';

import * as S from './Footer.styles';

export const Footer = () => {
    const socialLinks: SocialLink[] = [
        {
            icon: 'linkedIn',
            label: 'LinkedIn',
            redirectTo: 'https://www.linkedin.com/in/igor-mariano-lima/'
        },
        {
            icon: 'gitLab',
            label: 'GitLab',
            redirectTo: 'https://gitlab.com/igorMarianoLima/'
        },
        {
            icon: 'gitHub',
            label: 'GitHub',
            redirectTo: 'https://github.com/igorMarianoLima/'
        }
    ];

    return(
        <S.FooterWrapper>
            <S.FooterContainer>
                <h1 className='h4'>Igor Mariano</h1>

                <S.SocialLinks>
                    {socialLinks.map(link =>
                        <S.SocialLink
                            className='p1sb'
                            key={link.redirectTo}
                            href={link.redirectTo}
                        >
                            <Icon name={link.icon} size={24} /> {link.label}
                        </S.SocialLink>
                    )}
                </S.SocialLinks>
            </S.FooterContainer>
        </S.FooterWrapper>
    )
}
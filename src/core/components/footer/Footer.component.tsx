import { SocialLink } from '../../../shared/components/socialLink/SocialLink.component';
import { SocialLinkProps } from '../../../shared/components/socialLink/SocialLink.interface';

import * as S from './Footer.styles';

export const Footer = () => {
    const socialLinks: SocialLinkProps[] = [
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
                    {socialLinks.map(link => <SocialLink key={link.label} {...link} />)}
                </S.SocialLinks>
            </S.FooterContainer>
        </S.FooterWrapper>
    )
}
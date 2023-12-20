import { SocialLink } from './Footer.interface';

import * as S from './Footer.styles';

export const Footer = () => {
    const socialLinks: SocialLink[] = [
        {
            icon: '',
            label: 'LinkedIn',
            redirectTo: 'https://www.linkedin.com/in/igor-mariano-lima/'
        },
        {
            icon: '',
            label: 'GitLab',
            redirectTo: 'https://gitlab.com/igorMarianoLima/'
        },
        {
            icon: '',
            label: 'GitHub',
            redirectTo: 'https://github.com/igorMarianoLima/'
        }
    ];

    return(
        <S.FooterWrapper>
            <S.FooterContainer>
                <h1>Igor Mariano</h1>

                <S.SocialLinks>
                    {socialLinks.map(link =>
                        <S.SocialLink
                            key={link.redirectTo}
                            href={link.redirectTo}
                        >
                            {link.label}
                        </S.SocialLink>
                    )}
                </S.SocialLinks>
            </S.FooterContainer>
        </S.FooterWrapper>
    )
}
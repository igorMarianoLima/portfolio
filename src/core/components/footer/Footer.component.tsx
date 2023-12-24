import { SOCIAL_LINKS } from '../../../constants/socialLinks';

import { SocialLink } from '../../../shared/components/socialLink/SocialLink.component';
import * as S from './Footer.styles';

export const Footer = () => {
    return(
        <S.FooterWrapper>
            <S.FooterContainer>
                <h1 className='h4'>Igor Mariano</h1>

                <S.SocialLinks>
                    {SOCIAL_LINKS.map(link => <SocialLink key={link.label} {...link} />)}
                </S.SocialLinks>
            </S.FooterContainer>
        </S.FooterWrapper>
    )
}
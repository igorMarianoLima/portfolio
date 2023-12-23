import { Button } from '../../../core/components/button/Button.component';
import { DevelopedProjectProps } from './DevelopedProject.interface';
import * as S from './DevelopedProject.styles';

export const DevelopedProject = ({
    side,
    coverSrc,
    title,
    technologies,
    repositoryLink,
    deployLink
}: DevelopedProjectProps) => {
    const redirectTo = (link: string) => {
        window.open(link, '_blank');
    }

    return(
        <S.Container $side={side}>
            <S.ImageContainer>
                <img src={coverSrc} />

                <S.ContentWrapper $side={side}>
                    <div>
                        <S.ProjectName className='h4'>
                            { title }
                        </S.ProjectName>
                        <S.ProjectTechnologies className='h5'>
                            { technologies.join(', ') }
                        </S.ProjectTechnologies>
                    </div>

                    <S.Options>
                        <Button
                            onClick={() => redirectTo(deployLink)}
                        >
                            Ver deploy
                        </Button>
                        <Button
                            variant='ghost'
                            onClick={() => redirectTo(repositoryLink)}
                        >
                            Ir para repositório
                        </Button>
                    </S.Options>
                </S.ContentWrapper>
            </S.ImageContainer>
        </S.Container>
    )
}
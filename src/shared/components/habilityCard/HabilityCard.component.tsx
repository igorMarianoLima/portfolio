import { HabilityCardProps } from './HabilityCard.interface';
import * as S from './HabilityCard.styles';

export const HabilityCard = ({
    title,
    progressPercentage
}: HabilityCardProps) => {
    return(
        <S.Container>
            <S.Texts>
                <h1 className='h6'>{ title }</h1>
            </S.Texts>

            <S.ProficiencyProgress max={100} value={progressPercentage} />
        </S.Container>
    )
}
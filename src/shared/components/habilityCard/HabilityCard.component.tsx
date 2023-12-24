import { Icon } from '../icon/Icon.component';
import { HabilityCardProps } from './HabilityCard.interface';
import * as S from './HabilityCard.styles';

export const HabilityCard = ({
    title,
    icon,
    progressPercentage
}: HabilityCardProps) => {
    return(
        <S.Container>
            <S.Texts>
                <Icon name={icon} size={32} />
                <h1 className='h6'>{ title }</h1>
            </S.Texts>

            <S.ProficiencyProgress max={100} value={progressPercentage} />
        </S.Container>
    )
}
import { DefaultLayout } from "../../layouts/DefaultLayout.layout"
import { Button } from "../../core/components/button/Button.component";

import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { HABILITIES } from "../../constants/habilities";
import { PROJECTS } from "../../constants/projects";

import { DevelopedProject } from "../../shared/components/developedProject/DevelopedProject.component";
import { HabilityCard } from "../../shared/components/habilityCard/HabilityCard.component";
import { SocialLink } from "../../shared/components/socialLink/SocialLink.component";

import Avatar from '../../assets/images/Avatar.png';
import RocketIllustration from '../../assets/images/rocket.svg';
import * as S from './Home.styles';

import Curriculo from '../../assets/docs/curriculo.pdf';

export const HomePage = () => {
    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = window.location.origin + Curriculo;
        link.download = 'Currículo - Igor Mariano.pdf';

        link.click();
    }

    return(
        <DefaultLayout>
            <S.HeroSection id="home">
                <S.Grid
                    className="container"
                    $cols={6}
                >
                    <S.Col
                        $size={4}
                        $direction="column"
                        $gap={[32, 0]}
                    >
                        <S.HeroTexts>
                            <header>
                                <h1><S.GradientText>Olá! Sou o Igor Mariano</S.GradientText></h1>
                                <h2 className="h4">Desenvolvedor Full-Stack</h2>
                                <h2 className="h5">UI/UX Designer</h2>
                            </header>

                            <div>
                                <S.HeroDescription>
                                    <span>Desenvolvedor Full-Stack</span> com experiência em <span>Angular, React, NestJs e ExpressJs.</span>
                                </S.HeroDescription>
                                <S.HeroDescription>
                                    <span>UI/UX Designer</span> com conhecimento em <span>Figma</span>, criação de <span>Design System</span> e <span>interfaces amigáveis.</span>
                                </S.HeroDescription>
                                <S.HeroDescription>
                                    Comprometido com a <span>Inovação e Excelência!</span>
                                </S.HeroDescription>
                            </div>
                        </S.HeroTexts>

                        <Button onClick={() => downloadCv()}>
                            Baixar CV
                        </Button>
                    </S.Col>
                    <S.Col $size={2}>
                        <img src={Avatar} />
                    </S.Col>
                </S.Grid>
            </S.HeroSection>
            
            <S.Section id="sobre-mim">
                <S.Grid
                    className="container"
                    $cols={6}
                    $alignItems="center"
                >
                    <S.Col
                        $size={4}
                        $gap={[16, 0]}
                    >
                        <header>
                            <h1>
                                <S.GradientText>Sobre mim</S.GradientText>
                            </h1>
                            <h2 className="h4">Desenvolvedor apaixonado pela inovação</h2>
                        </header>

                        <S.Flex $gap={[8, 0]}>
                            <S.GrayParagraph>
                                Comecei meus estudos aos 13 anos, foi paixão ao primeiro "Hello World", e desde então nunca parei. Gosto de encarar novos desafios, criar novas soluções e identidades. Acredito que a tecnologia é mais que uma ferramenta; é uma força capaz de moldar o futuro e impactar positivamente na sociedade. E assim, busco contribuir e evoluir, sempre buscando a excelência.
                            </S.GrayParagraph>
                            <S.GrayParagraph>
                                Atuei como desenvolvedor front-end estagiário por 1 ano, onde pude expandir meus conhecimentos e habilidades em desenvolvimento web, além é claro de aprender como funciona o dia-a-dia em uma empresa voltada criação de soluções digitais.
                            </S.GrayParagraph>
                            <S.GrayParagraph>
                                Durante o desenvolvimento do meu TCC (Trabalho de Conclusão de Curso) do curso técnico em 2023, atuei como TechLead do grupo, gerenciando e motivando as equipes afim de alcançarmos nosso produto final. Liderei a equipe de Design, ficando responsável pela criação do Design System, componentes e wireframes na ferramenta Figma. Também fui líder e maintainer da equipe do Front-End, criando novas features e componentes, correções de bugs e assegurando a qualidade de código durante o desenvolvimento do nosso PWA em Angular.
                            </S.GrayParagraph>
                            <S.GrayParagraph>
                                Com toda essa organização, conseguimos finalizar o TCC com êxito, alcançando nossos objetivos e sendo eleito pelos demais alunos como o melhor TCC de Desenvolvimento de Sistemas de 2023.
                            </S.GrayParagraph>
                        </S.Flex>
                    </S.Col>

                    <S.Col $size={2}>
                        <img src={RocketIllustration} />
                    </S.Col>
                </S.Grid>
            </S.Section>

            <S.Section id="projetos">
                <S.Flex className='container' $gap={[48, 0]}>
                    <header>
                        <h1><S.GradientText>Projetos</S.GradientText></h1>
                        <h2 className="h4">Inovação em cada linha de código</h2>
                    </header>
                    <S.Flex $gap={[96, 48]}>
                        {PROJECTS.map((project, index) => 
                            <DevelopedProject
                                key={project.repositoryLink}
                                side={index % 2 === 0 ? 'left' : 'right'}
                                {...project}
                            />    
                        )}
                    </S.Flex>
                </S.Flex>
            </S.Section>

            <S.Section id="habilidades">
                <S.Flex className="container" $gap={[48, 0]}>
                    <header>
                        <h1><S.GradientText>Habilidades</S.GradientText></h1>
                        <h2 className="h4">Competências que me impulsionam</h2>
                    </header>

                    <S.Flex $gap={[12, 0]}>
                        <h3>Hard Skills</h3>

                        <S.Grid $cols={3}>
                            {HABILITIES.map(hability => 
                                <S.Col key={hability.title} $size={1}>
                                    <HabilityCard {...hability} />
                                </S.Col>    
                            )}
                        </S.Grid>
                    </S.Flex>
                </S.Flex>
            </S.Section>

            <S.Section id="contato">
                <S.Grid
                    className="container"
                    $cols={2}
                    $alignItems="center"
                >
                    <S.ContactDivider $size={1}>
                        <header>
                            <h1><S.GradientText>Contato</S.GradientText></h1>
                            <h2 className="h4">Conecte-se comigo</h2>
                        </header>
                    </S.ContactDivider>
                    <S.ContactDivider $size={1} $gap={[24, 0]}>
                        <header>
                            <h1 className="h4">Minhas redes sociais</h1>
                            <h2 className="h5">Conheça mais sobre mim</h2>
                        </header>
                        
                        <S.Flex $gap={[8, 12]} $direction="row">
                            {SOCIAL_LINKS.map(link => <SocialLink key={link.label} {...link} />)}
                        </S.Flex>
                    </S.ContactDivider>
                </S.Grid>
            </S.Section>
        </DefaultLayout>
    )
}
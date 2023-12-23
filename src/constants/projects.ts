import { DevelopedProjectProps } from "../shared/components/developedProject/DevelopedProject.interface";

import TccFitLifeMockup from '../../assets/images/projects/tcc-fitlife.png';
import DashboardEfrontMockup from '../../assets/images/projects/dashboard-efront.png';
import EcommerceSneakersMockup from '../../assets/images/projects/ecommerce-sneakers.png';

export const PROJECTS: Omit<DevelopedProjectProps, 'side'>[] = [
    {
        title: 'FitLife | TCC',
        technologies: ['Angular', 'NgRx', 'Firebase'],
        coverSrc: TccFitLifeMockup,
        repositoryLink: '',
        deployLink: 'https://fitlife-tcc.vercel.app/'
    },
    {
        title: 'Dashboard | E-Front',
        technologies: ['Angular'],
        coverSrc: DashboardEfrontMockup,
        repositoryLink: 'https://gitlab.com/igorMarianoLima/desafio-front-end-dashboard/',
        deployLink: 'https://desafio-front-end-dashboard.vercel.app/dashboard/'
    },
    {
        title: 'E-Commerce | Sneakers',
        technologies: ['React.js'],
        coverSrc: EcommerceSneakersMockup,
        repositoryLink: 'https://github.com/igorMarianoLima/ecommerce_detalhes-produto/',
        deployLink: 'https://igormarianolima.github.io/ecommerce_detalhes-produto/'
    },
]
import { useEffect, useState } from 'react';

import { NavLink } from './Navbar.interface';

import * as S from './Navbar.styles';

export const Navbar = () => {
    const [currentHash, setCurrentHash] = useState<string>();
    
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash)
        }

        window.addEventListener('hashchange', handleHashChange)

        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    const isLinkActive = (link: NavLink) => {
        return (currentHash || '#home') === link.redirectTo
    }

    const navLinks: NavLink[] = [
        {
            label: 'Home',
            redirectTo: '#home'
        },
        {
            label: 'Sobre mim',
            redirectTo: '#sobre-mim'
        },
        {
            label: 'Projetos',
            redirectTo: '#projetos'
        },
        {
            label: 'Contato',
            redirectTo: '#contato'
        }
    ]

    return(
        <S.Header>
            <S.Container>
                <h1 className='h4'>Igor Mariano</h1>
                
                <S.Menu>
                    {navLinks.map(link => 
                        <S.MenuLink
                            key={link.redirectTo}
                            className='p1sb'
                            $isActive={isLinkActive(link)}
                            href={link.redirectTo}
                        >
                            {link.label}
                        </S.MenuLink>
                    )}
                </S.Menu>
            </S.Container>
        </S.Header>
    )
}
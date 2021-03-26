import React, { useState, useEffect } from 'react';

import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

import { Container, Navigation, Mobile } from './style'

const Header = ()=>{
    const [screenWidth, setScreenWidth] = useState([]);
    const [navbar, setNavBar] = useState(false);
    useEffect(()=>{
        setScreenWidth(window.outerWidth);
    },[]);

    const NavigationMobile = ()=>{
        return(
            <Mobile>
            {navbar?
            <>
            <ul>
            <button onClick={()=> setNavBar(!navbar)}><AiOutlineClose /></button>
            <a href="/"><strong>Home</strong></a>
            <a href="#types"><strong>Tipos de lixos</strong></a>
            <a href="#generators"><strong>Geradores</strong></a>
            <a href="#graphics"><strong>Dados da pesquisa</strong></a>
            <a href="#about"><strong>sobre nós</strong></a>
            </ul>
            </>
            :
            <button onClick={()=> setNavBar(!navbar)}>
                <FaBars />
            </button>
            }
            </Mobile>
        )
    }

    return(
        <Container>
            {screenWidth > 900 ?
            <Navigation>
            <div>
            <h1>RSS </h1>
            <h2> Resíduos de Serviços de Saúde</h2>
            </div>
            <nav>
            <a href="/"><strong>Home</strong></a>
            <a href="#types"><strong>Tipos de lixos</strong></a>
            <a href="#graphics"><strong>Dados da pesquisa</strong></a>
            <a href="#about"><strong>sobre nós</strong></a>
            </nav> 
            </Navigation>:
            <NavigationMobile />
            }
        </Container>
    )
}

export default Header;
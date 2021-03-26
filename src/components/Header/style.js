import styled from 'styled-components';

import backgroundIMG from '../../assets/background.jpeg'

export const Container = styled.header`
    background-color: #299610;
    

    position: relative;
    width: 100%;
    height: 70px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h1,h2,strong{
        color: #fff;
    }
    
    a{
        padding: 8px;
    }
    a + a{
        border-left: 3px solid #fff;
    }
`
export const Navigation = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const Mobile = styled.nav`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
padding: 20px;
position: relative;
ul{
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #299610;
}
    button{
        svg{
            width: 30px;
            height: 30px;
        }
        color: #fff;
        border: none;
        background-color: transparent;
    }
`
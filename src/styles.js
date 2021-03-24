import styled from 'styled-components';

export const Container = styled.div`
    background-color: #e0e0e0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    align-self: flex-start;
    display: flex;
    margin-top: 20px;
    padding: 20px;
    flex-direction: column;
    background-color: #fff;
    width: 1200px;
    justify-content: center;
    

    header{
        
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        h1{
            color: #299610;
            margin-bottom: 12px;
        }
        div{
            width: 400px;
        }
    }
    img{
        width: 300px;
    }

@media screen and (max-width: 900px){
    header{
        width: 90vw;
        h1{
            font-size: 32px;
        }
        flex-direction: column;
        img{
            margin-top: 20px;
            width: 200px;
        }
    }
}
`;

export const Resume = styled.article`
align-self: center;
margin-top: 40px;
width: 900px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
    color: #299610;
    font-size: 28px;
    margin-top: 12px;
    margin-bottom: 12px;
}
p{
    margin-bottom: 12px;
}
@media screen and (max-width: 900px){
    width: 90vw;
    padding: 20px;
    iframe{
        width: 400px;
        height: 300px;
    }
}
`;

export const Types = styled.div`
background-color: #299610;
margin-top: 90px;
width: 1020px;
border-radius: 4px;
align-self: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
h1{
    color: #fff;
    margin-bottom: 20px;
}
ul{
    display: flex;
    justify-content: center;
    align-self: center;
}
li{
    a{
        align-self: flex-end;
        justify-self: flex-end;
    }
    div{
        justify-self: flex-start;
        align-self: flex-start;
        padding: 10px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 14px;
    }
    article{
        padding: 2px;
        margin-left: 15px;
        color: #fff;
        width: 180px;
    }
    svg{
        width: 25px;
        height: 25px;
        padding: 8px;
    }
}
li + li{
    border-left: 4px solid #fff;
}
@media screen and (max-width: 900px){
    h1{
        font-size: 32px;
    }
    ul{
        flex-direction: column;
    }
    li{
        border-left: none;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    li+li{
        border-left: none;
        border-top: 4px solid #fff;
    }
}
`;

export const Generators = styled.article`
margin-top: 40px;
align-self: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 20px 60px 20px;
h2{
    color: #299610;
}
`;

export const Wrapper = styled.div`
    display: flex;
    overflow: auto;

@media screen and (max-width: 900px){
    flex-direction: column;
}
`;

export const Card = styled.div`
margin-top: 40px;
margin: 10px;
width: 300px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 20px;
border: 3px solid #E0E0E0;
border-radius: 8px;
    img{
        margin-left: 30%;
        margin-bottom: 20px;
        align-self: flex-start;
        width: 100px;
        color: #299610;
    }
    h2{
        color:#299610;
    }
    a{
        border-bottom: 2px solid #299610;
    }
    article{
        width: 300px;
        h2{
            margin-bottom: 10px;
        }
    }
`;

export const Graphicscontainer = styled.div`
align-self: center;
justify-self: center;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    img{
        border: 3px solid #E0E0E0;
        width: 600px;
        margin: 20px;
    }
    h2{
        color: #299610;
    }
@media screen and (max-width: 700px){
    width: 80vw;
    img{
        width: 80vw;
    }
}
`;

export const Footer = styled.footer`
margin-top: 100px;
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:  #299610;

    ul{
        display: flex;
    }
    li,a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1,h2,h3,p,strong{
        color: #fff;
        margin: 10px;
    }
    svg{
        width: 35px;
        height: 35px;
        filter: invert();
    }
`;
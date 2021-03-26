import React from 'react'
import { FaBiohazard, FaRecycle, FaWhatsapp } from 'react-icons/fa'
import { GiChemicalDrop, GiRadioactive, GiHandBandage } from 'react-icons/gi'

import Header from './components/Header';
import { 
  Container, 
  Content, 
  Resume,
  Types,
  Generators,
  Wrapper,
  Card,
  Graphicscontainer,
  About,
  Footer
} from './styles'

import GraphicOne from './assets/1.png';
import GraphicTwo from './assets/2.png';
import GraphicThree from './assets/002.png';
import GarbageImg from './assets/garbage.svg';
import TattoImg from './assets/tatto.svg';
import PetImg from './assets/pet.svg';
import DiabetImg from './assets/diabet.svg';

function App() {
  const generators = [
    {id: 1, imgURL: TattoImg, 
    title: 'Serviços de tatuagens', text: 'A manipulação dos resíduos perfurocortantes com agentes biológicos pode causar acidentes, levando à contaminação da população, caso os Resíduos de Serviços de Saúde (RSS)', 
    font: 'https://www.servioeste.com.br/blog/como-estudios-de-tatuagem-devem-gerenciar-seus-residuos'},
    {id: 2, imgURL: PetImg, 
    title: 'Serviços de veterinária', text: 'Assim como outros serviços de saúde, hospitais, clínicas veterinárias e pet shops também devem se atentar ao descarte de seu lixo. Isso é ser responsável com a sociedade e com o meio ambiente, já que alguns itens podem colocar em risco a saúde dos pets e da população em geral.',
     font: 'https://www.revistapetcenter.com.br/administracao/lixo-do-pet-shop-e-clinica-veterinaria-como-descarta-lo-corretamente-aprenda/'},
    {id: 3, imgURL: DiabetImg,
    title: 'Insulina de dependentes', 
    text: 'Na forma mais comum de descarte de seringas, lancetas, fitas reagentes e frascos de insulina, os usuários usaram garrafas PET, embalagem considerada inadequada pela Associação Americana de Diabetes (ADA).', 
    font: 'https://portal.coren-sp.gov.br/noticias/veja-como-orientar-os-usuarios-de-insulina-para-o-descarte-adequado-de-residuos/'
    }
  ]

  return (
    <Container>
      <Header />
      <Content>
        <header>
          <div>
            <h1>A importância de saber sobre resíduos de serviços de saúde</h1>
            <p>A população
desinformada despeja esses resíduos no lixo domiciliar sem o conhecimento dos
males que essa atitude pode acarretar ao meio ambiente e a saúde pública.</p>
          </div>
          <img src={GarbageImg} alt="Lixos"/>
        </header>
        <Resume>
          <h2>Por quê você deveria se informar sobre resíduos?</h2>
          <p>
            Os resíduos e rejeitos quando descartados de maneira incorreta causam
  impactos negativos para a saúde.
  Além disso, o lixo é potencial poluidor do solo, água e do ar. Desta forma, faz-se
  necessário abordar a importância dos processos de descarte corretamente e
  destacar quais os malefícios que eles podem causar.
          </p>
          <h2>Pessoas mais afetadas!</h2>
          <p>A seguir, um vídeo sobre as pessoas que mais lidam com coleta resíduos.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s846GukzIX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Resume>
        <Types>
          <a href="/#types" name="types">
          <h1>Tipos de Resíduos</h1>
          </a>
          <ul>
            <li>
              <div><FaBiohazard /><h2>Infectante</h2></div>
              <article>
                <p>
                Os itens a serem descartados geralmente são acondicionados em sacos brancos com o símbolo de risco padrão para materiais infectantes, podendo ou não ser esterilizados o que faria com que passassem por um micro-ondas ou pela incineração.
                </p>
              <a href="https://www.ecovallore.com.br/coleta-residuo-infectante#:~:text=COMO%20DEVE%20SER%20REALIZADA%20A%20COLETA%20DE%20RES%C3%8DDUO%20INFECTANTE&text=Os%20itens%20a%20serem%20descartados,micro%2Dondas%20ou%20pela%20incinera%C3%A7%C3%A3o.">Fonte</a>
              </article>
            </li>
            <li>
              <div><GiChemicalDrop /><h2>Químico</h2></div>
              <article>
                <p> 
                  Antes de serem descartados, os resíduos químicos precisam passar por um tratamento especializado, além de ser coletado periodicamente. Os que não podem ser recuperados, devem ser guardados em reservatórios próprios para o descarte.
                Os resíduos químicos são classificados de duas maneiras, sólidos e líquidos.
                </p>
                <a href="https://www.inovarambiental.com.br/cuidados-com-residuos-quimicos/#:~:text=Antes%20de%20serem%20descartados%2C%20os,duas%20maneiras%2C%20s%C3%B3lidos%20e%20l%C3%ADquidos.">Fonte</a>
                </article>
            </li>
            <li>
              <div><GiRadioactive /><h2>Radioativo</h2></div>
              <article>
                <p>
                A primeira etapa no gerenciamento é a armazenagem não definitiva dos resíduos no próprio local de geração, enquanto aguardam a disposição final. Sendo de responsabilidade do gerador a armazenagem correta.
                </p>
              <a href="https://www.vgresiduos.com.br/blog/como-deve-ser-feito-o-descarte-de-residuo-radioativo-hospitalar/">Fonte</a>
              </article>
            </li>
            <li>
              <div><FaRecycle/><h2>Comum</h2></div>
              <article>
                <p>
                Os resíduos comuns (aqueles que não estão contaminados e não oferecem grandes riscos) podem ser reciclados, na maioria das vezes. Assim, eles precisam ser levados a centros de reciclagem ou a postos de coleta seletiva. 
                </p>
              <a href="https://blog.seguridade.com.br/aprenda-como-fazer-o-descarte-de-residuos-corretamente/#:~:text=Os%20res%C3%ADduos%20comuns%20(aqueles%20que,%C3%A9%20sempre%20a%20melhor%20alternativa.">Fonte</a>
              </article>
            </li>
            <li>
              <div><GiHandBandage /><h2>Perfuro-Cortante</h2></div>
              <article>
                <p>
                Os materiais perfurocortantes devem ser descartados separadamente, no local de sua geração, imediatamente após o uso ou necessidade de descarte, em recipientes de paredes rígidas, resistentes à punctura, ruptura e vazamento, resistentes ao processo de esterilização, com tampa, devidamente identificados com o símbolo internacional de risco biológico
                </p>
              <a href="http://www.fiocruz.br/biosseguranca/Bis/virtual%20tour/hipertextos/up1/descarte-residuos-grupo-e.htm#:~:text=Os%20materiais%20perfurocortantes%20devem%20ser,devidamente%20identificados%20com%20o%20s%C3%ADmbolo">Fonte</a>
              </article>
            </li>
          </ul>
        </Types>
        <Generators>
          <a href="/#generators" name="generators">
          <h2>Alguns geradores desses resíduos</h2>
          </a>
          <Wrapper>
          {generators.map(generator =>{
            return(
              <Card key={generator.id}>
                <img src={generator.imgURL} alt={generator.title}/>  
                <article>
                  <h2> {generator.title} </h2>
                  <p> {generator.text} </p>
                  <a href={generator.font}>Fonte</a >
                </article>
          </Card>
            )
          })}
          </Wrapper>

        </Generators>
        <Graphicscontainer>
          <a href="/#graphics" name="graphics">
          <h2>Alguns dados levantados sobre resíduos de saúde:</h2>
          </a>
          <img src={GraphicOne} alt="gráfico-01"/>
          <img src={GraphicTwo} alt="gráfico-02"/>
          <img src={GraphicThree} alt="gráfico-03"/>
        </Graphicscontainer>
        <About>
          <a href="/#about" name="about">
          <h2>Sobre nós!</h2>
          </a>
          <p>
          Somos alunas finalistas do curso Técnico em Meio Ambiente do Centro de Educação Tecnológica do Amazonas - CETAM, nosso objetivo com esse portal é apresentar os tipos de resíduos de serviços de saúde à população alcançando principalmente os pequenos geradores como forma de agregar a educação ambiental neste público.
          </p>
        </About>
      <Footer>
        <h2>Ficou com alguma dúvida?</h2>
        <strong>Entre em contato conosco!</strong>
        <ul>
          <li>
            <a href="https://wa.me/5509288531207/?text=Estou%20com%20dúvidas%20sobre%20resíduos%20">
            <FaWhatsapp />
            <p>Whatsapp</p>
            </a>
          </li>
        </ul>
      </Footer>
      </Content>
    </Container>
  );
}

export default App;

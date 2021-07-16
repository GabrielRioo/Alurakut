import React from 'react';
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'

function ProfileSideBar(props) {

  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />

    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  console.log(comunidades);
  const githubUser = 'GabrielRioo';
  const pessoasFavoritas = ['peas', 'juunegreiros', 'omariosouto', 'rafaballerini', 'marcobrunodev']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem Vindos(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle"> O que você deseja fazer? </h2>

            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault()
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                titulo: dadosDoForm.get('title'),
                imagem: dadosDoForm.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
              console.log(comunidades);
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa" />
              </div>

              <button>
                Criar Comunidade
              </button>
            </form>

          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> Pessoas da Comunidade ({pessoasFavoritas.length})</h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )

}

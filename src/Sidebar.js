export default function Sidebar() {
  <div class="sidebar">
    <Usuario />
    <InserirSugestao />
    <Links />
    <Copyright />
  </div>
}

function Usuario() {
  <div class="usuario">
    <img src="assets/img/catanacomics.svg" />
    <div class="texto">
      <strong>catanacomics</strong>
      Catana
    </div>
  </div>
}

function Sugestoes() {
  <div class="sugestoes">
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  </div>
}

const sugeridos = [{ name: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg" },
{ name: "dog", img: "assets/img/dog.svg" },
{ name: "chibirdart", img: "assets/img/chibirdart.svg" },
{ name: "catanacomics", img: "assets/img/catanacomics.svg" }]

function Sugestao(props) {
  <div class="sugestao">
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <div class="nome">{props.name}</div>
        <div class="razao">Segue você</div>
      </div>
    </div>
  </div>
}

function InserirSugestao() {
  <div class="sugestao">
    <div class="usuario">
      {sugeridos.map(fotos => <Sugestao img={fotos.img} />)}
      <NomeSugestoes />
    </div>
    <div class="seguir">Seguir</div>
  </div>

}
function NomeSugestoes() {
  <div class="texto">
    <div class="nome">
      {sugeridos.map((nomes) => (<Sugestao name={nomes.name} />))}
    </div>
    <div class="razao">Segue você</div>
  </div>
}



function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  )
}

function Copyright() {
  return (
    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  )
}
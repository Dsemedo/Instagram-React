export default function Suggestions() {


  let listaSugestoes = [{imagemSugestao:"assets/img/adorable_animals.svg", textoSugestao:"adorable_animals", statusUsuario: "Segue você"},

  {imagemSugestao:"assets/img/razoesparaacreditar.svg", textoSugestao:"razoesparaacreditar", statusUsuario: "Novo no Instagram"},

  {imagemSugestao:"assets/img/chibirdart.svg", textoSugestao:"chibirdart", statusUsuario: "Segue você"},

  {imagemSugestao:"assets/img/bad.vibes.memes.svg", textoSugestao:"bad.vibes.memes", statusUsuario: "Segue você"},

  {imagemSugestao:"assets/img/smallcutecats.svg", textoSugestao:"smallcutecats", statusUsuario: "Segue você"},]

  return (

    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {listaSugestoes.map((ls) => <Sugestao imagemSugestao = {ls.imagemSugestao}
      textoSugestao = {ls.textoSugestao}
      statusUsuario = {ls.statusUsuario} />)}
    </div>
  )
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagemSugestao} />
        <div class="texto">
          <div class="nome">{props.textoSugestao}</div>
          <div class="razao">{props.statusUsuario}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  )
}
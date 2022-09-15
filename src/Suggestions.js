export default function Suggestions() {
  return (

    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <Sugestao imagemSugestao="assets/img/adorable_animals.svg" textoSugestao="adorable_animals" statusUsuario = "Segue você" />

      <Sugestao imagemSugestao="assets/img/razoesparaacreditar.svg" textoSugestao="razoesparaacreditar" statusUsuario = "Novo no Instagram"/>

      <Sugestao imagemSugestao="assets/img/chibirdart.svg" textoSugestao="chibirdart" statusUsuario = "Segue você"/>

      <Sugestao imagemSugestao="assets/img/bad.vibes.memes.svg" textoSugestao="bad.vibes.memes" statusUsuario = "Segue você"/>

      <Sugestao imagemSugestao="assets/img/smallcutecats.svg" textoSugestao="smallcutecats" statusUsuario = "Segue você" />
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
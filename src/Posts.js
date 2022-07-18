export default function Posts(){
  return(
  <div clas="posts">
      <div class="post">
      <Topo />
      <Conteudo />
      <Fundo />
      </div>
  </div>
  )
}

const usuarios = [{name : "meowed", img : "assets/img/meowed.svg"},
{name : "dog", img : "assets/img/dog.svg"},
{name : "chibirdart", img : "assets/img/chibirdart.svg"},
{name : "catanacomics", img : "assets/img/catanacomics.svg"}]


function InserirTopo(props){
    <div class="usuario">
      <img src= {props.img}/>
      {props.name}
    </div>
}

function Topo(){
  <div class="topo">
    <div class="usuario">
      {usuarios.map((fotos) => (<InserirTopo name = {fotos.name} img = {fotos.img}/>))}
    </div>
    <div class="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>
}


function Conteudo(){
  return (
  <div class="conteudo">
    <img src="assets/img/gato-telefone.svg" />
  </div>
  )
}


const ionicons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]

function InserirIcones(props){
  return (
<div class="acoes">
      <div>
        <ion-icon name={props.name}></ion-icon>
        <ion-icon name={props.name}></ion-icon>
        <ion-icon name={props.name}></ion-icon>
      </div>
</div>
  )
}


function Fundo(){
  <div class="fundo">
    <div class="acoes">
      <div>
      {ionicons.map((icones) => (<InserirIcones name = {icones.name}/>))}
      </div>
      <div>
      <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div class="curtidas">
      <img src="assets/img/respondeai.svg" />
      <div class="texto">
        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
      </div>
    </div>
  </div>
}

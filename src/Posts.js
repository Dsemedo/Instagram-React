export default function Posts(){
    return (
        <div class="posts">

        <Post imagemUsuario = "assets/img/barked.svg" textoUsuario = "barked" imagemPost = "assets/img/dog.svg" imagemCurtida = "assets/img/adorable_animals.svg" textoCurtida = "adorable_animals" />

        <Post imagemUsuario = "assets/img/meowed.svg" textoUsuario = "meowed" imagemPost = "assets/img/gato-telefone.svg" imagemCurtida = "assets/img/respondeai.svg" textoCurtida = "respondeai" />

  </div>
    )
}


function Post(props){
    return(
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.imagemUsuario} />
              {props.textoUsuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.imagemPost} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imagemCurtida} />
              <div class="texto">
                Curtido por <strong>{props.textoCurtida}</strong> e <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
    )
}

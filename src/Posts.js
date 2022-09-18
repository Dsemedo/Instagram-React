import { useState } from "react"



export default function Posts() {


  let postagens = [{ imagemUsuario: "assets/img/barked.svg", textoUsuario: "barked", imagemPost: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", textoCurtida: "adorable_animals" },
  { imagemUsuario: "assets/img/meowed.svg", textoUsuario: "meowed", imagemPost: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", textoCurtida: "respondeai" }]

  return (
    <div class="posts">

      {postagens.map((p) => <Post imagemUsuario={p.imagemUsuario} textoUsuario={p.textoUsuario} imagemPost={p.imagemPost} imagemCurtida={p.imagemCurtida} textoCurtida={p.textoCurtida} />)}

    </div>
  )
}




function Post(props) {

  const [contador, setContador] = useState(240.000)
  const [curtida, setCurtida] = useState(false);

  const [salvo, setSalvo] = useState(false);

  function Colorir() {
    setCurtida(!curtida)
    if (curtida == true) {
      setContador(contador - 1);

    } else {
      setContador(contador + 1);
    }

  }

  function Salvar() {
    setSalvo(!salvo)
  }

  return (
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
        <img onClick={Colorir} src={props.imagemPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div className="botoes">
            {curtida ? 
            <div className="cor-vermelha">
              <ion-icon onClick={Colorir} name="heart"></ion-icon>
            </div> : 
            <div>
              <ion-icon onClick={Colorir} name="heart-outline"></ion-icon>
            </div>}

            <div>
              <ion-icon name="chatbubble-outline"></ion-icon>
            </div>

            <div>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

          </div>
          {salvo ? 
          <div>
            <ion-icon onClick={Salvar} name="bookmark"></ion-icon>
          </div> : 
          
          <div>
            <ion-icon onClick={Salvar} name="bookmark-outline"></ion-icon>
          </div>}
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtida} />
          <div class="texto">
            Curtido por <strong>{props.textoCurtida}</strong> e <strong>outras {contador} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

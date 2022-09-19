import { useState } from "react"

export default function User() {


const [nome, setNome] = useState("Catana");
const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

  return (
    <div class="usuario">
      <img src={imagem} onClick = {() => setImagem(prompt("Insira o link da sua nova imagem"))} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={() => setNome(prompt("Digite seu novo nome"))} ></ion-icon>
        </span>
      </div>
    </div>
  )
}

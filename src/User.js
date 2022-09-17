import { useState } from "react"

export default function User() {

  const [nome, setNome] = useState("Catana");
  const [username, setUsername] = useState ("catanacomics")
  const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

  return (
    <div class="usuario">
      <img src={imagem} onClick = {() => setImagem(prompt("Insira o link da nova imagem"))} />
      <div class="texto">
        <strong>{username}</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={() => setNome(prompt("Digite o novo nome de usuário"),
          setUsername(prompt("Digite o novo username")))} ></ion-icon>
        </span>
      </div>
    </div>
  )
}

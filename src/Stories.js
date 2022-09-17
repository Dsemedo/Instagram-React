export default function Stories() {

  let conjunto = [{ imagemStory: "assets/img/9gag.svg", usuarioStory: "9gag" },
  { imagemStory: "assets/img/meowed.svg", usuarioStory: "meowed" },
  { imagemStory: "assets/img/barked.svg", usuarioStory: "barked" },
  { imagemStory: "assets/img/nathanwpylestrangeplanet.svg", usuarioStory: "nathanwpylestrangeplanet" },
  { imagemStory: "assets/img/wawawicomics.svg", usuarioStory: "wawawicomics" },
  { imagemStory: "assets/img/respondeai.svg", usuarioStory: "respondeai" },
  { imagemStory: "assets/img/filomoderna.svg", usuarioStory: "filomoderna" },
  { imagemStory: "assets/img/memeriagourmet.svg", usuarioStory: "memeriagourmet" },
  ]


  return (
    <div class="stories">
      {conjunto.map((c) => <Story imagemStory={c.imagemStory} usuarioStory={c.usuarioStory} />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagemStory} />
      </div>
      <div class="usuario">
        {props.usuarioStory}
      </div>
    </div>
  )
}
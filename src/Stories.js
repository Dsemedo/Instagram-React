export default function Stories(){
    return(
        <div class="stories">
        
        <Story imagemStory = "assets/img/9gag.svg" usuarioStory = "9gag" />
        <Story imagemStory = "assets/img/meowed.svg" usuarioStory = "meowed" />

        <Story imagemStory = "assets/img/barked.svg" usuarioStory = "barked" />
        <Story imagemStory = "assets/img/nathanwpylestrangeplanet.svg" usuarioStory = "nathanwpylestrangeplanet" />
        <Story imagemStory = "assets/img/wawawicomics.svg" usuarioStory = "wawawicomics" />
        <Story imagemStory = "assets/img/respondeai.svg" usuarioStory = "respondeai" />
        <Story imagemStory = "assets/img/filomoderna.svg" usuarioStory = "filomoderna" />

        <Story imagemStory = "assets/img/memeriagourmet.svg" usuarioStory = "memeriagourmet" />

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}

function Story(props){
  return(
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
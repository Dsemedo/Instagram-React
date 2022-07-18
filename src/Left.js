import Posts from "./Posts";

export default function Left(){

    return (
      <div className="esquerda">

        <CaixaStories />
        
      </div>
    )
}

    function Story(props){

        return (
            <div class="story">
            <div class="imagem">
                <img src= {props.img} />
            </div>
            <div class="usuario">
              {props.name}
            </div>
          </div>
        )
    }

    const users = [{name: "9gag", img: "./assets/img/9gag.svg"},
    {name: "barked", img: "./assets/img/barked.svg"},
    {name: "nathanwpylestrangeplanet", img: "./assets/img/nathanwpylestrangeplanet.svg"},
    {name: "wawawicomics", img: "./assets/img/wawawicomics.svg"},
    {name: "respondeai", img: "./assets/img/respondeai.svg"},
    {name: "filomoderna", img: "./assets/img/filomoderna.svg"},
    {name: "memeriagourmet", img: "./assets/img/memeriagourmet.svg"},
    {name: "respondeai", img: "./assets/img/respondeai.svg"},
    {name: "filomoderna", img: "./assets/img/filomoderna.svg"},
    {name: "memeriagourmet", img: "./assets/img/memeriagourmet.svg"},
    {name: "respondeai", img: "./assets/img/respondeai.svg"},
    {name: "filomoderna", img: "./assets/img/filomoderna.svg"},
    {name: "memeriagourmet", img: "./assets/img/memeriagourmet.svg"}]


    function CaixaStories() {
        return (
            <div className= "stories">
                {users.map((usuario) => 
                (<Story name = {usuario.name} img = {usuario.img} />
                ))}

            <Setinha />
            </div>
        )
    }

    function Setinha(){
        return (
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        )
    }


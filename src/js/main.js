import { ContainerApp } from "./container.js"
import { HeaderApp } from "./header.js"

class App extends NS_Component{
    constructor(){
        super(
            {},
            {
                feather: GetElm("body"),
                main: GetElm("html")                
            }
        )

        this.feather.SetChild(new HeaderApp().feather)
        this.feather.SetChild(new ContainerApp().feather)
    }
}


window.addEventListener("load", ()=>{
    new App()
})
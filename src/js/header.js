import { lang } from "./data/main-data.js"

export class HeaderApp extends NS_Component{
    constructor(){
        super({}, {
            feather: CreateElm("header")
        })
        this.linksEN = [
            ["https://github.com/Nhac-dev", "https://instagram.com/jeff.developer", "/index.html"],
            ["GitHub Author", "Instagram Author", "Pagina em Português"]
        ]
        this.linksPT = [
            [... new Set(this.linksEN[0])],
            ["GitHub do Autor", "Instagram do Autor", "English Page"]
        ]
            this.linksPT[0][2] = "/index-en.html"
        this.navLinkElm = CreateElm("nav")
        let navLinks = []

        if (lang.includes("pt")) {
            for(let i = 0, j = 0; i < this.linksPT.length;(()=>{
                if(j == 2){
                    i++
                    j = 0
                }else{
                    j++
                }
            })()){
                if(navLinks[j]){
                    navLinks[j].SetTXT(this.linksPT[i][j])
                }else{
                    navLinks.push(
                        CreateElm("a", {
                            href: this.linksPT[i][j],
                            target: j != 2? "_blank": ""
                        })
                    )
                }
            }
        }else{
            for(let i = 0, j = 0; i < this.linksEN.length;(()=>{
                if(j == 2){
                    i++
                    j = 0
                }else{
                    j++
                }
            })()){
                if(navLinks[j]){
                    navLinks[j].SetTXT(this.linksEN[i][j])
                }else{
                    navLinks.push(
                        CreateElm("a", {
                            href: this.linksEN[i][j],
                            target: j != 2? "_blank": ""

                        })
                    )
                }
            }
        }
        
        for(let i of navLinks){
            this.navLinkElm.SetChild(i)
        }

        this.feather.SetChild(this.navLinkElm)

    }
}
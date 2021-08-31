export class TabNav extends NS_Component{
    constructor(id, headTitle, contentShow){
        super(
            {},
            {
                feather: CreateElm("span", {
                    class: ["tabs"],
                    id: id.replace(/ /g, "").replace(/º/g, "").toLowerCase()
                }),
                main: GetElm(".warper")
            }
        )

        this.feather.AddTXT(headTitle)

        this.feather.Click(()=>{
            GetListElm(".content-convertor").NOS({
                display: "none"
            })
            contentShow.NOS({
                display: "block"
            })
        })
                
    }
}
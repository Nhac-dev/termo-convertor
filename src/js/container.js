import { lang } from "./data/main-data.js";
import { TabNav } from "./tab.js";

export class ContainerApp extends NS_Component{
    constructor(){
        super({}, undefined, false);
        let index = 0;
        const arrTab = lang.includes("pt")?
            [
                "Converter de Cº",
                "Converter de K",
                "Converter de Fº"
            ]: [
                "To convert from Cº",
                "To convert from K",
                "To convert from Fº"
            ]
        
        let contents = []
        if(GetListElm(".warper").elms.length < 1){
            this.feather.SetClass("warper");
            this.Start();
        }

        for(let i of arrTab){
            let content;
            if(i.includes("Cº")){
                content = new Container(`${i}-content-${index}`, i, (val, resDiv)=>{
                    if(IsNum(val)){
                        resDiv.SetHTML(lang.includes("pt")?`
                            <hr/>
                            Cº => Fº: <u>${parseFloat((ToNum(val) * 9/5) + 32).toFixed(3)}Fº</u>
                            <br/>
                            Cº => K : <u>${parseFloat(ToNum(val) + 273.15).toFixed(3)}K</u>
                            <h3>Fórmula</h3>
                            <p>
                                Para converter de Celsius para Fahrenheit, usará a seguinte expressã(considere o calor de T o valor da temperatura a ser convertida);
                                <br/>
                                (T x 9/5) + 32
                                Resolva a multiplicação(T = 12); (12 x 9/5) depois a divisão => (108/5) + 32 
                                <br/>
                                Ficará => 21.6 => 21.6 + 32 => 53.6;
                                <hr/>
                                E de Celsius para Kelvin é bem fácil, apenas somar o valor de T + 273.15:
                                <br/>
                                12 + 273.15 => 285.15
                            </p>
                        `: `
                            <hr/>
                            Cº => Fº: <u>${parseFloat((ToNum(val) * 9/5) + 32).toFixed(3)}Fº</u>
                            <br/>
                            Cº => K : <u>${parseFloat(ToNum(val) + 273.15).toFixed(3)}K</u>
                            <h3>Formula</h3>
                            <p>
                                To convert from Celsius to Fahrenheit, you will use the following expression (consider the heat of T as the temperature value to be converted);
                                <br/>
                                (T x 9/5) + 32
                                Solve the multiplication(T = 12); (12 x 9/5) after the division => (108/5) + 32
                                <br/>
                                It will be => 21.6 => 21.6 + 32 => 53.6;
                                <hr/>
                                And from Celsius to Kelvin it's pretty easy, just add the value of T + 273.15:
                                <br/>
                                12 + 273.15 => 285.15
                            </p>
                        `)
                    }else{
                        resDiv.SetHTML(lang.includes("pt")?"O número é invalido": "Invalid value!")
                    }
                })
            }else if(i.includes("K")){
                content = new Container(`${i}-content-${index}`, i, (val, resDiv)=>{
                    if(IsNum(val)){
                        resDiv.SetHTML(lang.includes("pt")? `
                            <hr/>
                            K => Fº: <u>${parseFloat(((ToNum(val) - 273.15)* 9/5) + 32).toFixed(3)}Fº</u>
                            <br/>
                            K => Cº : <u>${parseFloat(ToNum(val) - 273.15).toFixed(3)}Cº</u>
                            <h3>Fórmula</h3>
                            <p>
                                Para converter de Kelvin para Fahrenheit, usará a seguinte expressã(considere o calor de T o valor da temperatura a ser convertida);
                                <br/>
                                ((T - 273.15) * 9/2) + 32 => TFº; -
                                Resolveremos o que está entre parentes primeiro, considere o valor de T = 138;
                                <br/>
                                ((138 - 273.15) * 9/2) + 32 => (135 * 9/2) + 3 => (1215/2) + 32
                                <br/>
                                607.5 + 32 => 639.5
                                <hr/>
                                E de Kelvin para Celsius  é bem fácil, apenas somar o valor de T - 273.15:
                                <br/>
                                138 - 273.15 => -135.150
                            </p>
                        `: `
                            <hr/>
                            K => Fº: <u>${parseFloat(((ToNum(val) - 273.15)* 9/5) + 32).toFixed(3)}Fº</u>
                            <br/>
                            K => Cº : <u>${parseFloat(ToNum(val) - 273.15).toFixed(3)}Cº</u>
                            <h3>Formula</h3>
                            <p>
                                To convert from Kelvin to Fahrenheit, you will use the following expression (consider the heat of T as the temperature value to be converted);
                                <br/>
                                ((T - 273.15) * 9/2) + 32 => TFº; -
                                We will solve what is between relatives first, consider the value of T = 138;
                                <br/>
                                ((138 - 273.15) * 9/2) + 32 => (135 * 9/2) + 3 => (1215/2) + 32
                                <br/>
                                607.5 + 32 => 639.5
                                <hr/>
                                And from Kelvin to Celsius it's pretty easy, just add the value of T - 273.15:
                                <br/>
                                138 - 273.15 => -135,150
                            </p>
                        `)
                    }else{
                        resDiv.SetHTML(lang.includes("pt")?"O número é invalido": "Invalid value!")
                    }
                })
            }else{
                content = new Container(`${i}-content-${index}`, i, (val, resDiv)=>{
                    if(IsNum(val)){
                        resDiv.SetHTML(lang.includes("pt")?`
                            <hr/>
                            Fº => Cº: <u>${parseFloat((ToNum(val) - 32) * 5/9).toFixed(3)}Cº</u>
                            <br/>
                            Fº => K : <u>${parseFloat((ToNum(val) - 32) * 5/9 + 273.15).toFixed(3)}K</u>
                            <h3>Fórmula</h3>
                            <p>
                                De Fahrenheit para Celsius usaremos a expressão:
                                <br/>
                                (T - 32) * 5/9
                                <br/>
                                Considere T 53,6 = (53.6 - 32) * 5/9 => 21.6 * 5/9 => 108/9
                                <br/>
                                TCº = 12Cº
                                <br/>
                                De Fahrenheit para Kelvin é fácil, só usar a expressão acima, convertendo de Fahrenheit para Celsius, e logo após usar a expressão de celsius para Kelvin(T + 273.15);
                                <br/>
                                12 + 273.15 = 285.15

                            </p>
                        `:`
                            <hr/>
                                Fº => Cº: <u>${parseFloat((ToNum(val) - 32) * 5/9).toFixed(3)}Cº</u>
                                <br/>
                                Fº => K : <u>${parseFloat((ToNum(val) - 32) * 5/9 + 273.15).toFixed(3)}K</u>
                                <h3>Formula</h3>
                                <p>
                                    From Fahrenheit to Celsius we will use the expression:
                                    <br/>
                                    (T - 32) * 5/9
                                    <br/>
                                    Consider T 53.6 = (53.6 - 32) * 5/9 => 21.6 * 5/9 => 108/9
                                    <br/>
                                    TC = 12Cº
                                    <br/>
                                    From Fahrenheit to Kelvin is easy, just use the above expression, converting from Fahrenheit to Celsius, and then after using the expression from celsius to Kelvin(T + 273.15);
                                    <br/>
                                    12 + 273.15 = 285.15

                                </p>
                            `)
                    }else{
                        resDiv.SetHTML(lang.includes("pt")? "O número é invalido": "Invalid value!")
                    }
                })
            }
            contents.push(content)
            this.feather.SetChild(new TabNav(`${i}-tab-${index}`, i, content.feather).feather);
            index++;
        }

        for(let c of contents){
            this.feather.SetChild(c.feather)
        }

        contents[0].feather.NOS({display: "block"})
    }
}


export class Container extends NS_Component{
    constructor(id, headTitle, functionMade){
        super({}, {main: GetElm(".warper")})
        this.feather.SetID(id.replace(/ /g, "").replace(/º/g, "").toLowerCase())
        this.feather.SetClass("content-convertor")


        this.feather.AddHTML(`
            <h2>${headTitle}</h2>
            <hr/>
        `)

        this.valueToGet = createElm.CreateElm("input", {
            placeholder:  lang.includes("pt")? "Valor para converter": "Value target"
        })
        
        this.btnAction = createElm.CreateElm("button", {
            text:  lang.includes("pt")? "Converter": "Convert"
        })

        this.resultDiv = Div({class: "result"})

        this.btnAction.Click(()=>{
            let fun = functionMade.bind(this, this.valueToGet.GetVal(), this.resultDiv)
            fun()
        })

        this.feather.SetChild(this.valueToGet)
        this.feather.SetChild(this.btnAction)
        this.feather.SetChild(this.resultDiv)
    }
}
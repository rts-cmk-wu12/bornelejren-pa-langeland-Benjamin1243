import "../styles/componts/textInMiddle.scss"

export default function TextInMiddle({children, givenClass, pos = "center", max_width = "100%", margin = "0"}){

return(
    <section style={{"display": "flex","flexDirection": "column", "justifyContent": pos, "textAlign": pos, "margin": margin, "maxWidth": max_width}}  className={givenClass + " textInTheMiddle"}>
        {
       
            children.map((Element)=>{
                return Element
            })
        } 
        
    </section>
)
}
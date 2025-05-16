import "../styles/componts/gallery.scss"

export default function Gallery({imgs, givenClass = "", columns = "auto", gap = "1rem", heading = "null"}){
    return(
<section style={{"gridTemplateColumns": columns,"gap": gap}} className={"imageGallery " + givenClass }>
    {heading == "null"?"" : <h2 className={givenClass} style={{"gridColumn": "1/-1", "textAlign": "center"}}>{heading}</h2> }
        {imgs.map((element, index) =>{
           return <img src={element} alt="" />
        })}
        </section>
    )
}
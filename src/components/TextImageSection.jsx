import "../styles/componts/textImageSection.scss"
export default function TextImageSection({text, img, heading, givenClass, imageFirst  = false, children, colmSize = "1fr 1fr", sectionMargin = "0" }){
    return(
     <section style={{"gridTemplateColumns":colmSize, "margin": sectionMargin}}  className={givenClass + " textImageSection"}>
        <div style={ imageFirst == true?{"order": 2}: {"order": 0} }  className={`${givenClass}__textDiv`}>
            {children?.map((element) =>{
                
                return element
            })}
</div>
<img className={`${givenClass}__image`} src={img} alt="" />
     </section>
    )
}
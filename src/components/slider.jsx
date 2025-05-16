import { useState } from "react"
import "../styles/componts/slider.scss"
export default function Slider({sliderElement, time}){
       
    const [sliderElements,setSliderElements] = useState(sliderElement)
    
    const Giventime = time *1000; 

   const [sliderCount, SetSliderCount] = useState(0)
    const sliderLeght = sliderElement?.length
   
    //denne if tjekker om der overhodet er fler billeder, ellers looper den ikke
    if(sliderLeght > 0 ){setTimeout(()=>{
        let nyTest = sliderCount + 1 
        if(nyTest > sliderLeght -1){
            SetSliderCount(0)
        }else{
      SetSliderCount(prevCount => prevCount +1)
        }
      
    },Giventime)}
   
return(
    <section className="slider">

        {
        sliderElements?.map((element, index) =>{
           
           return(<div key={index} id={"img" + index}  className={  sliderCount == index? "slider__element shown":"slider__element notShown" }><img className="slider__img" src={element?.img} alt="et slider billede" />
          <div className="slider__overLay"></div>
        <div className="slider__textDiv">
            <h2 className="slider__heading"> {element?.heading}</h2>
            <p className="slider__text"> {element?.text}</p>
            <div className="slider__buttonDiv">
           <button className="slider__button"> <a className="slider__link" href=""></a></button>
           </div>
        </div>
        </div>
)
 
            
        })
        }
           
           </section>
        
)

}
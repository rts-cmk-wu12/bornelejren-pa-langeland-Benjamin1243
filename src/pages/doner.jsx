import Slider from "../components/slider";
import TextImageSection from "../components/TextImageSection";
import TextInMiddle from "../components/TextinMiddle";
import Form from "../components/Form";
import fetcher from "../components/fetch.js";
import fetchdata from "../components/fetchData.js";
import { useState, useEffect } from "react";

export default  function doner(){
    const url =  "http://localhost:3000/getData"
    const [testState, setTestState] = useState([])
    
    useEffect(() => {
        async function test(){
     const response = await fetch(url);

    let data = await response.json();
    setTestState(data)
    console.log(testState)
    
}
test()}, []);
  // ...

   
    return(
        <>
      
       <Slider sliderElement={[{"img": "/klima.jpg", "heading": "Du donere til et godt formål", "text": "Når du donere til os, investre du i en bedre verden"}]} ></Slider>
       <TextImageSection imageFirst img={"/kids1.jpg"}>
       <h2>Du er en skat </h2>
       <p>Når du donere til os, gør du så mange børn glade. Du er med til forbedre deres hverdag og spisevaner. Dit beløb
        er helt valgfrit, og vi sætter pris på den mindste øre. Så nu sprørger vi, vil du være med til at gøre verden til fantastisk sted, for udsatte børn
       </p>
       <p>Vi har ikke selv så mange penge selv her på børnelejren, så det meste af vores budget består af sponsorater. Vi håber du har lyst til at donere til os</p>
       <p>Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
opdelt støttemulighederne i 3 kategorier:</p>
       </TextImageSection>
       <TextInMiddle  max_width="80%" margin="2rem auto"><h2>Tilmelding Som Sponsor</h2>
       <p>Når du donere til os, donere du kun til børnene, og ikke En anden sjæl. Vi gør alt for at børnene skal få det meste ud af din donation. Derved sørger vi for at vi selv og kun vi modtager pengene, så der ikke er en dyr trejdePart inde over.
        
            </p>
            <h3>Børnesponsorat</h3>
            <p>
Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
smågaver og slik til ét barn.</p>
<h3>Lejrsponsorat
</h3>
<p>For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
kan være løn til specialuddannet personale.</p>
<h3>Støtte til foreningen</h3>
<p>Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr.
1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
støttebeløb - store som små - er naturligvis velkomne.</p>

       </TextInMiddle>
       <Form></Form>
       <button onClick={ () => {fetcher("http://localhost:3000/sendData")}}>Fetch</button>

      {testState?.map((element) =>  <p>{element.name}</p> )}
       </>



    )
}
import Gallery from "../components/Gallery"
import Slider from "../components/slider"
import Test from "../components/test"
import TextImageSection from "../components/TextImageSection"
import TextInMiddle from "../components/TextinMiddle"
export default function OmOs() {
  return (
    <>

      <Slider time={6} sliderElement={[{ "img": "/kids1.jpg", "heading": "Vi er alle sammen børn", "text": "Hos børnehjemmet langeLand er allesammen børn, selv de voksne engang imellem." }, { "img": "/kids2.jpg", "heading": "Hos os er der altid fest", "text": "Hverdagen på børnehjemmet er en fest...og det er bare hverdagen" }, { "img": "/kids3.jpg", "heading": "Læring er en essentiel del af vores ophold", "text": "Vi går meget op i at skabe en lærerig og fantastiks oplevelse for børnene" }]}></Slider>
      <TextInMiddle givenClass={"intro"} max_width="80%" margin="1rem auto"><h2 className="intro__heading">Velkommen </h2><p className="intro__text"><span className="redBold">Børnelejren på Langeland</span> er en forening, der udelukkende har til formål at sende dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på det naturskønne Sydlangeland.

        Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder desværre også i Danmark.</p> <p className="intro__text">Der er børn med medfødte handicap, børn der er blevet alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der er tvangsfjernet fra deres hjem og familie, børn der vokser op i meget fattige familier - vi kender nok alle sammen et barn, der tilhører en af disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>
        <p className="intro__text">Meningen med lejrene er, at give børnene et ophold på vores gamle bondegård med fokus på fællesskab, natur, kultur og gode fælles oplevelser, da mange af børnene er fattige på oplevelser. For nogle af børnene er opholdet det tætteste de kommer på en ferie, da de ikke kommer på ferie med deres egne familier, ofte pga. få ressourcer i familien, både menneskelige og økonomiske. Ligeledes betyder det noget for det sociale liv og sammenhold, at de har fælles oplevelser at kunne referere til. Personalet kan med deres faglighed og kendskab til børnene og de unge tilbyde andre aktiviteter end de vil få i hjemmet, da forældrene ofte er voldsom presset og det vil være et dejligt afbræk fra hverdagen for børnene, at få et ophold på Søgård Hovedgård.</p>

        <p className="intro__text">Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode oplevelse, som gerne skulle give dem det overskud, der skal til, for at komme helskindet gennem deres ofte lidt triste hverdag. Mange af dem knytter bånd og venskaber under lejrene, der gerne skulle give dem et nyt netværk til støtte i fremtiden.</p>
      </TextInMiddle>


      <TextImageSection givenClass="textImage" colmSize="1fr 1fr" img="/ball.jpg" text="heherhehrherhehrh"><h2 className="textImage__h2">Vi er her for dig</h2><p className="textImage__text">oreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård.</p> <h3 className="textImage__h3">Uafhængig forening</h3> <p className="textImage__text"><span className="redBold"> Børnelejren på Langeland</span> er ikke associeret med nogen andre organisationer, og er hverken politisk eller religiøst funderet. Foreningen er i vid udstrækning baseret på frivillighed, og hele bestyrelsen og en stor skare frivillige hjælpere lægger en masse energi i at få opdateret Søgård Hovedgård, så den kan blive brugt som de perfekte rammer for børn, som af en eller anden grund har behov for lidt opmuntring i deres tilværelse.</p>
      <h3 className="textImage__h3">Vores vision</h3>
      <p>Foreningens salgs- og administrationsomkostninger omfatter porto, produktion af brochurer og medlemsblade, telefonregninger, husleje i sekretariatet, samt løn til administrationschefen og eventuelle fundraisere, som ansættes af foreningen efter behov.</p>
      </TextImageSection>


      <TextInMiddle givenClass={"intro"} max_width="80%" margin="1rem auto"><h2 className="intro__heading">Os som forening </h2><p className="intro__text">
        <p><span className="redBold">Børnelejren på Langeland</span> er en velgørende, non-profit forening, som afholder finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.</p>
      </p>

        <p className="intro__text">Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode oplevelse, som gerne skulle give dem det overskud, der skal til, for at komme helskindet gennem deres ofte lidt triste hverdag. Mange af dem knytter bånd og venskaber under lejrene, der gerne skulle give dem et nyt netværk til støtte i fremtiden.</p>
      </TextInMiddle>
      <Gallery columns="repeat(3,1fr)" imgs={["/ball.jpg", "/kids1.jpg", "/kids2.jpg"]}></Gallery>
    </>
  )
}
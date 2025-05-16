import fetcher from "./fetch"
export default function Form(){
    return(
         <form  onSubmit={(evt) => {fetcher(this,evt,"http://localhost:3000/sendData")}}>
           <select name="DonateType" id="">
            <option value="boerneSponsorat">BørneSponsorat</option>
            <option value="lejrsponsorat">Lejrsponsorat</option>
            <option value="Støtte_til_foreningen">Støtte til foreningen</option>
           </select>
           <input type="text" name="firma" placeholder="Firmanavn" />
           <input placeholder="mail" type="text" name="mail" id="mail" />
           <input placeholder="adresse" type="text" name="adresse" id="adresse" />
           <input placeholder="telefon" type="number" name="tlf " id="tlf" />
           <input placeholder="beløb" type="number" name="amount" id="amount" />
           <input type="submit"  />
         </form>
    )
}


export default async function fetcher(form,evt, url){
    evt?.preventDefault()
   let formdata = new FormData(evt.target)
   console.log(evt)

   const firmanavn = formdata.get("firma")

   
const sendData = {
            "name":  firmanavn
      }
    const response = await fetch(url, {
        method: "POST",
       headers:{
             "Content-type": "application/json"
       },
        body: JSON.stringify(sendData)
     });

    let data = await response.json();
    console.log(data)
    

}
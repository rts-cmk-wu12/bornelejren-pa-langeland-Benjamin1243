

export default async function fetchdata(url){
   

    const response = await fetch(url);

    let data = await response.json();
    console.log(data)
    
    

}
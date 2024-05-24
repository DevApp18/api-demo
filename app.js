// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

let url = "https://catfact.ninja/fact";

// async function getFacts() {

//     try{
//         for(let i=0; i<=10; i++){
//             let res = await fetch(url);
//             let data = await res.json();
//             console.log(data.fact);
//         }
        
//     }
//     catch(err){
//         console.log("Unable to fetch ",err);
//     }
    
// }

let btn = document.querySelector("button");
let p = document.querySelector("#res");

btn.addEventListener("click",async function(){

    let fact = await getFacts();
    p.innerText = fact;


});

async function getFacts(){

    try{

        let res = await axios.get(url);
        return res.data.fact;

    }
    catch(err){
        console.log(err);
        return "NO Fact Found";
    }
    
}


let url2 = "https://dog.ceo/api/breeds/image/random";

let btnImg = document.querySelector("#showImg");

let image = document.querySelector("#imgRandom");

btnImg.addEventListener("click", async ()=>{

    let img = await getImages();
    image.setAttribute("src", img);

});


async function getImages(){
    try{
        let res = await axios.get(url2);
        console.log(res);
        return res.data.message;
    }
    catch(err){
        console.log(err);
        return "No Image Foound";
    }
}

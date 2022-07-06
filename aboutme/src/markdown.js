
let markdown;

async function fetchmarkdown(){
    const res = await fetch("https://gist.githubusercontent.com/sebatt90/a4dbee6b2117fb5b07df3a4ad02f3b45/raw", {"method":"GET"});
    return (await res).text();
}

markdown = fetchmarkdown();

markdown.then((data)=>{
    document.getElementById('content').innerHTML =
      marked.parse(data);
});
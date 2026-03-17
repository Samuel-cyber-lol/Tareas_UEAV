
fetch('json.json')
.then(response => response.json())
.then(json => {

document.getElementById('lol').innerHTML=json.Color1;
document.getElementById('uwu').innerHTML=json.Color2;
document.getElementById('xd').innerHTML=json.Color3;
    console.log(json)
})
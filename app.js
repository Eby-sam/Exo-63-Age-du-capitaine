for (let a = 0; a < 19; a += 2) {
    document.getElementById('monDiv').innerHTML += "Le capitaine a " + a + "" +
        " ans, le capitaine est jeune <br>";
}

for (let a = 19; a < 50; a += 5) {
    document.getElementById('monDiv').innerHTML += "Le capitaine a " + a + "" +
        " ans, nest pas très vieux <br>";
}

for(let a=50; a < 51; a +=5)
{
    document.getElementById('monDiv').innerHTML+="Le capitaine a "+ a +
        " ans, le capitaine est vieux <br>";
}

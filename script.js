document.getElementById("btn-get-scheme").addEventListener("click", getScheme);
var col=["#E6D72A","#F26419","#F2A73D","#F2E93D","#E6F23D"]
function getScheme(){
    const seedColor = document.getElementById("seed-color").value.slice(1)
    const scheme = document.getElementById("scheme").value
    document.getElementById("btn-get-scheme").innerHTML = "Loading..."

    fetch("https://www.thecolorapi.com/scheme?hex="+seedColor+"&mode="+scheme+"&count=5",{mode:'cors'})
        .then(res => res.json())
        .then(data => {
            col=[];
            console.log(data.colors)
            for (color of data.colors){
                col.push(color.hex.value)
            }
            console.log(col)
            document.getElementById("color-1").style.backgroundColor = col[0];
            document.getElementById("colorname1").innerHTML = col[0];
            
            document.getElementById("color-2").style.backgroundColor = col[1];
            document.getElementById("colorname2").innerHTML = col[1];
            
            document.getElementById("color-3").style.backgroundColor = col[2];
            document.getElementById("colorname3").innerHTML = col[2];
            
            document.getElementById("color-4").style.backgroundColor = col[3];
            document.getElementById("colorname4").innerHTML = col[3];
            
            document.getElementById("color-5").style.backgroundColor = col[4];
            document.getElementById("colorname5").innerHTML = col[4];
            
            document.getElementById("btn-get-scheme").innerHTML = "Get Color Scheme"
        })
}

const copiedDiv1 = document.getElementById('col1');
const copiedDiv2 = document.getElementById('col2');
const copiedDiv3 = document.getElementById('col3');
const copiedDiv4 = document.getElementById('col4');
const copiedDiv5 = document.getElementById('col5');
document.getElementById("color-1").addEventListener("click", () => {
    copyToClipboard(col[0]);
    copiedDiv1.style.display = 'block';
    setTimeout(() => {
        copiedDiv1.style.display = 'none';
    }, 1000);
    
});

document.getElementById("color-2").addEventListener("click", () => {
    copyToClipboard(col[1]);
    copiedDiv2.style.display = 'block';
    setTimeout(() => {
        copiedDiv2.style.display = 'none';
    }, 1000);
});

document.getElementById("color-3").addEventListener("click", () => {
    copyToClipboard(col[2]);
    copiedDiv3.style.display = 'block';
    setTimeout(() => {
        copiedDiv3.style.display = 'none';
    }, 1000);
});

document.getElementById("color-4").addEventListener("click", () => {
    copyToClipboard(col[3]);
    copiedDiv4.style.display = 'block';
    setTimeout(() => {
        copiedDiv4.style.display = 'none';
    }, 1000);
});

document.getElementById("color-5").addEventListener("click", () => {
    copyToClipboard(col[4]);
    copiedDiv5.style.display = 'block';
    setTimeout(() => {
        copiedDiv5.style.display = 'none';
    }, 1000);
});


function copyToClipboard(text) {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

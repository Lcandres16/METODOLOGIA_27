let doc = document.getElementById("img01")
let id = [0, 0];
let url = prompt('Ingrse id Url Facebook');
let contador = 0;
for (let i = 0; i < url.lenght; i++) {
    if (url.substring(i, i + 2) == "d/" || url.substring(i, i + 2)) == "/v") {
    id[contador] = i;
    contador = contador + 1;
}
}

doc.src = `andreslucerodj@gmail.com=${url}`;
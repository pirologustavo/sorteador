var nome = []

function pushName(inputname){
    nome.push(inputname)  
}

document.getElementById("sorteador").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        e.preventDefault()

        document.getElementById("resultado").innerHTML = ''
        document.getElementById("resultado").style.padding = "0px"
        document.getElementById("sorteio").innerHTML = ''
        document.getElementById("sorteio").style.padding = "0px"

        let value = e.target.value

        pushName(value)

        e.target.value = ''
        console.log(nome)
    }
})

document.getElementById("add_btn").addEventListener("click", function(e){
        e.preventDefault()
        document.getElementById("resultado").innerHTML = ''
        document.getElementById("resultado").style.padding = "0px"
        document.getElementById("sorteio").innerHTML = ''
        document.getElementById("sorteio").style.padding = "0px"

        let value = sorteador.value

        pushName(value)

        sorteador.value = ''
        console.log(nome)

    }
)

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex];

    return item
}

document.getElementById("sortear").addEventListener("click", function(e){
    sorteio = getRandomItem(nome)
    e.preventDefault()
    if (sorteio == undefined){
        document.getElementById("resultado").innerHTML = "Insira um nome válido"
        document.getElementById("resultado").style.padding = "10px"
    }
    else{
        resultado = document.getElementById("resultado").innerHTML = "RESULTADO"
        document.getElementById("resultado").style.padding = "10px 10px 0 10px"
        document.getElementById("sorteio").style.paddingBottom = "10px"
        sorteio = document.getElementById("sorteio").innerHTML = `${sorteio}`
}
})

document.getElementById("sortear").addEventListener("click", function(e){
    e.preventDefault()
    sorteio = NaN
})




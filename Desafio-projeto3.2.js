const usuarios = [
{
    nome: "João",
    tecnologias: ["HTML", "CSS"]
},
{
    nome: "Carlos",
    tecnologias: ["JavaScript", "CSS"]
},
{
    nome: "Maria",
    tecnologias: [ "Java", "CSS"]
}
]

function checarTrabalhoCSS(usuario)
{
    for (let i = 0; i<usuario.tecnologias.length;i++)
        if(usuario.tecnologias[i] == "CSS")
            return true
    return false
}

for (let i = 0; i<usuarios.length;i++)
{
    const trabalhaComCSS = checarTrabalhoCSS(usuarios[i])

    if(trabalhaComCSS)
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS `)
}

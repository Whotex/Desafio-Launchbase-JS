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
        tecnologias: [ "Java", "C#"]
    }
    ]
    
    for (let i = 0; i<usuarios.length;i++)
    {
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]} `)
    }
    
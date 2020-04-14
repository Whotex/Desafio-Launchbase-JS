const nome = "Carlos"
const sexo = "M" //Male or female 
const idade = 65
const contribuicao = 35

const min = idade + contribuicao
if(sexo == "F") //Para mulheres
{
    if(contribuicao >= 30 && min >= 85)
    {
        console.log(`${nome}, você pode se aposentar!`)
    }
    else
    {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}
if(sexo == "M") //Para homens
{
    if(contribuicao >= 35 && min >= 95)
    {
        console.log(`${nome}, você pode se aposentar!`)
    }
    else
    {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

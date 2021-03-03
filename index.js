var id = 0
function lista(id, nome, raca, nomeDono){
this.id = id;
this.nome = nome;
this.raca = raca;
this.nomeDono = nomeDono;
}

let inquirer = require('inquirer');
var fs = require('fs');
// TODO: Tem que haver já algum elemento do pets.json
var petsJson = JSON.parse(fs.readFileSync('pets.json' , 'utf-8'));
id = petsJson.arrayPet[petsJson.arrayPet.length-1].id


function fazPergunta(pergunta){
    let respostaDoUsuario;
    
    return respostaDoUsuario
}

function cadastrarPet(petsJson) {
    let nome, raca, nomeDono;
    inquirer.prompt([
        {
            name: "pergunta1", 
            message: "Digite o nome do seu Pet:"
        },
        {
            name: "pergunta2",
            message: "Digite a raça do seu Pet:"
        },
        {
            name: "pergunta3",
            message: "Digite o nome do Dono do Pet:"
        }
    
    ]).then(resposta => {
        nome = resposta.pergunta1
        raca = resposta.pergunta2
        nomeDono = resposta.pergunta3
        petsJson.arrayPet
        let novoPet = 
        {
            id: id,
            nomeDoPet: nome, 
            raca: raca,
            nomeDono: nomeDono
        }
        console.log(petsJson.arrayPet)
        petsJson.arrayPet.push(novoPet)
        fs.writeFileSync('pets.json',JSON.stringify(petsJson, null, 2), 'utf8');
        console.log(petsJson)
    })  
    return lista(nome, raca, nomeDono)
}
inquirer.prompt([
    {
      type: 'list',
      name: 'perguntaPet',
      message: 'O que você quer fazer?',
      choices: 
      [
        {
            name: 'Cadastrar novo pet',
            value: 0,
        },
        {
            name: 'Listar todos os pets cadastrados',
            value: 1,
        },
        {
            name: 'Buscar pet por nome',
            value: 2,
        }
      ]
    }
]).then((respostaDoUsuario) => {    
    let value = respostaDoUsuario.perguntaPet;
    if(value===0){
        id += 1
        cadastrarPet(petsJson);
    }
})

console.log("Alterei pois tenho que fazer um branch")
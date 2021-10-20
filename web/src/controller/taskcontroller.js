const TaskModel = require('../model/TaskModel');
// a controller faz o tráfego, recendo e enviando repostas
class TaskController {
    
    //Método responsável por receber a requisição de armazenamento no banco de dados e criar esse armazenameto. 
    async create(req, res){
        // recebe a requisição do front
        const task = new TaskModel(req.body)
        // salva no banco de dados
        await task
        .save() // metodo utilizado para salvar os daods que vem do front no banco  de dados
        .then(response => {return res.status(200).json(response)}) // resposta positiva , caso o salvamento for bem sucedido
        .catch(erro => {return res.status(500).json(erro)}); // tratamento de erro, caso for mal sucedido
    }
    
}
module.exports = new TaskController();
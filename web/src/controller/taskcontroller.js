const TaskModel = require('../model/TaskModel');
// a controller faz o tráfego, recendo e enviando repostas
class TaskController {
    
    //Método responsável por receber a requisição de armazenamento no banco de dados e criar esse armazenameto. 
    async create(req, res){
        // recebe a requisição do front
        const task = new TaskModel(req.body)
        // salva no banco de dados
        await task
        .save() 
        .then(response => {return res.status(200).json(response)}) 
        .catch(erro => {return res.status(500).json(erro)}); 
    }
    // metodo utilizado para salvar os daods que vem do front no banco  de dados
    // resposta positiva , caso o salvamento for bem sucedido
    // tratamento de erro, caso for mal sucedido

    async update(req, res){
    
    
        await TaskModel
        .findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
        .then(response => {return res.status(200).json(response)}) 
        .catch(erro => {return res.status(500).json(erro)}); 
    
    }

    async readAll(req, res){
    
    
        await TaskModel
        .find({macadress: {'$in':req.body.macadress}})
        .sort('when')
        .then(response => {return res.status(200).json(response)}) 
        .catch(erro => {return res.status(500).json(erro)}); 
    
    }

    async readById(req, res){
    
        await TaskModel
        .findById(req.params.id)
        .then(response => {
        if(response)
            return res.status(200).json(response) 
        else
            return res.status(404).json({error : 'Tarefa não encontrada'})
        })    
        .catch(erro => {return res.status(500).json(erro)}); 
    
    }

    async delete(req, res){
    
    
        await TaskModel
        .deleteOne({'_id':req.params.id})
        .then(response => {return res.status(200).json(response)}) 
        .catch(erro => {return res.status(500).json(erro)}); 
    
    }
}




module.exports = new TaskController();
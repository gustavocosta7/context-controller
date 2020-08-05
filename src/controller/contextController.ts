import ContextDatabase from '../repository/cacheRepository';

export default class ContextController {
    constructor(private contextDatabase: ContextDatabase) {
    }

    public listAll() {
        return this.contextDatabase.listAll();
    }

    public get(req: any) {
        const id = req.query.id;
        let message = "not found";
        if(id) {
            message = this.contextDatabase.get(id);
        }
        return message;
    }

    public save(req: any) {
        const id = req.body.id;
        const value = req.body.value;

        if(id && value) {
            this.contextDatabase.setValue(id, value);
        }

        return "adicionado com sucesso!"
    }

    public delete(req: any) {
        const id = req.query.id;
        let message = "key not found";
    
        if(id) {
            message = this.contextDatabase.delete(id);
        }
       
        return message
    }



}


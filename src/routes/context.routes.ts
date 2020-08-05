import {Router} from 'express'
import ContextDatabase from '../repository/cacheRepository';
import ContextController from '../controller/contextController';


const nodeCache = ContextDatabase.getInstance();
const contextController = new ContextController(nodeCache);

const contextRouter = Router();

contextRouter.get('/listAll',(req, res) => {
    res.send({result : contextController.listAll()})
}) 

contextRouter.get('/', (req, res) => {
    const result = contextController.get(req);
    res.send({"contexto" : result});
})

contextRouter.post('/', (req, res) => {
    const result = contextController.save(req);    
    res.send({"message" : result});
})

contextRouter.delete('/', (req, res) => {
    const result = contextController.delete(req)
    res.send({"messagem": result})

})

export default contextRouter;
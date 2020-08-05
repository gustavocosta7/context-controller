import {Router} from 'express'

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send({"Ola" : "oi"});
})


export default indexRouter;
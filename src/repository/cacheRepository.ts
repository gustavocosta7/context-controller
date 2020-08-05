import NodeCache = require('node-cache');

class ContextDatabase {
    private static instance: ContextDatabase;
    private constructor(private myCache){
        
    }


    public static getInstance(): ContextDatabase {
        if (!ContextDatabase.instance) {
            ContextDatabase.instance = new ContextDatabase(new NodeCache());
        }

        return ContextDatabase.instance;
    }


    public setValue(id: any, value: any) {
        this.myCache.set(id, value)
    }

    public listAll() {
        return this.myCache.keys();
    }

    public get(id: any) {
        return this.myCache.get(id)
    }

    public delete(id: any) {
        return this.myCache.del(id);
    }



}
export default ContextDatabase;
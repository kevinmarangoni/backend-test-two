import {listAll, findById} from '../services/beers.js'

class BeerController {
    async listAll(req, res) {
        try{
            const data = listAll()
        }
        catch(err){

        }
    }
    async findById(req, res){
        
        try{
            const data = findById(id)
        }
        catch(err){

        }
    }
}
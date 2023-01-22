import { answerPing } from '../services/ping.js'

class PingController {
    async ping(req, res){
        try{
            const data = answerPing(req)
            res.status(200)
            res.json(data)
        }
        catch(err){
            console.log(err)
        }
    }
}

export default new PingController()
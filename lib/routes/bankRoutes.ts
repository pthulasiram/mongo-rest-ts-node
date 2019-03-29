import {Request, Response, NextFunction} from "express";
//import { ContactController } from "../controllers/crmController";
import { BankController } from "../controllers/bankController"
export class BankRoutes { 
    
    public bankController: BankController = new BankController() 
    
    public routes(app): void {   
        
        app.route('/b')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Contact 
        app.route('/bank')
        // .get((req: Request, res: Response, next: NextFunction) => {
        //     // middleware
        //     console.log(`Request from: ${req.originalUrl}`);
        //     console.log(`Request type: ${req.method}`);            
        //     // if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
        //     //     res.status(401).send('You shall not pass!');
        //     // } else {
        //         next();
        //     //}                        
        // }, this.bankController.findBankByIFSC)        

        // POST endpoint
        .post(this.bankController.addNewBranch);

        // fetch bank branch details for given ifscode
        app.route('/ifsc/:ifsccode')
        .get(this.bankController.findBankByIFSC)
        //.put(this.contactController.updateContact)
        //.delete(this.contactController.deleteContact)
        // list all banks in given pincode
        app.route('/banks/:pincode')
        .get(this.bankController.listBanksByPincode)
        // list all banks in given pincode
        app.route('/banks/city/:city')
        .get(this.bankController.listBanksByCity)
        // list all banks in given pincode
        app.route('/banks/state/:state')
        .get(this.bankController.listBanksByState)
        // list all banks in given pincode
        app.route('/banks/district/:district')
        .get(this.bankController.listBanksByDistrict)
    }
}
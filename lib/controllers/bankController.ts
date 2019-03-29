import * as mongoose from 'mongoose';
import { BankSchema } from '../models/bankModel';
import { Request, Response } from 'express';

const Bank = mongoose.model('Bank', BankSchema);

export class BankController{

    public addNewBranch (req: Request, res: Response) {                
        let newBank = new Bank(req.body);
    
        newBank.save((err, bank) => {
            if(err){
                res.send(err);
            }    
            res.json(bank);
        });
    }

    // public getContacts (req: Request, res: Response) {           
    //     Contact.find({}, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public getContactWithID (req: Request, res: Response) {           
    //     Contact.findById(req.params.contactId, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public updateContact (req: Request, res: Response) {           
    //     Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }

    // public deleteContact (req: Request, res: Response) {           
    //     Contact.remove({ _id: req.params.contactId }, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted contact!'});
    //     });
    // }

    /**
     *  findBankByIfsc
     -- listBankBranchesByLocation
     -- listBankBranchesByDistrict
     -- listBankBrachesByPincode
     -- listBanksByPincode
     -- listBanksByDistrict
     -- listBanksByLocation
     -- listBanksByState
     */
    // fetch bank branch details by ifsc code
    public findBankByIFSC(req:Request, res: Response){
        Bank.findOne({ifsc:req.params.ifsccode}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given pincode
    public listBanksByPincode(req:Request, res: Response){
        Bank.find({pincode:req.params.pincode}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given city
    public listBanksByCity(req:Request, res: Response){
        Bank.find({city:req.params.city}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given district
    public listBanksByDistrict(req:Request, res: Response){
        Bank.find({district:req.params.district}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given state
    public listBanksByState(req:Request, res: Response){
        Bank.find({state:req.params.state}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }

    // list all bank branches in given pincode
    public listBanksBranchesByPincode(req:Request, res: Response){
        Bank.find({pincode:req.params.pincode, name:req.params.name}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given city
    public listBanksBranchesByCity(req:Request, res: Response){
        Bank.find({city:req.params.city,name:req.params.name}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given district
    public listBanksBranchesByDistrict(req:Request, res: Response){
        Bank.find({district:req.params.district, name:req.params.name}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    // list all banks in given state
    public listBanksBranchesByState(req:Request, res: Response){
        Bank.find({state:req.params.state, name:req.params.name}, (err, bank) => {
            if(err){
                res.send(err);
            }
            res.json(bank);
        });
    }
    
}
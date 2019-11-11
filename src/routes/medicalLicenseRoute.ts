import {Request, Response, NextFunction} from "express";
import { MedicalLicenseController } from "../controllers/medicalLicenseController";

export class MLRoutes { 
    
    public medicalLicenseController: MedicalLicenseController = new MedicalLicenseController() 
    
    public routes(app): void {   
        
        app.route('/').get((req: Request, res: Response) => {            
            res.status(200).json({
                message: 'Select a valid endpoint!'
            }).send().end();
        });
        
        
        // Registra nova licença medica
        app.route('/submit-medical-license').post((req : Request, res: Response, next: NextFunction) => {
            this.medicalLicenseController.submitMedicalLicense(req, res);
        });

        // Lista as licenças medicas existentes
        app.route('/medical-licenses').get((req : Request, res: Response, next: NextFunction) => {
            this.medicalLicenseController.getMedicalLicenses(req, res);
        });

        app.use((req, res, next) => {
            res.status(404).json({ message : "Sorry can't find that!"}).send().end();
        });

    }
}
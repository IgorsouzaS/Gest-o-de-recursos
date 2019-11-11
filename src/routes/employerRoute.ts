import {Request, Response, NextFunction} from "express";
import { EmployerController } from "../controllers/employerController";

export class EmployerRoutes { 
    
    public employerController: EmployerController = new EmployerController() 
    
    public routes(app): void {   
        
        app.route('/').get((req: Request, res: Response) => {            
            res.status(200).json({
                message: 'Select a valid endpoint!'
            }).send().end();
        });
        
        // Lista dados de um empregador
        app.route('/employer/:employerCode').get((req: Request, res: Response, next: NextFunction) => {
            this.employerController.getEmployer(req, res);                  
        });
        
        // Registra um novo empregador
        app.route('/register/name=:name&thumbnail=:thumbnail').post((req : Request, res: Response, next: NextFunction) => {
            this.employerController.registerEmployer(req, res);
        });

        // Checa PIN
        app.route('/check-pin/:employerCode').post((req : Request, res: Response, next: NextFunction) => {
            this.employerController.checkPin(req, res);
        });

        app.use((req, res, next) => {
            res.status(404).json({ message : "Sorry can't find that!"}).send().end();
        });

    }
}
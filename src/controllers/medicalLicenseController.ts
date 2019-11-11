import { Request, Response } from 'express';
import {MedicalLicense} from '../models/medicalLicense'


export class MedicalLicenseController{


    private medicalLicense = new MedicalLicense();

    
    public submitMedicalLicense(req: Request, res: Response){
        let pinCode = req.body.pin_code;
        let employerCode = req.params.employerCode;

        if(pinCode && employerCode){
            res.status(200).json({ message : "Medical license was succesfully created!" });
        }else{
            res.status(403).json({ "message" : "Bad request. Insert valid inputs!"});
        }
    };


    public getMedicalLicenses(req: Request, res: Response){
       
        //res.status(200).json({ message : "Rule was succesfully created!", "id" : this.employer.getId().toString }).send().end();
        res.status(403).json({ "message" : "Bad request. Insert valid inputs!"});
        res.status(401).json({ "message" : "Unavailable time!"});
    };



    private getActualTime() : String{

        const d = new Date;

        let requestMonthF : String;
        let requestDayF : String;
        let requestHourF : String;
        let requestMinutsF : String;
        let requestSecondsF : String;

        let requestYear = d.getFullYear();
        let requestMonth = d.getMonth();
        let requestDay = d.getDay();
        let requestHour = d.getHours();
        let requestMinuts = d.getMinutes();
        let requestSeconds = d.getSeconds();

        if(requestDay < 10){
            requestDayF = "0"+requestDay;
        }else{
            requestDayF = requestDay.toString();
        }

        if(requestMonth < 10){
            requestMonthF = "0"+requestMonth;
        }else{
            requestMonthF = requestMonth.toString();
        }

        if(requestHour < 10){
            requestHourF = "0"+requestHour;
        }else{
            requestHourF = requestHour.toString();
        }

        if(requestMinuts < 10){
            requestMinutsF = "0"+requestMinuts;
        }else{
            requestMinutsF = requestMinuts.toString();
        }

        if(requestSeconds < 10){
            requestSecondsF = "0"+requestSeconds;
        }else{
            requestSecondsF = requestSeconds.toString();
        }

        return requestDayF+"-"+requestMonthF+"-"+requestYear+"-"+requestHourF+":"+requestMinutsF+":"+requestSecondsF;
    }

    private getRandomInt(min, max) : Number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private verifyInputs(initialDate, initialTime, finalDate, finalTime) : Boolean{

        try{

            if(initialDate.substring(2, 3) != "-" || initialDate.substring(5, 6) != "-"
                || finalDate.substring(2 , 3) != "-" || finalDate.substring(5 ,6) != "-"){
                return false;
            }
            if(initialTime.substring(2, 3) != ":" || initialTime.substring(5, 6) != ":"
                || finalTime.substring(2 , 3) != ":" || finalTime.substring(5 ,6) != ":"){
                return false;
            }

            let d1 = Number.parseInt(initialDate.substring(0 ,2));
            let mo1 = Number.parseInt(initialDate.substring(3 ,5));
            let a1 = Number.parseInt(initialDate.substring(6 ,10));

            let h1 = Number.parseInt(initialTime.substring(0 ,2));
            let m1 = Number.parseInt(initialTime.substring(3 ,5));
            let s1 = Number.parseInt(initialTime.substring(6 ,8));

            let d2 = Number.parseInt(finalDate.substring(0 ,2));
            let mo2 = Number.parseInt(finalDate.substring(3 ,5));
            let a2 = Number.parseInt(finalDate.substring(6 ,10));

            let h2 = Number.parseInt(finalTime.substring(0 ,2));
            let m2 = Number.parseInt(finalTime.substring(3 ,5));
            let s2 = Number.parseInt(finalTime.substring(6 ,8));

            if(d1 > 31 || d1 < 1 || d2 > 31 || d2 < 1){
                return false;
            }
            if(mo1 > 12 || mo2 > 12 || mo1 < 1 || mo2 > 12){
                return false;
            }
            if(h1 < 0 || h1 > 23 || h2 < 0|| h2 > 23){
                return false;
            }

            if(m1 > 59 || m1 < 0 || m2 > 59 || m2 < 0 || s1 > 59 || s1 < 0 || s2 > 59 || s2 < 0){
                return false;
            }

            return true;
        }catch(err){
            return false;
        }
    }

    
}
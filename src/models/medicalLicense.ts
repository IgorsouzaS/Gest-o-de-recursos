export class MedicalLicense{

    private initial_date : String;
    private final_date: String;
    private time : Number;
    private member_code : Number;
    private deleted : Boolean;

    constructor(){  }

    public getInitialDate(): String{
        return this.initial_date;
    }

    public getFinalDate(): String{
        return this.final_date;
    }

    public getMemberCode(): Number{
        return this.member_code;
    }

    public getTime(): Number{
        return this.time;
    }

    public isDeleted(): Boolean{
        return this.deleted;
    }

    public setInitialDate(initial_date): void{
        this.initial_date = initial_date;
    }

    public setFinalDate(final_date): void{
        this.final_date = final_date;
    }

    public setMemberCode(member_code): void{
        this.member_code = member_code;
    }

    public setTime(time): void{
        this.time = time;
    }

    public setDeleted(deleted): void{
        this.deleted = deleted;
    }


}
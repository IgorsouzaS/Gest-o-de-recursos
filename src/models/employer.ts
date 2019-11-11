
export class Employer{

    private employer_name : String;
    private employer_code: String;
    private member_count : Number;
    private thumbnail : String;
    private register_date : String;
    private deleted : Boolean;

    constructor(){  }

    public getEmployerName(): String{
        return this.employer_name;
    }

    public getEmployerCode(): String{
        return this.employer_code;
    }

    public getMemberCount(): Number{
        return this.member_count;
    }

    public getThumbnail(): String{
        return this.thumbnail;
    }

    public getRegisterDate(): String{
        return this.register_date;
    }

    public isDeleted(): Boolean{
        return this.deleted;
    }

    public setEmployerName(employer_name): void{
        this.employer_name = employer_name;
    }

    public setEmployerCode(employer_code): void{
        this.employer_code = employer_code;
    }

    public setMemberCount(member_count): void{
        this.member_count = member_count;
    }

    public setThumbnail(thumbnail): void{
        this.thumbnail = thumbnail;
    }

    public setRegisterDate(register_date): void{
        this.register_date = register_date;
    }

    public setDeleted(deleted): void{
        this.deleted = deleted;
    }
}
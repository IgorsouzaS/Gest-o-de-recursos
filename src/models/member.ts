import { MemberData } from './memberData'

export class Member {

    private member_name: String;
    private member_code: Number;
    private member_personal_data: MemberData;
    private pin_code: String;
    private thumbnailHd: String;
    private birthday: String;
    private deleted: Boolean;

    constructor() { }

    public getMemberName(): String {
        return this.member_name;
    }

    public getMemberCode(): Number {
        return this.member_code;
    }

    public getMemberPersonalData(): MemberData {
        return this.member_personal_data;
    }
    public setMemberPersonalData(memberdata: MemberData) {
        this.member_personal_data = memberdata;
    }

    public getPinCode(): String {
        return this.pin_code;
    }
    public setPinCode(value: String) {
        this.pin_code = value;
    }

    public getThumbnailHd(): String {
        return this.thumbnailHd;
    }
    public setThumbnailHd(value: String) {
        this.thumbnailHd = value;
    }

    public getBirthday(): String {
        return this.birthday;
    }
    public setBirthday(birthday: String) {
        this.birthday = birthday;
    }

    public setDeleted(deleted): void{
        this.deleted = deleted;
    }

    public isDeleted(): Boolean{
        return this.deleted;
    }

}
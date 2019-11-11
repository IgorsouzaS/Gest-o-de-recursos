export class MemberData{

    private father : String;
    private mother: String;
    private hand : Boolean;

    constructor(){  }

    public getFather(): String{
        return this.father;
    }

    public getMother(): String{
        return this.mother;
    }

    public isHand(): Boolean{
        return this.hand;
    }

    public setFather(father: String): void{
        this.father = father;
    }

    public setMother(mother: String): void{
        this.mother = mother;
    }

    public setHand(hand : Boolean): void{
        this.hand = hand;
    }
}
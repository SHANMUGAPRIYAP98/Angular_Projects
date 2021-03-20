import { from } from "rxjs";

export class PaymentPayload {
    id:number;
    cid:number;
    payAmt:number;
    curr:string;
    fromAcc:number;
    toAcc:number;
    beneAcc:number;
    bankChar:number;
    constructor(id:number,cid:number,payAmt:number,curr:string,fromAcc:number,toAcc:number,beneAcc:number,bankChar:number)
    {
        this.id=id;
        this.cid=cid;
        this.payAmt=payAmt;
        this.curr=curr;
        this.fromAcc=fromAcc;
        this.toAcc=toAcc;
        this.beneAcc=beneAcc;
        this.bankChar=bankChar;
    }
}

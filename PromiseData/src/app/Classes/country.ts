export class Country {
    id: number;
    cusType: string;
    creditType: string;
    curr: string;
    counName: string;
    cityName: string;
    constructor(id: number,cusType:string,creditType:string,curr:string,counName:string,cityName:string)
    {
        this.id=id;
        this.cusType=cusType;
        this.creditType=creditType;
        this.curr=curr;
        this.counName=counName;
        this.cityName=cityName;
    }
}

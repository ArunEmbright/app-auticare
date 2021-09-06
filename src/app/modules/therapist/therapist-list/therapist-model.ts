export class TherapistModel{
    id:number;
    category:string;
    location:string;
    name:string;
    experience:number;
    image:string[];
}

export class FilterObject {
    experience:number[];
    maxExp:number;
    minExp:number;
}
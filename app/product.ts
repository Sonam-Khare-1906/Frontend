
import { FileHandle } from "./file-handle model";

export class Products {
    pid!: number;
    pname!: string;
    pprice!: number;
    pquantity!: number;
   productImages!: FileHandle[];
    pdescription!: string; 
  }
  

export class Register{
    firstname!: String;
    lastname!: String;
    email!: String;
    password!: String;
    confirmpassword!: String;
    address!: String;
    city!: String;
    state!: String;
    mobileno!: number;
    id!:number;
    age!:number;
    isactive!:true;
}



export interface product{
  id:number;
  productname:string;
  productimg:string;
  productdesc:string;
  productspeci:speci;
  liked:boolean
}


export interface speci{
  camera:string;
  ram:string;
  rom:string;
  Android:string
}

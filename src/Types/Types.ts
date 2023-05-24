export interface IUsers{
    id:string
    username:string
    email:string
    adress:IAdress
    phone:number
    website:string
    company:ICompany
}
export interface IAdress{
    street:string
    suite:string
    city:string
    zipcode:number
    geo:IGeo
}
export interface IGeo{
    lat:number
    lng:number
}
export interface ICompany{
    name:string
    catchPhrase:String
    bs:string
}
export interface IPost{
    userId:number
    id:number
    title:string
    body:string
}



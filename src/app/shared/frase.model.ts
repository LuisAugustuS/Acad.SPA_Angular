// export class Frase {

//     public fraseEng: string
//     public frasePtBr: string

//     constructor(fraseEng: string, frasePtBr: string){
//         this.fraseEng = fraseEng
//         this.frasePtBr = frasePtBr
//     }
// }

//opção menos verbosa
export class Frase {
    constructor(public fraseEng: string, public frasePtBr: string) { }
}
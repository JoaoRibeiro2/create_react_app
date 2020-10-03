namespace empresa{
    
    export class ClienteVip extends Cliente{

        private _bonus:number;

        get bonus(){
            return this._bonus;
        }

        set bonus(bonus:number){
            this._bonus = bonus;
        }


         public comprar(valorProduto:number, desconto?:number){ // ? = Parametro Opicional

            let result:String

            if(typeof desconto === undefined){
                if(valorProduto <= this.credito + this._bonus){
                    result =  "Compra aprovada";
                }

                else{
                    result = "Compra negada";
                }

            }else{
                if((valorProduto - desconto) <= this.credito + this._bonus){
                    result = "Compra aprovada";
                }else{
                    result = "Compra negada";
                }
            }
            
            return result
        }
    }
}
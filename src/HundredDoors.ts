import IToggle from "./IToggle";

export default class HundredDoors implements IToggle{

  constructor(private  doors:string[]){}

   toggle(index:number): void {

   
        const currentState= this.doors[index]

        if(currentState==='#'){
          this.doors[index]='@'
        }
        else{
          this.doors[index]="#"
        }
        
    }

    toggleEvery(nthDoor:number){

       
       for(let i=nthDoor;i<this.doors.length;i+=nthDoor){
           
               this.toggle(i)
       }
        
    }

     makePasses(nTimes:number){
            
          
            for(let pass=1; pass<=nTimes;pass++){

               this.toggleEvery(pass)

            } 
      
      }

      getDoors(){
        return  this.doors.slice(1)
      }

      getNextState(curr:string):string{

        const nextState = new Map()

        nextState.set('#',"H")
        nextState.set('H',"@")
        nextState.set('@',"#")

        return nextState.get(curr)
      }


}
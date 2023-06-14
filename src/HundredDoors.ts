import IToggle from "./IToggle";

type TState = '@'|'H'|'#'

export default class HundredDoors implements IToggle{

  constructor(private readonly doors:TState[]){}

   toggle(index:number): void {

   
        const currentState= this.doors[index]

        this.doors[index]=HundredDoors.getNextState(currentState) as TState
        
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

     public static  getNextState(curr:TState):TState{

         switch(curr){
              
             case '#':
              return "@"
             case '@':
              return 'H'
             case 'H':
              return '#'
             default:
              const res:never = curr
              return res
              
         }

      }


}
import IToggle from "./IToggle";

export default class HundredDoors implements IToggle{

  constructor(private readonly doors:string[]){}

   toggle(index:number): void {

   
        const currentState= this.doors[index]

        this.doors[index]=this.getNextState(currentState) as string
        
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

     public  getNextState(curr:string):string|void{

        const nextState = new Map<string, string>([
          
          ['#', '@'],
          ['@', '#']
  
        ]);

        return nextState.get(curr)
      }


}
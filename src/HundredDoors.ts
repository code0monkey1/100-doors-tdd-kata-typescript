import IToggle from "./IToggle";

export default class HundredDoors implements IToggle{
  
  constructor(private readonly doors:string[]){}

   toggle(index:number): void {
    
        const currentState= this.doors[index]

        if(currentState==='#'){
          this.doors[index]='@'
        }
        
    }

    toggleEvery(nthDoor:number){

       
       for(let i=1;i<this.doors.length;i+=nthDoor){
           
               this.toggle(i)
       }
        
    }

      makeTogglePasses(nTimes:number){
            
          

      }

      getDoors(){
        return  this.doors.slice(1)
      }


}
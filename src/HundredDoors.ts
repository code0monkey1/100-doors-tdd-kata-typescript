import IToggle from "./IToggle";

export default class HundredDoors implements IToggle{
  
  constructor(private readonly doors:string[]){}

   toggle(index:number): void {
    
        const currentState= this.doors[index]

        if(currentState==='#'){
          this.doors[index]='@'
        }
        
    }

    flipEvery(nthDoor:number){
      
        
    }

  getDoors(){
     return this.doors
  }


}
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

       
      //  for(let i=0;i<this.doors.length;i+=nthDoor-1){

      //  }
        
    }

    getDoors(){
      return  new Array(100).fill('@') as string[]
    }


}
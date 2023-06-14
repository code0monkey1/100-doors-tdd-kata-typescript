import IToggle from "./IToggle";

export default class HundredDoors implements IToggle{
  
  constructor(private readonly doors:string[]){}

  toggle(index:number): void {
    throw new Error("Method not implemented.");
  }
  


}
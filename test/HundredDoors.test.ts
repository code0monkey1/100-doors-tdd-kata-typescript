import HundredDoors from "../src/HundredDoors"

describe("Doors",()=>{
    
    describe('', () => {
         
         it('should be defined',()=>{

          const doors=[] as string[]

           const hd = new HundredDoors(doors)
 
           expect(hd).toBeDefined()

         })

         it('should have a `flip` function to flip the state of a door',()=>{

              const doors= new Array(101).fill('#') as string[]

              const hd = new HundredDoors(doors)

              expect(hd.toggle).toBeInstanceOf(Function)
         })

    })
    
        
})
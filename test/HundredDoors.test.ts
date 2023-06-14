import HundredDoors from "../src/HundredDoors"

describe("Doors",()=>{
    
    describe('', () => {
         
         it('should be defined',()=>{

          const doors=new Array(100).fill('#') as string[]

           const hd = new HundredDoors(doors)
 
           expect(hd).toBeDefined()

         })

         it('should have a `flip` function to flip the state of a door',()=>{

              const doors= new Array(100).fill('#') as string[]

              const hd = new HundredDoors(doors)

              expect(hd.toggle).toBeInstanceOf(Function)
         })

    })

    describe('single pass',()=>{


          it('should turn all doors to `@`',()=>{

              //Arrange
              const doors= new Array(101).fill('#') as string[]

              const hd = new HundredDoors(doors)

              //Act
              
              hd.flipEvery(1)

              //Assert
              
              expect(hd.getDoors()).toStrictEqual(new Array(101).fill('@') )

          })


    })
    
        
})
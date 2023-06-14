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
              const doors= new Array(4).fill('#') as string[]

              const hd = new HundredDoors(doors)

              //Act
              
              hd.toggleEvery(1)

              //Assert

              const solution = new Array(4).fill('@').splice(1)
              
              expect(hd.getDoors()).toStrictEqual(solution)

          })


    })

    describe('double pass',()=>{

            it('should have all odd even doors closed `#` and odd doors open`@`',()=>{
                
              //Arrange
              const doors= new Array(4).fill('#') as string[]

              const hd = new HundredDoors(doors)

              //Act
              hd.makePasses(2)
    
              // Assert

              expect(hd.getDoors()).toStrictEqual(['@','#','@','#','@','#'])
            })

    })
    
        
})
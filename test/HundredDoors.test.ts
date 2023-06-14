import RevolvingDoors from "../src/RevolvingDoors"
import { TState } from "../src/types"

describe("Doors",()=>{
     
    
    describe('', () => {
         
         it('should be defined',()=>{

          const doors=new Array(100).fill('#')  as TState[]

           const hd = new RevolvingDoors(doors)
 
           expect(hd).toBeDefined()

         })

         it('should have a `toggle` function to flip the state of a door',()=>{

              const doors= new Array(100).fill('#') as TState[]

              const hd = new RevolvingDoors(doors)

              expect(hd.toggle).toBeInstanceOf(Function)
         })

    })

    describe('single pass',()=>{


          it('should turn all doors to `@`',()=>{

              //Arrange
              const doors= new Array(5).fill('#') as TState[]

              const hd = new RevolvingDoors(doors)

              //Act
              
              hd.toggleEvery(1)

              //Assert

              const solution = new Array(5).fill('@').splice(1) as TState[]
              
              expect(hd.getDoors()).toStrictEqual(solution)

          })


            it('should turn every 2nd  doors to `#`',()=>{

              //Arrange
              const doors= new Array(5).fill('@') as TState[]

              const hd = getRDwithDoors(5)("@")

              //Act
              
              hd.toggleEvery(2)

              //Assert
              expect(hd.getDoors()).toStrictEqual(["@","H","@","H"])

          })


    })

    describe('double pass',()=>{

            it('should have all odd even doors closed `H` and odd doors open`@`',()=>{
                
              //Arrange
               const rd = getRDwithDoors(5)("#")

              //Act
              rd.makePasses(2)
    
              // Assert
              expect(rd.getDoors()).toStrictEqual(['@','H','@','H'])
            })

    })

       describe('3rd pass',()=>{

            it('should have 2nd and 3rd door to holding state',()=>{
                
              //Arrange
              const rd = getRDwithDoors(4)('#')

              //Act
              rd.makePasses(3)
    
              // Assert
              expect(rd.getDoors())
              .toStrictEqual(['@','H','H'])
              
            })

    })
    
    
        
})

function getRDwithDoors(count:number) {
      
     return (char:string)=>{
          const doors = new Array(count).fill(char) as TState[]

          const hd = new RevolvingDoors(doors)
          return hd
     }
}

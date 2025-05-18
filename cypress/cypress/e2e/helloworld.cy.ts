describe('template spec', () => {
  before(() => {
    cy.log('Before all tests')
  })
  beforeEach(() => {
    cy.log('Before each test')
  })
  it.only('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.log('Hello World')
    
    let name:string = 'John Doe';
    let age:number = 30;
    let isActive:boolean = true;
    let anyvalue:any
    let hobbies:string[] = ['reading', 'gaming', 'hiking'];
    let person:{ name: string, age: number, isActive: boolean } = {
      name: 'John Doe',
      age: 30,
      isActive: true
    };

    function addTwoNumbers(a: number, b: number): number {
      return a + b;
    }


  })
interface User {
  username: string;
  password: string;
}

function returningUserInformation(user:User): void {
  console.log(user.username);
}

   it.skip('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.log('Hello World')
  })
  after(()=>{
    cy.log('After all tests')
  })
})
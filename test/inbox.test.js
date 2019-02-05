const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(() => {
    // Get a list of all accounts
    web3.eth.personal.getAccounts().then(a => {
        accounts = a;
            console.log(a);
    });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
     });
})


// class Car {
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car; 

// beforeEach(()=>{
//     car = new Car();
// });

// describe('Car', ()=>{

//     it('Should return stopped',()=>{
//         assert.equal(car.park(), 'stopped');
//     });

//     it('should return vroom',()=>{
//         assert.equal(car.drive(), 'vroom');
//     })
// });
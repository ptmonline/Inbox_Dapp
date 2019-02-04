const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
const web3 = new Web3(new Web3.providers.HttpProvider());



class Car {
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

let car; 

beforeEach(()=>{
    car = new Car();
});

describe('Car', ()=>{

    it('Should return stopped',()=>{
        assert.equal(car.park(), 'stopped');
    });

    it('should return vroom',()=>{
        assert.equal(car.drive(), 'vroom');
    })
});
// fail craps can't figure out why server.injection not working as expactation now

const { expect } = require('code');
const Lab = require("lab");
const lab = (exports.lab = Lab.script());
const server = require("./server");

lab.experiment("send Request API:", () => {
    lab.test("creating valid user", async () => {
        const options = {
            method: "GET",
            url: "/api/User/John",
            payload: {}
        };
        await server.start()
        await new Promise(r => setTimeout(() => r(), 1000));
 
        await server.inject(options, function(response) {
            const result = response.result;
            console.log(response); 
            expect(response.statusCode).to.equal(eeee);
            console.log(result); 
            expect(result).to.equal('s')
        });
    })
    lab.test('only this test will run', async () => {
        await new Promise(r => setTimeout(() => r(), 1000));
        console.log('test');
        expect(1 + 1).to.equal(2);
    });
})

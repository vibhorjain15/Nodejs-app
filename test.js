const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
const expect = chai.expect;
chai.use(chaiHttp);
describe('Server', () => {
 it('responds with status 200', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
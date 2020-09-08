const { request, response } = require("express");

const chai = require('chai');
const chaihttp = require('chai-http');


const server = require('../src/server')

var should = chai.should();
chai.use(chaihttp);

describe('App', ()=>{

    describe('/POST App', () => {
        it('it should post data ', (done) => {
                     
            let urls = {
                url : "https://www.amazon.com/Apple-iPhone-Max-Fully-Unlocked/dp/B07KFMTWVF/"
            }

            chai.request('http://localhost:8000/scrape')
            .post('/url')
            .send(urls)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.urls.should.have.property('url');
            done();
            });
        });
    });


});
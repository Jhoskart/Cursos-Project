
const request = require('supertest-session');
const app = require('../../src/app.js');
const { expect } = require('chai');

describe('/GET /cursos', () => {

    it('should get 200', () => {
        return request(app)
            .get('/cursos')
            .expect(200);
    }).timeout(5000);

    it('should reply the get method with a list of cursos', () => {
        return request(app)
            .get('/cursos')
            .expect(res => {
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf.at.least(1);
                expect(res.body[0]).to.have.property('name');
                expect(res.body[0]).to.have.property('description');
                expect(res.body[0]).to.have.property('image');
            }).timeout(5000);
        })
    }
);

describe('/PUT /crusos/:id', () => {

    it('should reply the PUT method with status code 500 if data not send', () => {
        return request(app)
            .put('/cursos/1')
            .expect(500);
    })

    it('should reply the PUT method with status code 200 if data is send', () => {
        return request(app)
            .put('/cursos/1')
            .send({
                name: 'Curso de NodeJS',
                description: 'Curso de NodeJS',
                image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            })
            .expect(200);
    });

    it('should reply the PUT method with status code 500 if name, description or image is a number', () => {
        return request(app)
            .put('/cursos/1')
            .send({
                name: 1,
                description: 1,
                image: 1
            })
            .expect(500);
    })

});

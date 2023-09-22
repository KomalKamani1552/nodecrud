
const request = require('supertest');
const express = require('express');
const app = express();
require("../Routes/tutorial.routes")(app)



describe('Space test suite', () => {
    it('tests /destinations endpoints', async() => {
        const response = await request(app).get("/api/tutorials/destinations");
        expect(response.body).toEqual(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"]);
       
    });

});

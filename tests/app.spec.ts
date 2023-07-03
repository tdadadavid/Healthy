import request from "supertest";
import { Server, createServer } from "http";

import { app } from "../src/app";

describe('App', () => {

    let serverApp = app;

    it('should return 200 OK', async () => {
        const response = await request(serverApp).get('/api/v1/health');

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
            code: 200,
            message: "Application running successfully"
        });
    })



})
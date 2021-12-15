//npm install supertest --save-dev

const request = require('supertest');
const express = require('express');

const tasksData = require('../tasks-db-mem.js')
//const tasksData = require('../tasks-db.js')
const tasksServices = require('../tasks-services.js')(tasksData)
const tasksApiRouter = require('../tasks-web-api.js')(express.Router(),tasksServices)
const app = express()
app.use('/api',tasksApiRouter)


test('get task with id 1', () => {
    return request(app)
      .get('/api/tasks/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toStrictEqual({id : 1, text : "task 1", userId : 11})
      })

  });
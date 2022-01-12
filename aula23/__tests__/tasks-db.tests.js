const data = require('../tasks-db-mem');

test('get task with id 1', () => {
    return data.getTaskById(1)
            .then(task => expect(task).toStrictEqual({id : 1, text : "task 1", userId : 11}))
  });
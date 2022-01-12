const errors = require('./errors/tasks-errors')

module.exports = function(data){

    return {
        getTasks: getTasks,
        addTask: addTask,
        getTaskById: getTaskById,
        updateTask: updateTask,
        deleteTask: deleteTask,
        validateUser: validateUser
    }

    function validateUser(username, password){
        return data.getUserByUsername(username)
                .then(user => {
                    if(password === password) return Promise.resolve({userName : user.userName , token : user.token})
                    else return Promise.reject(errors.INVALID_CREDENTIALS())
                })
    }

    function addTask(text, userToken){
        //TODO verify if text, user and userToken are undefined 
        //verify if userToken is associated to user - DONE
        //Create task - DONE
        return data.getUserByToken(userToken)
                .then(user => data.addTask(text, user.id)) 
                .catch(error => Promise.reject(errors.NOT_AUTHORIZE())) //TODO check if it is NOTFOUND USER
    }
    
    function getTaskById(id, user){
        //TODO verify if id, user and userToken are undefined 
        //TODO verify if userToken is associated to user
        //TODO get user task
        //TODO verify if user is owner
        return data.getTaskById(id)
    }
    
    function getTasks(userToken){
        if(!userToken) return Promise.reject(errors.NOT_AUTHORIZE())
        //verify if userToken is associated to user - DONE
        //get tasks of user - DONE
        return data.getUserByToken(userToken)
                .then(user => data.getTasksByUserId(user.id))
                
         
    }
    
    function updateTask(id, text, userToken){
        //TOOD update
        if(!userToken) return Promise.reject(errors.NOT_AUTHORIZE())
        return data.getTaskById(id)
        
    }
    
    function deleteTask(id){
        resp.json("deleteTask")
    }
    
}

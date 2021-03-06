



let _singleton = Symbol();
const MODULE_API_URL = 'https://course-web-app-server-iii.herokuapp.com/api/course/CID/module'
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }


    findAllModulesForCourse(courseId) {
        return fetch( MODULE_API_URL.replace('CID', courseId)

        )
            .then(function (response) {
                return response.json();
            })
    }



    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }



    deleteModule(moduleId) {
        const MODULE_API_URL2 = 'https://course-web-app-server-iii.herokuapp.com/api/module/moduleId'
        return fetch( MODULE_API_URL2.replace('moduleId', moduleId), {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }






}







let _singleton = Symbol();

export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }


    findAllLessonsForModule() {
        return fetch( 'https://course-web-app-server-iii.herokuapp.com/api/lesson'

        )
            .then(function (response) {
                return response.json();
            })
    }



    createLesson(lessonId) {
        const LESSON_API_URL2 = 'https://course-web-app-server-iii.herokuapp.com/api/lesson/lessonId'
        return fetch(LESSON_API_URL2.replace('lessonId', lessonId),
            {   body: JSON.stringify(lessonId),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }



   deleteLesson(lessonId) {
       const LESSON_API_URL2 = 'https://course-web-app-server-iii.herokuapp.com/api/lesson/lessonId'
        return fetch( LESSON_API_URL2.replace('lessonId', lessonId), {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }






}
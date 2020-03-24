const mondodb = require('mongodb');


class Service {
    constructor(
        title,
        type,
        description,
        tasks,
        examples,
        clinets
    ) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.tasks = tasks;
        this.examples = examples;
        this.clinets = clinets;
    }
}


module.exports = Service



// this.title = title;
// this.type = type;
// this.description = description;
// this.tasks = tasks;
// this.examples = [
//     {
//         "link": "",
//         "name": "",
//         "description": "",
//         "tasks": [],
//         "reviews": [
//             {
//                 "name": "",
//                 "contactLink": "",
//                 "imagePath": "",
//                 "review": "",
//                 "stars": 5
//             }
//         ],
//     }
// ];
// this.clinets = [
//     {
//         "name": "",
//         "imagePath": ""
//     }
// ];
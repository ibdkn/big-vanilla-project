import {StudentType} from "../02-objects/02";

let student: StudentType;

beforeEach(()=> {
    student = {
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            },
            streetTitle: "Surganova 2"
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
})
test("new tech skill should be added to student", () => {

})
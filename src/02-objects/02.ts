export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologyType[]
}

type AddressType = {
    city: LocalCityType
    streetTitle: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type TechnologyType = {
    id: number
    title: string
}


const student: StudentType = {
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

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);
const ages = [18, 20, 21, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // > 90

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
];

type CourseType = {
    title: string,
    price: number
}

// < 160
const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
]
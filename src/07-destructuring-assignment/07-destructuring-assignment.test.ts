import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
        props = {
            name: "Dimych",
            age: 32,
            lessons: [{title: "1"}, {title: "2"}],
            address: {
                street: {
                    title: "Nezavisimisti street"
                }
            }
        }
    }
)
test('', () => {

    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(age).toBe(32);
    expect(title).toBe("Nezavisimisti street");
})

test('', () => {
    let {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(age).toBe(32);
    expect(title).toBe("Nezavisimisti street");
})
import React from 'react';

type PropsType = {
    title: string
    man: ManType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}

export const Destructuring: React.FC<PropsType> = (props: PropsType) => {
    const {title, man: {name}} = props;

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
        </div>
    );
};

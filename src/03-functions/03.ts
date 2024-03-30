import { StudentType } from "../02-objects/02"
import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const sum = (a:number, b:number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, count: number) => {
    building.staffCount -= count;
}

export const toHireStaff = (building: GovernmentBuildingType, count: number) => {
    building.staffCount += count;
}

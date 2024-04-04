import {CityType, GovernmentBuildingType} from "../02-objects/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street);
}

export function getBuildingsWithStaffCountGreaterThan(buildings: Array<GovernmentBuildingType>, count: number) {
    return buildings = buildings.filter(s => s.staffCount > count);
}
import { hotels } from './hotels'
import { restaurants } from './restaurants'
import { history } from './history'
import { fun } from './fun'

export const allPlaces = [...hotels, ...restaurants, ...history, ...fun]

export function getPlaceById(id) {
  return allPlaces.find((place) => place.id === parseInt(id))
}

export { hotels, restaurants, history, fun }

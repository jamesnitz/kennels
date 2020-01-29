import React, { useContext } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { Link } from "react-router-dom"



export default (props) => {
  const { animals } = useContext(AnimalContext)
  const { employees } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)
  const chosenLocationId = parseInt(props.match.params.locationId, 10)
  const location = locations.find(location => location.id === chosenLocationId)
  const filteredAnimals = animals.filter(animal => {
    if (animal.locationId === chosenLocationId) {
      return animal
    }
  })

  const filteredEmployees = employees.filter(employee => {
    if (employee.locationId === chosenLocationId) {
      return employee
    }
  })
  console.log(filteredAnimals)

  return (
    <section>
      <h2>{location.name}</h2>
      <div>Currently caring for: {
        filteredAnimals.map(fa => {
          return <Link to={`/animals/${fa.id}`}>
            {fa.name}
          </Link>
        }).reduce((acc, x) => acc === null ? [x] : [acc, ', ', x], null)
      }</div>
      <div>These people working here: {
        filteredEmployees.map(fe => {
          return fe.name
        }).reduce((acc, x) => acc === null ? [x] : [acc, ', ', x], null)
      }</div>
    </section>
  )
}
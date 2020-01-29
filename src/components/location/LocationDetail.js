import React, { useContext } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"



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
      <div>Location: {location.name}</div>
  <div>Currently caring for: {
    filteredAnimals.map(fa => {
      return fa.name + " "
    })
    }</div>
  <div>These people working here: {
    filteredEmployees.map(fe => {
      return fe.name + " "
    })
    }</div>
    </section>
  )
}
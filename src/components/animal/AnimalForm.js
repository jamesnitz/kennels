import React, { useContext, useRef } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customers/CustomerProvider"

export default props => {
  const { addAnimals } = useContext(AnimalContext)
  const { locations } = useContext(LocationContext)
  const {customers} = useContext(CustomerContext)
  const animalName = useRef("")
  const animalBreed = useRef("")
  const animalLocation = useRef(0)
  const  customerName = useRef(0)
  const constructNewAnimal = () => {
    const locationId = parseInt(animalLocation.current.value)
    const customerId = parseInt(customerName.current.value)
    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addAnimals({
        name: animalName.current.value,
        locationId: locationId,
        breed:  animalBreed.current.value,
        customerId: customerId
      }).then(props.history.push("/animals"))
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <div className="form-group">
        <label htmlFor="animalName">Animal name</label>
        <input
          type="text"
          id="animalName"
          ref={animalName}
          required
          autoFocus
          className="form-control"
          placeholder="Animal name"
      />
      </div>
      <div className="form-group">
        <label htmlFor="animalBreed">Breed</label>
        <input
          type="text"
          id="animalBreed"
          ref={animalBreed}
          required
          autoFocus
          className="form-control"
          placeholder="Animal breed"
      />
      </div>
      <div className="form-group">
        <label htmlFor="location">Assign to location</label>
        <select
          defaultValue=""
          name="location"
          ref={animalLocation}
          id="animalLocation"
          className="form-control"
        >
          <option value="0">Select a location</option>
          {locations.map(e => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="customerName">owner</label>
        <select
          defaultValue=""
          name="customerName"
          ref={customerName}
          id="customerName"
          className="form-control"
        >
          <option value="0">Who own this dog?</option>
          {customers.map(e => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit"
        onClick={
          evt => {
            evt.preventDefault(); // Prevent browser from submitting the form
            constructNewAnimal();

          }
        }
        className="btn btn-primary">
        Save Animal
      </button>
    </form>
  )
}
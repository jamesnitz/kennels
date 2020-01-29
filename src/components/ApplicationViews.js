import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import EmployeeForm from "./employees/EmployeeForm"
import AnimalForm from "./animal/AnimalForm"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"


export default () => {
  return (
    <>
      <LocationProvider>
        <AnimalProvider>
        <EmployeeProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/" render={
          props => <LocationList />
        }/>
          <Route exact path="/locations/:locationId(\d+)" render={
              props => <LocationDetail {...props} />
            } />
        </EmployeeProvider>
        </AnimalProvider>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals" render={
              props => <AnimalList {...props} />
            } />
            <Route path="/animals/create" render={
              props => <AnimalForm {...props} />}
            />
            <Route path="/animals/:animalId(\d+)" render={
              props => <AnimalDetail {...props} />
            } />
            <Route path="/animals/edit/:animalId(\d+)" render={
              props => <AnimalForm {...props} />
            } />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          } />

          <Route path="/employees/create"
            render={props => <EmployeeForm {...props} />}
          />
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}
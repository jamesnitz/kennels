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
import Login from "./auth/Login"

export default () => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/" render={
            props => {
              if (localStorage.getItem("kennel_customer") !== null) {
                return <LocationList {...props} />
              }
              return <Login {...props} />
            }
          }>
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals" render={
            props => {
              if (localStorage.getItem("kennel_customer") !== null) {
                return <AnimalList {...props} />
              }
              return <Login {...props} />
            }
          }>
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/customers"  render={
            props => {
              if (localStorage.getItem("kennel_customer") !== null) {
                return <CustomerList {...props} />
              }
              return <Login {...props} />
            }
          }>
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees" render={
            props => {
              if (localStorage.getItem("kennel_customer") !== null) { /* ...props =  match: {}, location: {}, history: {} */
                return <EmployeeList {...props} />
              }
              return <Login {...props} />
            }
          } />
          <Route exact path="/employees/create"
            render={props => <EmployeeForm {...props} />}
          />
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}
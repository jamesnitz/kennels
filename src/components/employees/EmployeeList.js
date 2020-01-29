import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../location/LocationProvider"



export default (props) => {
  const { employees } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)
  return (
    <>
    <h1>Employees</h1>
    <button onClick={() => props.history.push("/employees/create")}>
      Add Employee
    </button>
    <div className="employeeList">
      {
        employees.map(employee => {
          const foundLocation = locations.find(l => l.id === employee.locationId)

          return <Employee {...props} key={employee.id}
            location={foundLocation}
            employee={employee}  />
        })
      }
    </div>
    </>
  )

}




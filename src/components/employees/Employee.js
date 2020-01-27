import React from "react"
import "./Employee.css"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__name">{location.name}</address>
    </section>
)
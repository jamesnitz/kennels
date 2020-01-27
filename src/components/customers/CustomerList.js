import React, { useContext } from "react"
import Customer from "./Customer"
import "./Customer.css"
import { CustomerContext } from "./CustomerProvider"

export default () => {
  const {customers} = useContext(CustomerContext)

  return (
    <div className="customers">
      {
        customers.map(singleCustomer => <Customer key={singleCustomer.id} customer={singleCustomer} />)
      }
    </div>
  )
}
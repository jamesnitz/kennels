import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"

export default (props) => {
  const { animals } = useContext(AnimalContext)


  return (
    <>
    <button onClick={() => props.history.push("/animals/create")}>
      Add Animal
    </button>
    <div className="animals">
      {
       animals.map(animal => {
        return <Animal key={animal.id} animal={animal} />
    })
      }
    </div>
    </>
  )
}

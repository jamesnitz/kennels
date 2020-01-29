import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <address className="location__address">{location.address}</address>
    </section>
)
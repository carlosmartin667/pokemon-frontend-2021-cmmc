import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'

import { Pokemon } from '../models/Pokemon'

const Home = props => {
    const personaje = Pokemon
    return (
        <>
            <div className="container mt-3">
                <div className="alert alert-info" role="alert">
                    todos
                </div>
                <hr />
                <div className="row">
                    {personaje.map((man) => (
                        <Card key={man.name} {...man} />
                    ))}
                </div>
            </div>
        </>
    )
}

Home.propTypes = {

}

export default Home

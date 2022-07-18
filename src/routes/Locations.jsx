import React from 'react'
import Map from '../components/Map/Map'
import '../assets/css/locations.css'
import Stores from '../components/Stores/Stores'
import { Container } from 'react-bootstrap'

function Locations() {
  return (
    <div>
        <Map />
        <Container className='pb-3'>
            <h1 class="my-3"> Find your nearest branch</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default" placeholder='Here are some dummy locations below'/>
            </div>
            <Stores />
        </Container>
    </div>
  )
}

export default Locations
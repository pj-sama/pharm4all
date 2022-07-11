import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import '../../assets/css/components/Promise-Preview.css'

function PromisePreview() {
  return (
    <div id='our_promise'>
        <Container fluid='md'  className='text-center'>
            <h2 class="display-5">Our Promise</h2>
            <p class="m-3 fs-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed iusto
              obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex nostrum officia
              alias quae. Ipsam, maiores.</p>
        
            <Button variant="light" className='fs-5'>Find out more</Button>{' '}
        </Container>
    </div>
  )
}

export default PromisePreview
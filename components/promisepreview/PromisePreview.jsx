import Link from 'next/link'
import React from 'react'

import { Container, Button } from 'react-bootstrap'

import styles from '../../styles/PromisePreview.module.css'

function PromisePreview() {
  return (
    <div id={styles.promise} className='blue-bg'>
        <Container fluid='md'  className='text-center'>
            <h2 className="display-5">Our Promise</h2>
            <p className="m-3 fs-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sed iusto
              obcaecati earum esse vero eaque nesciunt, assumenda suscipit minima voluptas nisi ex nostrum officia
              alias quae. Ipsam, maiores.</p>
        
            <Button variant="light" className='fs-5 text-black'>
                <Link href='/About' id={styles.findoutmore}className='text-muted'>
                    Find out more
                </Link>
            </Button>{' '}
        </Container>
    </div>
  )
}

export default PromisePreview
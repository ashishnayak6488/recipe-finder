import React from 'react'
import Header from '../components/common/Header'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Header title = "All Recipes" bgClass = "bg-image">
            <Button
             content ='Search Recipes'
             color='primary'
             as={Link}
             to = '/recipes'
             size='big'
              
            />
        </Header>

    </div>
  )
}

export default Home
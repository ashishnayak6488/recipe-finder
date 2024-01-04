import React, { useState } from 'react'
import { Form, Grid, Input } from 'semantic-ui-react'

const Search = ({setSearchedQuery}) => {

    const [value , setValue] = useState("")
    const onFormSubmit = () =>{
        setSearchedQuery(value);
    }

  return (
    <Grid columns={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-heading'>Search Recipes Here For <span style={{color: "blue"}}>ALL RECIPES</span> </h2>
            <h4>Input Recipes Saperated By commas</h4>
            <Form onSubmit={onFormSubmit}>
                <Input
                    placeholder = "tomato,potato,pizza,onion"
                    action={{icon: 'search' , color: 'blue'}}
                    onChange={(e) => setValue(e.target.value)}
                    value = {value}
                />
            </Form>
        </Grid.Column>
    </Grid>
  )
}

export default Search
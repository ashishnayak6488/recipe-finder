import React, { useEffect, useState } from 'react'
import { getRecipe } from '../services/api'
import { Link, useParams } from 'react-router-dom'
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react'

const RecipeDetailes = () => {

    const [recipe , setRecipe] = useState({})

    const {recipeId} = useParams();

    useEffect(() =>{
        const getData = async() =>{
            let result = await getRecipe(recipeId)
            if (result && result.recipe) {
                
                setRecipe(result.recipe);
            }
        }
        getData()
    } , [])

  return (
    Object.keys(recipe).length > 0 ?
    <Grid container stackable columns={2} className='detailsPageContent'>
        <Grid.Column>
            <Button
                as={Link}
                to ={'/recipes'}
                content ={"Back To Recipe List"}
                color='red'
                style = {{ marginBottom: 30 }}
            />
            <Image src = {recipe.image_url} />
        </Grid.Column>
        <Grid.Column>
            <Header size='medium'>{recipe.title}</Header>
            <p>Provided by : {recipe.publisher} </p>

            <Button
                as={"a"}
                href ={recipe.publisher_id}
                target = "_blank"
                content ={"Publisher WebPage"}
                color='blue'
            />
            <Button
                as={"a"}
                href ={recipe.source_url}
                target = "_blank"
                content ={"Recipe URL"}
                color='green'
            />

            <Header size='large' content ="Ingredients" />
            <Segment.Group>
                {
                    recipe && recipe.ingredients.map(data => (
                        <Segment>
                            <h5>{data}</h5>
                        </Segment>
                    ))
                }
            </Segment.Group>

        </Grid.Column>
    </Grid> : null
  )
}

export default RecipeDetailes
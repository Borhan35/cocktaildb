import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';



export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const {data} = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [ strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
          const newCocktail = { name, image, info, category, glass, instructions, ingredients}
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error.response)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id]);

  if (loading) {
    return <Loading/>
  }
  
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <Section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </Section>
    )
  }
}


const Section = styled.section`
    text-align: center;
    h2{
        font-size: 2rem;
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
        text-align: center;
        margin-bottom: 3.5rem;
        margin-top: 1rem;
    }
    .drink{
        width: var(--smallWidth);
        max-width: var(--fullWidth);
        margin: 0 auto;
        text-align: left;
        img{
            border-radius: var(--mainBorderRadius);
        }
        .drink-info {
            padding-top: 2rem;
            p{
                font-weight: 700;
                text-transform: capitalize;
                line-height: 1.8;
                .drink-data{
                    background: var(--primaryLightColor);
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--mainBorderRadius);
                    color: var(--primaryColor);
                    margin-right: 0.5rem;
                }
            }
        }
    }
    @media screen and (min-width: 992px){
        .drink {
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-gap: 3rem;
            gap: 3rem;
            align-items: center;
            .drink-info {
                padding-top: 0;
            }
        }
    }
`;
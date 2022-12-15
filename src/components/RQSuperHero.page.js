import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios"
import { useParams } from 'react-router-dom'




export const RQSuperHeroPage = () => {

  const fetchSuperHero = () => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
  }

  const { heroId } = useParams();
  const { isLoading, data } = useQuery(["super-hero", heroId], fetchSuperHero)

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{data.data.name}</h2>
      <h2>{data.data.alterEgo}</h2>         
    </div>
  )
}

import React from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'
import { Link } from 'react-router-dom'

export const RQSuperHeroesPage = () => {

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData()

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }


    if (isError) {
        return <h2>{error.message}</h2>
    }

    console.log({ isLoading, isFetching })

    return (
        <>
            <h2>RQSuperHeroes Page</h2>
            {
                data?.data.map((hero) => {
                    return <Link to={`/rq-super-heroes/${hero.id}`}><div key={hero.name}>{hero.name}</div></Link>
                })
            }
        </>
    )
}

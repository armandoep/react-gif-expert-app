import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ( {category} ) => {

    const { data:images, loading } = useFetchGifs(category)

    return (
        <>
        <h3> {category} </h3>
 
        <div className='card-grid'>
        {loading && <h2 className='animate__animated animate__bounceOut animate__delay-0.5s'>Loading</h2>}
                {
                    images.map( ( img ) => (
                        <GifGridItem
                        key={img.id} 
                        { ...img }
                        />
                    ))
                }

        </div>
        </>
    )
}

import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    console.log( title, url )

    return (
        <div className='card animate__animated animate__backInRight animate__delay-0.5s'>
            {/* {img.title} */}
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

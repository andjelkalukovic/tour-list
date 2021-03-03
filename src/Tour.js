import { React, useState } from 'react'
import Button from 'react-bootstrap/Button'

const Tour = ({ id, name, image, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='container text-center py-5 my-4'>
            <div className='row justify-content-center'>
                <div>
                    <img src={image} alt={name} className='pb-3 col-sm-11' />
                </div>

                <div>
                    <h1>{name}</h1>
                    <p className='px-5'>{readMore ? info : `${info.substring(0, 200)}...`}
                        <Button onClick={() => setReadMore(!readMore)}
                            variant="link">{readMore ? 'Show less...' : 'Read more...'}</Button>
                    </p>
                    <p className='font-weight-bold'>Price: ${price}</p>
                </div>

                <Button variant="outline-danger" onClick={() => removeTour(id)}>Not Interested</Button>{' '}
            </div>
        </article>
    )
}

export default Tour;
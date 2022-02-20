import {React, useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Comida'])

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Hunter']);
    //     setCategories( cats => [...cats, 'Hunter']);
    // }


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key = { category }
                        category = { category } />
                ))


            }
        </ol>
    </>
  )
}


// import React, {useState} from 'react';
// import { Fragment } from 'react';
// import PropTypes from 'prop-types';

// const  GifExpertApp = ( { value } ) => {
//     return (
//     <Fragment>
//         <h2>GifExpertApp</h2>
//         <hr></hr>
//     </Fragment>
//     );
// }

// export default GifExpertApp;
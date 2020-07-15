import React, { Fragment } from 'react'

import { getPhotos } from '../hoc/getPhotos'
import { useQuery } from'@apollo/react-hooks'

import { PhotoCard } from'../components/PhotoCard'
import { Spinner } from '../components/Spinner';


export const ListOfPhotoCards = () => {
    const { loading, error, data } = useQuery(getPhotos, {variables: {categoryId:2}})
  
    if (loading) return <PhotoCard loading={loading} />
    if (error) return <p>Error</p>
  
    return (
      <ul>
          {data.photos.map((photoCard, id) => (
          <PhotoCard key={id} {...photoCard} loading={loading} />
        ))}
      </ul>
    )
  }
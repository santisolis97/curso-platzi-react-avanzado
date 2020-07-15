import React from "react";
import { PhotoCard } from "../PhotoCard";
// import {List, Item} from './styles'
import database from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  const db = database;

  return (
    <ul>
      {db.photos.map(photo => (
          <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

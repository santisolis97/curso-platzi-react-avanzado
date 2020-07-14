import React from "react";
import { Category } from "../Category";
import {List, Item} from './styles'
import database from '../../../api/db.json'

export const ListOfCategories = () => {
  const db = database;

  return (
    <List>
      {db.categories.map((category) => (
        <Item key={category.id}>
          {" "}
          <Category {...category} />{" "}
        </Item>
      ))}
    </List>
  );
};

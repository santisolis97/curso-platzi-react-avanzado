import React, {useState} from "react";
import { Category } from "../Category";
import {List, Item} from './styles'
import categories as mockCategories from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(categories)
  const db = mockCategories;

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

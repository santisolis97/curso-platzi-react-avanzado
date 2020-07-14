import React, {useEffect , useState} from "react";
import { Category } from "../Category";
import {List, Item} from './styles'
// import database from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  // console.log(categories);

  useEffect(function () {
    fetch('https://petgram-santi-server.vercel.app/categories')
    .then(res=>res.json())
    .then(response=>{
      setCategories(response)
    })
  })

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          {" "}
          <Category {...category} />{" "}
        </Item>
      ))}
    </List>
  );
};

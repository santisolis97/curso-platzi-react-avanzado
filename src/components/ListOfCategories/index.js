import React, { useEffect, useState, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
// import database from '../../../api/db.json'

function useCategoriesData(){
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState([false]);
  

  useEffect(function () {
    setLoading(true)
    window
      .fetch("https://petgram-six.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false)
      });
    // console.log(categories)
  }, []);
  return{categories, loading}
}

export const ListOfCategories = () => {
  const {categories,loading} = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 199;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    };
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed, loading) => (
    <List fixed={fixed} loading={loading}>
      {categories.map((category) => (
        <Item key={category.id}>
          {" "}
          <Category {...category} />{" "}
        </Item>
      ))}
    </List>
  );
  
  if (loading) {
    return 'Cargando...'
  }

  return (
    <Fragment>
      {renderList()}

      {showFixed && renderList(true)}
    </Fragment>
  );
};

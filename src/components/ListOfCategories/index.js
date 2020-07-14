import React, { useEffect, useState, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
// import database from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);
  useEffect(function () {
    window
      .fetch("https://petgram-six.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
    // console.log(categories)
  }, []);

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 199;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    };
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? "fixed" : ""}>
      {categories.map((category) => (
        <Item key={category.id}>
          {" "}
          <Category {...category} />{" "}
        </Item>
      ))}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

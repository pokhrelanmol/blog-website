import React, { createContext, useReducer, useState } from "react";
export const BlogContext = createContext("");

let contents = new Array(8).fill({
  title: " Stackoverflow survey chooses Javascript as a No.1 Language for web",
  body: `According to the 
    stackoverflow developer survey of
     2021 most of the developer prefer 
     working with javascript and the library/Framework
      around it. Do you know why javascript is so popular
       among all other language,you dont the here is a answer, 
       Javascript has emerged so nicely from past 5-6 years its
        2015 update crush the market and make all
         other web language bow infront of it

         `,
  image: "https://random.imagecdn.app/500/700",
});

// const addToLocalStorage = () => {
//   localStorage.setItem("posts", JSON.stringify([...contents]));
// };
// const getLocalStorageData = () => {
//   const allPost = JSON.parse(localStorage.getItem("posts"));
//   if(allPost === null){

//   localStorage.setItem("posts", JSON.stringify([...contents]));
//   }

//   return allPost;
// };

contents = contents.map((content, id) => {
  return { ...content, id :id,title: `${id + 1}. ` + content.title };
});

export const actionTypes = {
  add: "ADD_BLOG",
  delete:"DELETE_POST"
};

export default function BlogProvider({ children }) {
  const [blogs, dispatch] = useReducer(
(state, action) => {
      switch (action.type) {

        case actionTypes.add:
          // contents.unshift(action.payload);
          //  addToLocalStorage();
          return [{...action.payload, id:state.length+1}, ...state];
      case actionTypes.delete:
        return[...state.filter((blog)=> blog.id!==action.payload)]
        default:
          return state;
      }
    },
    // [...(getLocalStorageData() || contents)]
    [...contents]

  );

  
 console.log(blogs)

  return (
    <>
      <BlogContext.Provider value={{ blogs, dispatch }}>
        {children}
      </BlogContext.Provider>
    </>
  );
}

import React, { createContext, useReducer } from "react";
export const BlogContext = createContext({ state: { blogs: [] } });
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
contents = contents.map((content, id) => {
  return { ...content, id: id, title: `${id + 1}. ` + content.title };
});
let initialState = {
  blogs: [...contents],
  blogToEdit: null,
};

export const actionTypes = {
  add: "ADD_BLOG",
  delete: "DELETE_POST",
  edit:"EDIT-BLOG",
  update:"UPDATE BLOG"

};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.add:
      return {
        ...state,
        blogs: [
          { ...action.payload, id: state.blogs.length + 1 },
          ...state.blogs,
        ],
      };
    case actionTypes.delete:
      return {
 ...state,
        blogs: [...state.blogs.filter((blog) => blog.id !== action.payload)],
      };
      case actionTypes.edit:
         const blogToEdit = state.blogs.find((blog) => blog.id === action.payload);
      return { ...state, blogToEdit };
      case actionTypes.update:

   return {
     ...state,
   blogs: state.blogs.map((blog)=>{
     if(blog.id === action.payload.blogId){
       blog = action.payload.blog
     }
     return blog
   })
   }
    default:
      return state;
  }

};

export default function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <BlogContext.Provider value={{ state, dispatch }}>
        {children}
      </BlogContext.Provider>
    </>
  );
}

import React, { createContext, useState } from "react";
export const BlogContext = createContext("");
export default function BlogProvider({ children }) {
  let contents = new Array(8).fill({
    title:
      " Stackoverflow survey chooses Javascript as a No.1 Language for web",
    body: `According to the 
    stackoverflow developer survey of
     2021 most of the developer prefer 
     working with javascript and the library/Framework
      around it. Do you know why javascript is so popular
       among all other language,you dont the here is a answer, 
       Javascript has emerged so nicely from past 5-6 years its
        2015 update crush the market and make all
         other web language bow infront of it`,
    image: "https://random.imagecdn.app/500/700",
  });

  contents = contents.map((content, id) => {
    return { ...content, title: `${id + 1}. ` + content.title };
  });
  const [addItem, setAddItem] = useState([...contents]);
  const paintContent = (userInput) => {
    setAddItem([userInput, ...addItem]);
  };

  return (
    <>
      <BlogContext.Provider value={{ addItem, setAddItem, paintContent }}>
        {children}
      </BlogContext.Provider>
    </>
  );
}

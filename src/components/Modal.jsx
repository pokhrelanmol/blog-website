import React, { createContext, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import "../css/modal.css";
import { BlogContext } from "./CreatePosts";
import { actionTypes } from "./CreatePosts";
import { UserContext } from "./GlobalContext";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// modal
Modal.setAppElement(document.querySelector("#root"));
function ModalComponent({ text, blogId }) {
  const { state:{blogs,blogToEdit}, dispatch, } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [userInput, setUserInput] = useState({
    title: "",
    body: "",
    image:""
  });
 
  const[blog,setBlog] = useState({title: "",body: "", id: "", })
 useEffect(()=>{
 if(blogToEdit){
   setBlog(blogToEdit)
 }
 },[blogToEdit])

  const inputEvent = (e) => {
    let { name, value } = e.target;
    setUserInput({
      ...blogs,
      [name]: value,
    });
  };
 const handleEdit = (e) => {
 setBlog({...blog,[e.target.name]:e.target.value})
  };
  const openModalForEdit = () => {
    setIsOpen(true);
    dispatch({ type: actionTypes.edit, payload: blogId });
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handlePost = () => {
    dispatch({ type: actionTypes.add, payload: userInput });
    setUserInput({
      title: "",
      body: "",
      image:""
    });
    setIsOpen(false);
  };
  const handleUpdate =()=>{
   dispatch({type:actionTypes.update,payload:{blog,blogId:blog.id}})
    setIsOpen(false);
  }
  if (user) {
    return (
      <div>
        <div>
          <button
            onClick={text == "edit" ? openModalForEdit : openModal}
            className="add-post"
          >
            {text}
          </button>
          <div className="modal-wrapper">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <button onClick={closeModal} className="close-btn">
                close
              </button>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  name="title"
                  placeholder="Title"
                  onChange={ text ==='edit'?handleEdit:inputEvent}
                  value={ text === "edit"?blog.title:userInput.title}
                />
                <textarea
                  name="body"
                  id=""
                  cols=""
                  rows="10"
                  placeholder="content"
                  onChange={text ==='edit'?handleEdit:inputEvent}
                  value={ text === "edit"?blog.body:userInput.body}
                />
                <button
                  className="post"
                  onClick={() => {
                    text === "Add Post" ? handlePost() :handleUpdate();
                  }}
                >
                  {text === "edit" ? "update" : " post"}
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ModalComponent;

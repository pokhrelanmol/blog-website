import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "../css/modal.css";
import { BlogContext } from "./CreatePosts";
import {actionTypes} from './CreatePosts'
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
Modal.setAppElement(document.querySelector(".nav-container"));
function ModalComponent(props) {
  const {blogs,dispatch} = useContext(BlogContext)
  const [userInput, setUserInput] = useState({
    title: "",
    body: "",
  });
  const inputEvent = (e) => {
    let { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const clickEvent = () => {
    dispatch({type:actionTypes.add,payload:userInput})
    setUserInput({
      title: "",
      body: "",
    });
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={openModal} className="add-post">
          Add Post
        </button>
        <div className="modal-wrapper">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal} className="close-btn">
              close
            </button>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                name="title"
                placeholder="Title"
                onChange={inputEvent}
                value={userInput.title}
              />
              <textarea
                name="body"
                id=""
                cols=""
                rows="10"
                placeholder="content"
                onChange={inputEvent}
                value={userInput.body}
              />
              <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
              <button className="post" onClick={() => clickEvent()}>
                Post              </button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;

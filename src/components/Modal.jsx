import React, { createContext, useContext, useState } from "react";
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
function ModalComponent() {
  const { blogs, dispatch } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [userInput, setUserInput] = useState({
    title: "",
    body: "",
  });
  const inputEvent = (e) => {
    let { name, value } = e.target;
    setUserInput({
      ...blogs,
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
  const handlePost = () => {
    dispatch({ type: actionTypes.add, payload: userInput });
    setUserInput({
      title: "",
      body: "",
    });
    setIsOpen(false);
  };
  if (user) {
    return (
      <div>
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
                <button className="post" onClick={() => handlePost()}>
                  Post
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

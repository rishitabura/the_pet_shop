// import React, { useState } from "react";
// import "../styles/Modal.css";

// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

//   return (
//     <>
//       <button onClick={toggleModal} className="btn-modal">
//         Open
//       </button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
//               perferendis suscipit officia recusandae, eveniet quaerat assumenda
//               id fugit, dignissimos maxime non natus placeat illo iusto!
//               Sapiente dolorum id maiores dolores? Illum pariatur possimus
//               quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
//               placeat tempora vitae enim incidunt porro fuga ea.
//             </p>
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )}
      
//     </>
//   );
// }
// Modal.js

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ProductModal({ isOpen, onRequestClose, product }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>{product.nameP}</h2>
      <p>Price: {product.price}</p>
      {/* Add more product details here */}
      <button onClick={onRequestClose} className="close-button">
        Close
      </button>
    </Modal>
  );
}

export default ProductModal;

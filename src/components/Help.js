// Importing necessary libraries and components
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// Functional component that represents the Help section
const Help = () => {
  // Using useState to manage the visibility state of the modal
  const [show, setShow] = useState(false);

  // Function to handle closing the modal
  const handleClose = () => setShow(false);
  // Function to handle showing the modal
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Button to open the modal */}
      <Button variant="info" onClick={handleShow}>
        Help
      </Button>

      {/* Modal component for displaying the game rules */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Body of the modal containing the game rules */}
          <p>Guess the word by selecting letters. Too many incorrect guesses and you lose the game!</p>
          <p>Click on letters to make guesses, and the game will indicate if the guess is correct or not.</p>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Exporting the Help component as the default export
export default Help;

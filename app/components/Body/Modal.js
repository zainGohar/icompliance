import React ,{useState} from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const Popup = () => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Option 3
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={handleOptionChange}
              />
              Option 4
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="option5"
                checked={selectedOption === "option5"}
                onChange={handleOptionChange}
              />
              Option 5
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default Popup

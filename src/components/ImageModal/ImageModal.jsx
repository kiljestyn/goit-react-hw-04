import Modal from "react-modal";

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

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Selected Image"
        ariaHideApp={false}
      >
        <img
          src={selectedImage}
          alt="Selected Image"
          width={800}
          height={600}
        />
      </Modal>
    </div>
  );
};

export default ImageModal;

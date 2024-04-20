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

const ImageModal = ({ modalImg, isOpen, onCloseModal }) => {
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        ariaHideApp={false}
      >
        {modalImg && (
          <img
            src={modalImg.imgUrl}
            alt="Selected Image"
            width={800}
            height={600}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;

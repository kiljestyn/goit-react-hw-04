import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { requestImages } from "./services/api";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalImg, setModalImg] = useState(null);
  const [openCloseModal, setOpenCloseModal] = useState(false);

  useEffect(() => {
    if (!query.length) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        if (page === 1) setImages(null);
        const data = await requestImages(query, page);
        setImages((prevImages) =>
          prevImages !== null ? [...prevImages, ...data] : [...data]
        );
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const onAddPage = () => {
    setPage(page + 1);
  };
  const openModal = (img) => {
    setModalImg(img);
    setOpenCloseModal(true);
  };
  const closeModal = () => setOpenCloseModal(false);
  // const openModal = (image) => {
  //   setSelectedImage(image);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Toaster
        containerStyle={{
          top: 50,
        }}
        toastOptions={{
          duration: 2500,
          position: "top-center",
          reverseOrder: false,
          style: {
            background: "red",
            color: "#fff",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <SearchBar onSubmit={onSetSearchQuery} isError={isError} />
      {Array.isArray(images) && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {images && images.length !== 0 && <LoadMoreBtn onAddPage={onAddPage} />}
      <ImageModal
        modalImg={modalImg}
        isOpen={openCloseModal}
        onCloseModal={closeModal}
        // isOpen={modalImg}
        // onRequestClose={closeModal}
        // selectedImage={selectedImage}
      />
    </>
  );
}

export default App;

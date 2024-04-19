import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { requestPictures } from "./services/api";

function App() {
  const [pictures, setPictures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (query.length === 0) return;

    const fetchPictures = async () => {
      try {
        setIsLoading(true);
        fetchPictures;
        const data = await requestPictures(query, page);
        setPictures((prevPictures) =>
          prevPictures !== null ? [...prevPictures, ...data] : [...data]
        );
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPictures();
  }, [query, page]);

  const onSetSearchQuery = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const onAddPage = () => {
    setPage(page + 1);
  };

  const openModal = (picture) => {
    setSelectedImage(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

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
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {pictures && <ImageGallery pictures={pictures} openModal={openModal} />}
      {pictures && pictures.length !== 0 && (
        <LoadMoreBtn onAddPage={onAddPage} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </>
  );
}

export default App;

import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, openModal }) => {
  return (
    <>
      <ul className={css.list}>
        {Array.isArray(pictures) &&
          pictures.map(({ id, alt_description, user, urls }) => (
            <ImageCard
              key={id}
              urls={urls}
              alt_description={alt_description}
              user={user}
              openModal={openModal}
            />
          ))}
      </ul>
    </>
  );
};

export default ImageGallery;

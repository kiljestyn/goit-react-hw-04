import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.list}>
        {Array.isArray(images) &&
          images.map(({ id, alt_description, user, urls }) => (
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

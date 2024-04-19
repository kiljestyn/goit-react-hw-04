import css from "./ImageCard.module.css";

const ImageCard = ({ id, urls, alt_description, user, openModal }) => {
  return (
    <li key={id} className={css.listItem}>
      <div className={css.imgItem}>
        <img
          onClick={() =>
            openModal({ imgUrl: urls.regular, description: alt_description })
          }
          src={urls.small}
          width={300}
          alt={alt_description}
        />
      </div>
      <div className={css.imageInfo}>
        <p className={css.textInfo}>
          Author: <span>{user.name}</span>
        </p>
        <p className={css.textInfo}>
          Location: <span>{user.location}</span>
        </p>
      </div>
    </li>
  );
};

export default ImageCard;

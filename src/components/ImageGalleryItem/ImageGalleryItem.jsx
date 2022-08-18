import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ webURL, imageURL, tags, onClick }) => (
  <li className="gallery-item" onClick={() => {onClick(imageURL);}}>
    <img src={webURL} alt={tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

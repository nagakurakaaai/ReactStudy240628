import PropTypes from 'prop-types';

function ServiceArticle(props) {
  const {icon, title, text} = props
  return (
    <>
    <div className="service-list__item">
      <figure className="service-list__img-wrapper">
        <span className="service-list__img material-icons-round">
          {icon}
        </span>
      </figure>
      <div className="service-list__body">
        <div className="service-list__title">{title}</div>
        <div className="service-list__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
    </>
  )
}

ServiceArticle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ServiceArticle

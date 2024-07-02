import PropTypes from 'prop-types';

function CompanyNewsArticle(props) {
  const {date, text} = props
  return (
    <>
    <li className="news-list__item">
      <a href="#" className="news-list__link">
        <div className="news-list__date">
          <time dateTime={date} className="news__date">{date}</time>
        </div>
        <div className="news-list__title">
          {text}
        </div>
      </a>
    </li>
    </>
  )
}

CompanyNewsArticle.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
};

export default CompanyNewsArticle

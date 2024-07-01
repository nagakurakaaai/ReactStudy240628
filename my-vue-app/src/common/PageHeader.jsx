import PropTypes from 'prop-types';

function PageHeader(props) {
  const {title} = props
  
  return (
    <>
    <div className="page-header">
      <div className="page-header__titleArea">
        <h2 className="page-header__title">{title}</h2>
      </div>
    </div>
    </>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader

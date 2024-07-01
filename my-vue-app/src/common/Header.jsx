import PropTypes from 'prop-types';
import logo from '/img/logo.svg'

function Header(props) {
  const {flag} = props

  return (
    <>
    <header className="header">
      <div className="header__logo">
        <a href="."><img src={logo} alt="START" /></a>
      </div>
      <div className="header__nav">
        <nav className="gnav">
          <ul className="gnav__list">
            <li className="gnav__item"><a className={flag === "top" ? "gnav__link gnav__link--active" : "gnav__link"} href=".">ホーム</a></li>
            <li className="gnav__item"><a className={flag === "message" ? "gnav__link gnav__link--active" : "gnav__link"} href="message.html">メッセージ</a></li>
            <li className="gnav__item"><a className={flag === "company" ? "gnav__link gnav__link--active" : "gnav__link"} href="company.html">会社概要</a></li>
          </ul>
        </nav>
        <button type="button" id="js-btn-menu" className="btn-menu">
          <span className="btn-menu__line"></span>
        </button>
      </div>
    </header>
    </>
  )
}

Header.propTypes = {
  flag: PropTypes.string,
};

export default Header

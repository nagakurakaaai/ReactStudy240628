// import styles from '../style.module.css'
// import Article from './Article.jsx'
import logo from '../img/logo.svg'

function Header() {
  return (
    <>
    <header className="header">
      <div className="header__logo">
        <a href="."><img src={logo} alt="START" /></a>
      </div>
      <div className="header__nav">
        <nav className="gnav">
          <ul className="gnav__list">
            <li className="gnav__item"><a className="gnav__link gnav__link--active" href=".">ホーム</a></li>
            <li className="gnav__item"><a className="gnav__link" href="message.html">メッセージ</a></li>
            <li className="gnav__item"><a className="gnav__link" href="company.html">会社概要</a></li>
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

export default Header

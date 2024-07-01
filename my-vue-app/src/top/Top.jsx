import Header from '../common/Header.jsx'
import KeyVisual from './KeyVisual.jsx'
import News from './News.jsx'
import Service from './Service.jsx'
import Hooter from '../common/Hooter.jsx'

function Top() {
  return (
    <>
    <div className="wrapper">
      <Header />
      <KeyVisual />
        <main className="content">
          <News />
          <Service />
        </main>
      <Hooter />
    </div>
    </>
  )
}

export default Top

import Header from '../common/Header.jsx'
import Hooter from '../common/Hooter.jsx'
import PageHeader from '../common/PageHeader.jsx'
import PresidentMassage from './PresidentMassage.jsx'
import OfficePicture from './OfficePicture.jsx'
// import Service from './Service.jsx'

function Massage() {
  return (
    <>
    <div className="wrapper">
      <Header />
      <PageHeader title="メッセージ"/>
        <main className="content">
          <PresidentMassage />
          <OfficePicture />
        </main>
      <Hooter />
    </div>
    </>
  )
}

export default Massage

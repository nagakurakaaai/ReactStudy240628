import Header from '../common/Header.jsx'
import Hooter from '../common/Hooter.jsx'
import PageHeader from '../common/PageHeader.jsx'
import CompanyInfo from './CompanyInfo.jsx'
import CompanyNews from './CompanyNews.jsx'

function Company() {
  return (
    <>
    <div className="wrapper">
      <Header flag="company"/>
      <PageHeader title="会社概要"/>
        <main className="content">
          <CompanyInfo />
          <CompanyNews />
        </main>
      <Hooter />
    </div>
    </>
  )
}

export default Company

import CompanyNewsArticle from './CompanyNewsArticle.jsx'

function CompanyNews() {
  return (
    <>
      <div className="company-news">
        <div className="container">
          <div className="news-list">
            <ul className="news-list__list">
              <CompanyNewsArticle  date="2030.02.10" text="コーポレートサイトをリニューアルしました。"/>
              <CompanyNewsArticle  date="2030.02.08" text="採用を強化中です！一緒に働きませんか？"/>
              <CompanyNewsArticle  date="2030.02.02" text="人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！"/>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default CompanyNews

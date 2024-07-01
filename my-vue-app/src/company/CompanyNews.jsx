
function CompanyNews() {
  return (
    <>
      <div className="company-news">
        <div className="container">

          <div className="news-list">
            <ul className="news-list__list">
              <li className="news-list__item">
                <a href="#" className="news-list__link">
                  <div className="news-list__date">
                    <time dateTime="2020-02-10" className="news__date">2030.02.10</time>
                  </div>
                  <div className="news-list__title">
                    コーポレートサイトをリニューアルしました。
                  </div>
                </a>
              </li>
              <li className="news-list__item">
                <a href="#" className="news-list__link">
                  <div className="news-list__date">
                    <time dateTime="2020-02-08" className="news__date">2030.02.08</time>
                  </div>
                  <div className="news-list__title">
                    採用を強化中です！一緒に働きませんか？
                  </div>
                </a>
              </li>
              <li className="news-list__item">
                <a href="#" className="news-list__link">
                  <div className="news-list__date">
                    <time dateTime="2020-02-02" className="news__date">2030.02.02</time>
                  </div>
                  <div className="news-list__title">
                    人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default CompanyNews

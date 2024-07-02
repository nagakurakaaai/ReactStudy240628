import ServiceArticle from './ServiceArticle.jsx'

function Service() {
  return (
    <>
    <section className="service">
        <div className="container">
          <div className="service__heading">
            <h2 className="heading-primary">サービス</h2>
          </div>
          <div className="service__body">
            <div className="service-list">
              <ServiceArticle icon="work" title="人材紹介業" text="新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。"/>
              <ServiceArticle icon="location_city" title="スクール事業" text="オンラインでWeb制作を学べるスクールを運営しています。"/>
              <ServiceArticle icon="desktop_windows" title="Webメディア運営" text="人事系メディアやWebデザイン関連のメディアなどを複数運営しています。"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service


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
              <div className="service-list__item">
                <figure className="service-list__img-wrapper">
                  <span className="service-list__img material-icons-round">
                    work
                  </span>
                </figure>
                <div className="service-list__body">
                  <div className="service-list__title">人材紹介業</div>
                  <div className="service-list__text">
                    <p>新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。</p>
                  </div>
                </div>
              </div>
              <div className="service-list__item">
                <figure className="service-list__img-wrapper">
                  <span className="service-list__img material-icons-round">
                    location_city
                  </span>
                </figure>
                <div className="service-list__body">
                  <div className="service-list__title">スクール事業</div>
                  <div className="service-list__text">
                    <p>オンラインでWeb制作を学べるスクールを運営しています。</p>
                  </div>
                </div>
              </div>
              <div className="service-list__item">
                <figure className="service-list__img-wrapper">
                  <span className="service-list__img material-icons-round">
                    desktop_windows
                  </span>
                </figure>
                <div className="service-list__body">
                  <div className="service-list__title">Webメディア運営</div>
                  <div className="service-list__text">
                    <p>人事系メディアやWebデザイン関連のメディアなどを複数運営しています。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service

import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <>
      <div className="record-part-portfolio">
        <button>
          <h3>Записаться на сеанс</h3>
        </button>
      </div>
      <div className="portfolio-content">
        <div className="first-master">
          <h1>Олеся Смелая</h1>
          <p>Мастер тату, со стажем работы уже 6 лет</p>
          <div className="gallery">

          </div>
        </div>
        <div className="second-master">
          <h1>Павел Волевой</h1>
          <p>Маг 7 ранга, который наколдует вам классные татушечки</p>
          <p>фото</p>
        </div>

        <div className="third-master">
          <h1>Михаил Коваль</h1>
          <p>Маг в мини версии, наколдует татушечку, но поменьше</p>
          <p>фото</p>
        </div>
        <div className="fourth-master">
          <h1>Анна Ярко</h1>
          <p>
            А эта ведьмочка затыкает всё ваше тело красиво и со вкусом, причем по
            всем санитарным нормам
          </p>
          <p>фото</p>
        </div>
      </div>
      <div className="address">
        <div className="bottom-text">
          <h1>Контакты</h1>
          <span>Телефон: 8 900 344 33 44</span>
          <span>tattoOnTheNeedle@mail.ru</span>
          <span>Неизвестная 44б, Владимир</span>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

import "../styles/Main.css"

function Main() {
  return (
    <>
      <div className="record-part">
        <button>
          <h3>Записаться на сеанс</h3>
        </button>
      </div>
      <div className="content">

      </div>
      <div className="advantages">
        <h1>Преимущества работы с нами</h1>
        <p>
          Наши художники создадут уникальный эскиз, основанный на вашей идее,
          помогут определиться с местом, где татуировка будет выглядеть наиболее
          привлекательно, будут использовать материалы и инструменты,
          зарекомендовавшие себя в тату-индустрии с лучшей стороны; также
          проинструктируют как ухаживать за тату в процессе заживления, чтобы
          добиться идеального результата.
        </p>
      </div>
      <div className="advantages-list">
        <div className="advantage">
          <h2>✔️ Индивидуальный подход</h2>
          <p>
            Мы работаем с каждым клиентом индивидуально, ведь татуировка на теле каждого человека
            смотрится совершенно особым образом. В нашем салоне Вы получите полную консультацию по
            выбору рисунка и места для его нанесения, мы учитываем особенности каждого конкретного человека.
          </p>
        </div>
        <div className="advantage">
          <h2>✔️ Согласование нюансов</h2>
          <p>
            Прежде чем набить тату, наши специалисты подробно консультируют заказчика со всеми
            нюансами выбранной техники. Мы объясняем, какие противопоказания существуют и что нужно
            учитывать, выбирая участок для нанесения тату. Мы также рассказываем о правилах поведения
            после нанесения татуировки и об уходе за ней. Выполнение всех этих рекомендаций напрямую
            влияет на качество Вашей тату.
          </p>
        </div>
        <div className="advantage">
          <h2>✔️ Проверенное оборудование</h2>
          <p>Для нанесения татуировки в наших салонах применяется только проверенное и современное
            оборудование, которое позволяет выполнить процедуру с максимальным качеством.
            Соблюдается стерильность при выполнении тату.
          </p>
        </div>
        <div className="advantage">
          <h2>✔️ Эскиз бесплатно бонусом к тату</h2>
          <p>Мы бесплатно разработаем индивидуальный эскиз тату в любом стиле максимально подходящий именно Вам,
            поскольку в нашей студии эскиз входит в стоимость работ.
          </p>
        </div>
        <div className="advantage">
          <h2>✔️ Мы исправим ваши ошибки прошлого</h2>
          <p>Все мы знаем, что со временем татуировки теряют свой первоначальный вид. Именно поэтому в нашем салоне
            Вам предоставят услугу коррекции, а если ваша татуировка совсем наскучила, мы без проблем решим эту проблему
            при помощь лазерного удаления.
          </p>
        </div>

        <div className="advantage">
          <h2>✔️ Противопоказания</h2>
          <p>Красители, которые выбираются, чтобы сделать татуировку, соответствуют всем гигиеническим требованиям и не
            имеют противопоказаний. Мы ответственно подходим к этому вопросу. В наших салонах используется только качественная и стойкая краска.
            Это очень важно, ведь краска вводится под кожу, то есть в тело.</p>
        </div>
      </div>

      <div class="gallery">
        <img className="img-1" src={require("../images/4.png").default} />
        <img className="img-2" src={require("../images/5.png").default} />
        <img className="img-3" src={require("../images/6.png").default} />
        <img className="img-4" src={require("../images/7.png").default} />
      </div>

      <div className="materials">
        <h1>Наши материалы</h1>
        <h3>Мы используем только качественные материалы проверенных брендов</h3>
        <div className="materials-list">
          <div className="material-item">
            <img src={require("../images/8.png").default} />
            <p>Skinductor</p>
          </div>
          <div className="material-item">
            <img src={require("../images/9.png").default} />
            <p>Verge</p>
          </div>
          <div className="material-item">
            <img src={require("../images/10.png").default} />
            <p>КРАСКА Tattoo Ink</p>
          </div>
          <div className="material-item">
            <img src={require("../images/11.png").default} />
            <p>Proskills</p>
          </div>
          <div className="material-item">
            <img src={require("../images/12.png").default} />
            <p>Mustang Tattoo</p>
          </div>
          <div className="material-item">
            <img src={require("../images/13.png").default} />
            <p>Vlad Blad</p>
          </div>
          <div className="material-item">
            <img src={require("../images/14.png").default} />
            <p>World Famous Ink</p>
          </div>
          <div className="material-item">
            <img src={require("../images/15.png").default}/>
            <p>Tattoo Pharma</p>
          </div>
        </div>
      </div>
      <div className="bottom-info">
        <img src={require("../images/16.jpg").default} alt="boottom info" />
        <div className="bottom-text">
          <h1>Пирсинг</h1>
          <p>Пирсинг — одно из самых модных на сегодняшний день направлений в украшении лица и тела. Очень важно, чтобы пирсинг
            был не только красивым, но и удобным, безопасным. В нашей студии работает мастер с многолетним опытом.
          </p>
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

export default Main;

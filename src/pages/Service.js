import Service_req from "./Service.req";
import "../styles/Service.css"
import { useEffect, useState } from "react";
import { getUser } from "../services/userService";
function Service() {

  const [user, setUser] = useState()
  const [token, setToken] = useState()

  // TODO: think about rewriting components with props
  const mockData = []

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (token) getUser()
      .then(res => setUser(res.data.user))
  }, [token])

  return (
    <>
      <div className="record-part-service">
        <button>
          <h3>Записаться на сеанс</h3>
        </button>
      </div>

      <div className="service-content">
        <div className="service-item">
          <img src={require("../images/19.png").default} />
          <div className="text">
            <h1>Тату</h1>
            <p>5 часов работы - 10 000 рублей</p>
            <p>10 часов работы - 25 000 рублей</p>
            <p>Маленькие татуировки оцениваются индивидуально.</p>
            <span>Сделать тату у нас– это целый спектр услуг:</span>
            <ul>
              <li>разработка индивидуального эскиза</li>
              <li>консультация по стилям и направлениям тату</li>
              <li>подбор оптимального решения, на основе опыта и знаний мастера</li>
              <li>гибкое ценовое решение под Ваши задачи</li>
              <li>комфортная, современная студия</li>
              <li>мастера татуировщики-художники</li>
              <li>изумительная и шикарная татуировка</li>
              <li>консультация по уходу</li>
            </ul>
          </div>
        </div>
        <div className="service-item">
          <img src={require("../images/33.png").default} />
          <div className="text">
            <h1>Пирсинг</h1>
            <p>Прокол - от 500 рублей</p>
            <p>Сережки - от 300 рублей</p>
          </div>
        </div>
        <div className="service-item">
          <img src={require("../images/35.png").default} />
          <div className="text">
            <h1>Коррекция</h1>
            <p>Данная услуга оценивается индивидуально.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={require("../images/36.png").default} />
          <div className="text">
            <h1>Лазерное удаление</h1>
            <p>
              Для более точного определения цены удаления тату, продолжительности
              сеанса и количестве обращений, свяжитесь с нами. Наши администраторы
              ответят на все необходимые вопросы.
            </p>
            <p>В вопросах удаления тату важны несколько составляющих:</p>
            <ul>
              <li>современное оборудование отличного качества</li>
              <li>опыт специалиста</li>
              <li>
                перерыв между сеансами удаления татуировки должен составлять не менее
                45 дней
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* TODO: rewrite admin panel ASAP */}
      <p>Для админа</p>
      {
       user && user.role === "Admin" && <Service_req />
      }

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

export default Service;

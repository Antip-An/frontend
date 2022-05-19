import { useEffect, useState } from "react";
import { getUser } from "../services/userService";
import "../styles/Profile.css"

function Profile() {

  const [user, setUser] = useState()
  const [token, setToken] = useState()

  const mockData = [
    { type: "татуировка", date: "20.09.2021", time: "15:30", price: 25000 },
    { type: "пирсинг", date: "30.10.2021", time: "17:30", price: 500 },
    { type: "коррекция", date: "20.09.2021", time: "13:30", price: 10000 },
    { type: "Лазерное удаление", date: "20.09.2021", time: "14:30", price: 15000 },
  ]

  useEffect(() => {
     setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    if (token) getUser()
    .then(res => setUser(res.data.user))
  }, [token])


  return (
    <>
      {/* TODO: write profile img holder and background img */}
      <div className="profile-pic">
      </div>

      <div className="profile-content">
        {user && <h1>{user.login}</h1>}
        <table>
          <th>№ Услуги</th>
          <th>Вид услуги</th>
          <th>Дата</th>
          <th>Время</th>
          <th>Стоимость</th>
          {
            mockData.map((record, index) => {
              return (
                <tr>
                  <td key={index}>{index + 1}</td>
                  <td key={index}>{record.type}</td>
                  <td key={index}>{record.date}</td>
                  <td key={index}>{record.time}</td>
                  <td key={index}>{record.price}</td>
                </tr>
              )
            })
          }
        </table>
      </div>

      {/* ? why we have contact info here */}
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

export default Profile;

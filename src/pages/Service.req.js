import React, { useState, useEffect } from "react";

function Service_req() {


  const [id, setID] = useState();
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  const [service, setServices] = useState([]);

  
  async function addService(e) {
    e.preventDefault();

    let body = { name, price }

    const service = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    try {
      await fetch("/service", service);
      alert("Сервис добавлен")
    } catch (error) {
      alert("Error")
    }
  }

  async function updateService(e) {
    e.preventDefault()

    let body = { name, price }

    const service = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    try {
      await fetch(`/service/${id}`, service)
      alert("Сервис обновлён")
    } catch (error) {
      alert("Error")
    }
  }

  async function deleteService() {

    const service = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      await fetch(`/service/${id}`, service)
      alert("Сервис удалён")
    } catch (error) {
      alert("Error")
    }
  }

  async function getService(e) {
    e.preventDefault()
    try {
      await fetch(`/service/${id}`)
        .then(response => response.json())
        .then((data) => setServices(data))
    } catch (error) {
      alert("Error")
    }
  }

  useEffect(() => {
    fetch("/services")
      .then(response => response.json())
      .then((data) => setServices(data))
  }, [])


  return (
    <div className="req_container">
      <form onSubmit={addService}>
        <h2>ADD SERVICE</h2>
        <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" required placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        
        <button type="submit">ADD SERVICE</button>
      </form>
      <form onSubmit={updateService}>
        <h2>UPDATE & DELETE SERVICE</h2>
        <span>PLACEHOLDER FOR ID</span>
        <input type="text" required placeholder="ID" onChange={(e) => setID(e.target.value)} />
        <button onClick={deleteService}>DELETE</button>
        <p>INFO FOR UPDATE</p>
        <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" required placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">UPDATE SERVICE</button>
      </form>
    </div>
  )
}

export default Service_req

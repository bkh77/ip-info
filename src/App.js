import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import img from './img/ip-address.png';
import { useTranslation } from "react-i18next";


const access_key = "b6a87ab03777e3d24d3fbdf8b891d341"


export default function App() {

  const [data, setData] = useState(null)
  const [ip, setIp] = useState(null)
  const [loading, setLoadiing] = useState(false)
  const { t, i18n, ready } = useTranslation()


  function getData(e) {
    e.preventDefault();
    setLoadiing(true)
    axios.request(`http://api.ipstack.com/${ip}`, {
      params: { access_key }
    }).then((res) => {
      setData(res.data)
      setLoadiing(false)
      setIp(null)
    }).then(err => {
      console.log(err);
    })
  }

  return <div className='bg-img w-screen h-screen bg-cover' >

    <Navbar />

    <div className='p-4 max-w-md mx-auto my-4  text-teal-400' >
      <form className='flex space-x-4' onSubmit={getData} >
        <input
          required
          onChange={(e) => setIp(e.target.value)}
          type="text"
          className='w-full py-2 px-3 outline-none bg-transparent border-b-2 border-teal-400' placeholder={t("placeholder")} />
        <button
          type='submit'
          className='py-2 px-4 bg-teal-400 rounded-md text-teal-900 hover:bg-teal-300' >
          {t("search")}
        </button>

      </form>
    </div>



    {loading && <div className='text-center text-teal-200' >Loading...</div>}
    {data && <Result data={data} />}
    {!data && <div className='max-w-lg mx-auto p-6' >
      <img className='rounded-lg' src={img} alt="ip address" />
    </div>}

  </div>;
}

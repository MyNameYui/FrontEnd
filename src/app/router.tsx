"use client";
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import useSWR from 'swr';
import { isLogin } from '../../reducer/state';
import { Axios } from '../../lib/fetcher';
import { useRecoilState } from 'recoil';

export default function RouterProtect({ children }: { children: React.ReactNode }) {
  const [isauth, setIsauth] = useRecoilState(isLogin)
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("auth.token")
    Axios.get('/user/@me', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((data) => {
        setData(data.data)
        setIsauth({token: token as string,isLogin:true})
        setLoading(false)
      })
      .catch((err) => {
        redirect("/login")
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  return (
    <>{children}</>
  )
}

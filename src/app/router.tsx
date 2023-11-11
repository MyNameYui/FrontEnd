"use client";
import React, { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { isLogin } from '../../reducer/state';
import { Axios } from '../../lib/fetcher';
import { useRecoilState } from 'recoil';

export default function RouterProtect({ children,isAdmin }: { children: React.ReactNode, isAdmin?: boolean }) {
  const [isauth, setIsauth] = useRecoilState(isLogin)
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const router = useRouter()
  const IsAdmin = isAdmin || false;

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
        if(data.data['isAdmin'] ===  IsAdmin){
          router.push("/profile")
        }
        setLoading(false)
      })
      .catch((err) => {
        router.push("/login")
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  return (
    <>{children}</>
  )
}

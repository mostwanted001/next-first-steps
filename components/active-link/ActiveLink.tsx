'use client'

import Link from '@/node_modules/next/link';
import { usePathname } from '@/node_modules/next/navigation';
import React from 'react'
import style from './ActiveLink.module.css'

interface Props {
    path: string;
    text: string;
}
 

export const ActiveLink = ({ path, text}: Props) => {
  
   const pathName = usePathname();
   
  
  return (
    <Link  
    className={`${ style.link} ${(pathName === path) && style['active-link'] }`} 
    href={path}>
        {text}
        </Link>
  )
}

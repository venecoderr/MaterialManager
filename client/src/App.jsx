import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { QueriesProvider } from './utils/QueriesContext.jsx';

export default function App(){
  return(
    <div className='flex flex-col h-full '>
      <QueriesProvider>
        <Outlet/>
      </QueriesProvider>
    </div>
  )
}
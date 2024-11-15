import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './styles/app.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx'
import MaterialList from './pages/MaterialList.jsx';
import LogIn from './pages/LogIn.jsx';
import Order from './pages/Order.jsx';
import OrderHistory from './pages/History.jsx';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
})

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/list',
        element: <MaterialList/>
      },
      {
        path: '/order',
        element: <Order/>
      },
      {
        path: '/history/:id',
        element: <OrderHistory/>,
      },
      {
        path: '/login',
        element: <LogIn/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router}/>
  </ApolloProvider>
  
)
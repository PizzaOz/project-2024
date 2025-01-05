import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogData = [
  { id: '1', name: 'Misha' },
  { id: '2', name: 'Vlada' },
  { id: '3', name: 'Dima' },
  { id: '4', name: 'Sergey' },
  { id: '5', name: 'Vladimer' },
]

const messageData = [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How is it ? ' },
  { id: '3', message: 'Yo' },
  { id: '4', message: 'Boo' },
  { id: '5', message: 'Privet' },
]

const messageDataPost = [
  {id: 1, message: 'hi ssss', likeCount: 12},
  {id: 2, message: 'hi You', likeCount: 14},
  {id: 3, message: 'hi eee', likeCount: 17},
  {id: 4, message: 'his eee', likeCount: 3},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} messageDataPost={messageDataPost} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

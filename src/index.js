import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore ,combineReducers} from 'redux';
import Movies from './store/reducers/movies';
import auth from './store/reducers/auth';
import { BrowserRouter } from "react-router-dom";


//redux store 
const rootRducer = combineReducers({
  auth:auth,
  movies:Movies
})

const store = createStore(rootRducer);

const strictMode = process.env.NODE_ENV === 'production';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//this is for preventing double execution of useEffect in developement mode
    <Provider store={store}>
      {!strictMode?
    <BrowserRouter>
        <App />
    </BrowserRouter>
      :
    <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </React.StrictMode>
    }

    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

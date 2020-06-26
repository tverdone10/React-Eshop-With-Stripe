import React from 'react';
import ReactDOM from 'react-dom';
import Cart from "./components/cart"

ReactDOM.render(
  <React.StrictMode>
    <Cart  stripeToken="pk_test_51GxgS5FFxFG9mmf6PK2Eash6BxpdphmOfgpQSEhqIWGkH2ScSzvnWmm3Ah5wrHfyzfjuqPYM5n3sizpubL4T745g009AkWM92D"/>
  </React.StrictMode>,
  document.getElementById('root')
);


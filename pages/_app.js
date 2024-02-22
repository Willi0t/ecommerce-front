import CartContextProvider from "@/components/CartContext";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
      --primary-color: #5b49ff;
      --bg-grey: #eee;
      --blue-900: #0d47a1;
      --purple-custom:#5542f6
  }

body{
    background-color: var(--bg-grey);
    padding:0;
    margin: 0;
    font-family: "poppins", sans-serif;
    font-size: 16px;
}`;

function App({ Component, pageProps }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyles />
            <CartContextProvider>
                <Component {...pageProps} />
            </CartContextProvider>
        </HelmetProvider>
    );
}

export default App;

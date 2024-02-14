import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
      --primary-color: #5b49ff;
      --bg-grey: #eeeeee;
      --blue-900: #0d47a1;
      --purple-custom:#5542f6
  }

body{
    padding:0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
}`;

function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
// import "cross-fetch/polyfill";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
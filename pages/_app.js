import "../styles/globals.css";
import StarsBackground from "../components/background/StarsBackground";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <StarsBackground />
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

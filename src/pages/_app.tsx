import '@/styles/globals.css'
import "../components/ContatoModule.css";
import "../components/HeaderModule.css";
import "../components/HomeModule.css";
import "../components/LojaModule.css";
import "../components/OpinioesModule.css";
import "../components/ProcessoModule.css";
import "../components/SobreModule.css";
import "../components/TrabalhosModule.css";

import type { AppProps } from 'next/app'
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Header/>
  <Component {...pageProps} />
  </>
  )
}

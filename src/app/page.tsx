"use client";
import Section_BeneficiosCiudadano from "../../components/components_Home/Components/Section_BeneficiosCiudadano";
import Section_Funcionalidades from "../../components/components_Home/Components/Section_Funcionalidades";
import Section_Funcionalidades2 from "../../components/components_Home/Components/Section_Funcionalidades2";
import Section_Presentacion from "../../components/components_Home/Components/Section_Presentacion";
import Section_Header from "../../components/components_Globales/Components/Section_Header";
import Section_Footer from "../../components/components_Globales/Components/Section_Footer";
import { Albert_Sans } from "next/font/google";
import { useHeader } from "../../components/components_Home/Hooks/useHeader";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});


export default function Home() {
  const { StatusMenu, setStatusMenu } = useHeader();
  return (
    <body
      onTouchMove={() => setStatusMenu(false)}
      className={`${albert_Sans.className}`}
    >
      <Section_Header StatusMenu={StatusMenu} setStatusMenu={setStatusMenu} />
      <main>
        <Section_Presentacion />
        <Section_Funcionalidades />
        <Section_Funcionalidades2 />
        <Section_BeneficiosCiudadano />
      </main>
      <Section_Footer />
    </body>
  );
}

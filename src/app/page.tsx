import Section_BeneficiosCiudadano from "../../components/components_Home/Components/Section_BeneficiosCiudadano";
import Section_Funcionalidades from "../../components/components_Home/Components/Section_Funcionalidades";
import Section_Funcionalidades2 from "../../components/components_Home/Components/Section_Funcionalidades2";
import Section_Presentacion from "../../components/components_Home/Components/Section_Presentacion";

export default function page() {
  return (
    <main>
      <Section_Presentacion/>
      <Section_Funcionalidades/>
      <Section_Funcionalidades2/>
      <Section_BeneficiosCiudadano/>
    </main>
  )
}

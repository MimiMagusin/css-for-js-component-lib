import React from "react";
import ButtonTable from "./ButtonTable";
import { BreadCrumbs, Crumb } from "./components/";

function App() {
  return (
    <>
      <BreadCrumbs>
        <Crumb href="/">Home</Crumb>
        <Crumb href="/living">Living Room</Crumb>
        <Crumb href="/living/couch">Couches</Crumb>
        <Crumb href="/living/couch/sectional">Sectionals</Crumb>
      </BreadCrumbs>

      <ButtonTable />
    </>
  );
}

export default App;

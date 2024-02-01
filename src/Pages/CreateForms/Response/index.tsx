import { TabMenu } from "primereact/tabmenu";
import { Padding } from "../../../Styles/styles";
import { useState } from "react";

const Response = () => {
  const [tabMenu, setTabMenu] = useState(0);

  const items = [
    {
      label: "Resumo",
      icon: "pi pi-chart-line",
      command: () => {
        setTabMenu(0);
      },
    },
    {
      label: "Individual",
      icon: "pi pi-user",
      command: () => {
        setTabMenu(1);
      },
    },
  ];

  return (
    <>
      <Padding padding="8px" />
      <div className="card">
        <h3>Resposta 0</h3>
        <Padding padding="8px" />
        <TabMenu model={items} />
      </div>
      {tabMenu === 0 ? <div /> : tabMenu === 2 ? <div /> : null}
    </>
  );
};

export default Response;

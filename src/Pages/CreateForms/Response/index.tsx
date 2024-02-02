import { TabMenu } from "primereact/tabmenu";
import { Padding } from "../../../Styles/styles";
import { useContext, useState } from "react";
import { CreateOrEditFormContext } from "../../../Context/Form/CreateOrEditForm/context";
import { CreateOrEditFormTypes } from "../../../Types/types";
import ResponseSingle from "./ResponseSingle";
import Resume from "./Resume";

const Response = () => {
  const [tabMenu, setTabMenu] = useState(0);

  const props = useContext(CreateOrEditFormContext) as CreateOrEditFormTypes

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
      <div className="card">
        <h3>Resposta {props.responses.response.length}</h3>
        <Padding padding="8px" />
        <TabMenu model={items} />
      </div>
      {tabMenu === 0 ? <Resume /> : tabMenu === 1 ? <ResponseSingle /> : null}
    </>
  );
};

export default Response;

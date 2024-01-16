import { Button } from "primereact/button";
import { useState } from "react";
import { Card } from "primereact/card";

import Layout from "../../Components/Layout/layout";
import { Container, Padding } from "../../Styles/styles";
import TextInput from "../../Components/TextInput";

const CreateForms = () => {
  const [form, setform] = useState<Array<any>>([]);

  return (
    <Layout>
      <Container>
        {form?.map((item) => {
          return (
            <Padding padding="4px">
              <Card title="Simple Card">
                {item?.type === "text" ? (
                  <div>
                    <p>{item.label}</p>
                    <TextInput disabled />
                  </div>
                ) : null}
              </Card>
            </Padding>
          );
        })}
        <Button
          label="Criar"
          onClick={() =>
            setform([...form, { type: "text", label: "Escreva aqui" }])
          }
        />
      </Container>
    </Layout>
  );
};

export default CreateForms;

import { Button } from "primereact/button";
import { Column, Container, Padding, Row } from "../../../Styles/styles";

import { Form, Formik } from "formik";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CalendarComponent from "../../../Components/Calendar";
import ScheduleProvider, {
    ScheduleContext,
} from "../../../Context/Schedule/context";
import { CreateSchedule, ScheduleTypes } from "../../../Context/Schedule/type";
import { useFetchRequestScheculeOne } from "../../../Services/Schedule/query";
import queryClient from "../../../Services/reactquery";

const FormEditSchedule = () => {
  return (
    <ScheduleProvider>
      <FormEditSchedulePage />
    </ScheduleProvider>
  );
};

const FormEditSchedulePage = () => {
  const { id } = useParams();


  useEffect(() => {
    queryClient.removeQueries("useRequestsScheculeOne")

  }, [])


  const { data: schedule } = useFetchRequestScheculeOne(parseInt(id!));

 
  const initialValueUpdate: CreateSchedule = {
    start_date: new Date(schedule?.start_date),
    end_date: new Date(schedule?.end_date),
  };


  const props = useContext(ScheduleContext) as ScheduleTypes;

  return (
    <Container>
      <div className="card">
        <Padding>
          <h3>{schedule ? "Editar" : "Criar"} cronograma</h3>
          <Padding padding="16px" />
          {schedule ? (
            <Formik
              initialValues={initialValueUpdate}
              onSubmit={(values) => {
                props.UpdateSchedule(values, parseInt(id!));
              }}
            >
              {({ values, handleChange }) => {
                return (
                  <Form>
                    <div className="grid">
                      <Column className="col-12 md:col-6">
                        <label>Data de inicio</label>
                        <CalendarComponent
                          onChange={handleChange}
                          dateFormat="dd/mm/yy"
                          placeholder="Data de inicio"
                          value={values.start_date}
                          name="start_date"
                        />
                      </Column>
                      <Column className="col-12 md:col-6">
                        <label>Data final</label>
                        <CalendarComponent
                          onChange={handleChange}
                          dateFormat="dd/mm/yy"
                          placeholder="Data final"
                          value={values.end_date}
                          name="end_date"
                        />
                      </Column>
                    </div>
                    {/* <Padding />
                  <div className="col-12 md:col-6">
                    <Column>
                      <label>Ano de referencia</label>
                      <Calendar
                        view="year"
                        dateFormat="yy"
                        onChange={handleChange}
                        name="year"
                      />
                    </Column>
                  </div> */}
                    <Padding padding="16px" />
                    <Row id="end">
                      <Button label={schedule ? "Editar" : "Criar"} />
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          ) :
            null}
        </Padding>
      </div>
    </Container>
  );
};

export default FormEditSchedule;

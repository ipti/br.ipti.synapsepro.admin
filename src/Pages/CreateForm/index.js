// FormComponent.js
import React, { useEffect } from 'react';
import { FormEditor } from '@bpmn-io/form-js-editor';
import '@bpmn-io/form-js/dist/assets/form-js.css';
import '@bpmn-io/form-js/dist/assets/form-js-editor.css';
import '@bpmn-io/form-js/dist/assets/form-js-playground.css';


const FormComponent = () => {


    useEffect(() => {
        const initForm = async () => {
            const formEditor = new FormEditor({
                container: document.querySelector('#form-editor')
            });
            const schemas = {
                components: [

                ],
                type: "default"
            }

            await formEditor.importSchema(schemas);


            try {
                const schema = formEditor.saveSchema(schemas);

                console.log('exported schema', schema);
            } catch (err) {
                console.error('failed to import form', err);
            }
        };

        initForm();
    }, []);

    return (
        <div id="form-editor">

        </div>
    );
};

export default FormComponent;

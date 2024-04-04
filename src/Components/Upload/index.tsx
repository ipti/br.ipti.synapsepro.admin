import { Button } from 'primereact/button';
import { FileUpload, FileUploadHeaderTemplateOptions, ItemTemplateOptions } from 'primereact/fileupload';
import { useState } from 'react';

export default function Upload() {

    const [file, setFile] = useState<Array<any>>([])

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, cancelButton } = options;

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                <Button rounded outlined icon="pi pi-save" disabled={file.length === 0} onClick={() => console.log(file)} />
                {cancelButton}

            </div>
        );
    };

    const onTemplateSelect = (e: any) => {
        let files = e.files;
        console.log(files)
        setFile(files)
    };

    const chooseOptions = { icon: 'pi pi-fw pi-plus ', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined', };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined', Upload: (e: any) => { console.log(e) } };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    const onTemplateRemove = (files: File, callback: Function) => {
        console.log(files)
        setFile(file.filter(props => props.name !== files.name))
        callback();
    };


    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file = inFile as any;
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file?.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const onTemplateClear = () => {
        setFile([])
    };

    return (
        <FileUpload chooseOptions={chooseOptions} onClear={onTemplateClear} itemTemplate={itemTemplate} uploadOptions={uploadOptions} cancelOptions={cancelOptions} name="demo[]" headerTemplate={headerTemplate} multiple accept="/*" onSelect={onTemplateSelect} emptyTemplate={<p className="m-0">Arraste e solte os arquivos aqui.</p>} />
    )
}
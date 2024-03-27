import Icon from "../Icon";

const Empty = ({title}: {title: string}) => {
    return(
        <div className="card w- md:w-full">
            <Icon icon="pi pi-warning" />
            Sem {title}
        </div>
    )
}

export default Empty;
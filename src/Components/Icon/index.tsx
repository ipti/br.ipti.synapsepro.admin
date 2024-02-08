

const Icon = ({icon, size}: { icon: string, size: string}) => {
    return(
        <i className={icon} style={{ fontSize: size || '1.5rem' }}  />
    )
}

export default Icon;
const EmployeeCard = ({name, id}: { name: string, id: number }) => {

    return (
        <>
            <h2>{name}</h2>
            <h1>{id}</h1>
        </>
    )
}


export default EmployeeCard;
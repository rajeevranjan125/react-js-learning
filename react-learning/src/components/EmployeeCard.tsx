const EmployeeCard = ({ name, id, class: className}: { name: string, id: number, class: string }) => {

    return (
        <>
            <h1>{className}</h1>
            <h2>{name}</h2>
            <h3>{id}</h3>

        </>
    )
}


export default EmployeeCard;
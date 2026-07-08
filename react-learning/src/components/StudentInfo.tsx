const StudentInfo = ({props}
) => {
    const{id,name,address} = props;
    return (

        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{address}</h1>
        </div>
    );

}

export default StudentInfo;
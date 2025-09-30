function StudentItem({student}) {
    return (
        <tr className="StudentItem">
            <td>{student.name}</td>
            <td>{student.math}</td>
            <td>{student.eng}</td>
            <td>{student.sci}</td>
            <td>{student.avg}</td>
            <td>
                <button>삭제</button>
            </td>
        </tr>
    );
}

export default StudentItem;
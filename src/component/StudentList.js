import StudentItem from "./StudentItem";

function StudentList({students}) {
    return (
        <table className="StudentList">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>수학</th>
                    <th>영어</th>
                    <th>과학</th>
                    <th>평균</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>                
                {students.map((student) =>(
                    <StudentItem key={student.id} student={student} />
                ))}                         
            </tbody>
        </table>
    );
}

export default StudentList;
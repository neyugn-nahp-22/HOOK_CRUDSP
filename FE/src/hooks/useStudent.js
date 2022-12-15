import { useDispatch, useSelector } from "react-redux"
import { StudentAction } from "../action/studentAction"

export const UseStudent = () => {
    const dispatch = useDispatch();
    const listStudentss = useSelector((state) => state.student.listStudent)
    const handleGetStudents = () => dispatch(StudentAction.getRequest())
    const handleAddStudents = (data) => dispatch(StudentAction.addRequest(data))
    return {
        listStudentss,
        handleGetStudents,
        handleAddStudents
    }
}
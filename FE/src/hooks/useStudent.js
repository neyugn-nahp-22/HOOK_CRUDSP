import { useDispatch, useSelector } from "react-redux";
import { StudentAction } from "../action/studentAction";

export const UseStudent = () => {
  const dispatch = useDispatch();
  const listStudentss = useSelector((state) => state.student.listStudent);
  const handleGetStudents = () => dispatch(StudentAction.getRequest());
  const handleAddStudents = (data) => dispatch(StudentAction.addRequest(data));
  const handleDelStudent = (data) => dispatch(StudentAction.delRequest(data));
  const handlePutStudent = (data) => dispatch(StudentAction.putRequest(data));
  const handleImportExcel = (data) => dispatch(StudentAction.importExcelRequest(data));
  return {
    listStudentss,
    handleGetStudents,
    handleAddStudents,
    handleDelStudent,
    handlePutStudent,
    handleImportExcel
  };
};

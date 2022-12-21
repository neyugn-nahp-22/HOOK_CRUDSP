module.exports = function (app) {
  const StudentList = require("../controller/index");
  app
    .route("/student")
    .get(StudentList.getStudent)
    .post(StudentList.addStudent);
  app
    .route("/student/:id")
    .delete(StudentList.delStudent)
    .put(StudentList.putStudent);
  app.route("/student/excel").post(StudentList.addExcel);
};

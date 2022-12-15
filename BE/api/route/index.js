module.exports = function (app) {
    const StudentList = require('../controller/index')
    app.route('/student')
        .get(StudentList.getStudent)
        .post(StudentList.addStudent)
}

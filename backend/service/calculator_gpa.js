exports.getDataGpa = (query) => {
    console.log(query)
    const totalUnits = query.map((result) => parseInt(result.unit)).reduce((prev, next) => prev + next);
    const totalGradeVal = query.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
    let gpa = (totalGradeVal / totalUnits).toFixed(2);
    return gpa
};
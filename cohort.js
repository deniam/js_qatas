const cohort = {
    name: 'June2023',
    id: 999,
    studentNames: ['Hazel', 'Denis'],
    detailsOfCohort: () => {
        return cohort.id + ": "+ cohort.name + ", " + cohort.studentNames.length + ", students in this cohort: " + cohort.studentNames
    }
};

console.log(cohort.detailsOfCohort());

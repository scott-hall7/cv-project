import uniqid from "uniqid";

const exampleForm = {
    general: {
        firstName: "John",
        lastName: "Example",
        phoneNumber: "(615) 123-456",
        email: "johnexample@gmail.com",
        city: "Exampleville",
        state: "TN",
    },
    experience: [
        {id: uniqid(), position: "Financial Analyst", company: "Big Corporation Inc.", city: "Example City", state: "TN", startDate: "Dec. 2018", endDate: "Present", jobTask1: "Task 1", jobTask2: "Task 2", jobTask3: "Task 3", jobTask4: "Task 4", jobTask5: "Task 5"},
        {id: uniqid(), position: "Financial Analyst", company: "Big Corporation Inc.", city: "Example City", state: "TN", startDate: "Dec. 2018", endDate: "Present", jobTask1: "Task 1", jobTask2: "Task 2", jobTask3: "Task 3", jobTask4: "Task 4", jobTask5: "Task 5"},
        {id: uniqid(), position: "Financial Analyst", company: "Big Corporation Inc.", city: "Example City", state: "TN", startDate: "Dec. 2018", endDate: "Present", jobTask1: "Task 1", jobTask2: "Task 2", jobTask3: "Task 3", jobTask4: "Task 4", jobTask5: "Task 5"},
        {id: uniqid(), position: "Financial Analyst", company: "Big Corporation Inc.", city: "Example City", state: "TN", startDate: "Dec. 2018", endDate: "Present", jobTask1: "Task 1", jobTask2: "Task 2", jobTask3: "Task 3", jobTask4: "Task 4", jobTask5: "Task 5"},
    ],
    education: {
        university: "University of Example",
        degree: "Computer Science",
        graduationDate: "Dec. 2018",
        extraCurricular1: "Computer Science Club, Golf Captain",
        extraCurricular2: "Graduated Cum Laude",
    },
    skills: "React, Javascript, CSS, HTML, Excel, Financial Analysis, Communication, Leadership, SAP, Accounting, Github",
};

export default exampleForm;
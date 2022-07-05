import pos from './images/pos.png';
import mlp from './images/mlp.gif';
import checkers from './images/checkers.gif';
import city from './images/city.gif';
import knn from './images/knn.gif';

const data = {
    links: {
        github:"https://github.com/KANDEBRAHMA",
        portfolio:"https://kandebrahma.github.io/harishanker.github.io/",
        linkedin:"https://www.linkedin.com/in/hkande/"
    },
    education : [
        {
            "college" : "Indiana University - Bloomington",
            "graduation" : "May 2023",
            "major" : "Master's in Computer Science",
            "gpa": 3.7
        },
        {
            "college" : "Gitam University - Hyderabad",
            "graduation" : "Apr 2019",
            "major" : "Bachelor's in Computer Science",
            "gpa": 3.94
        }
        ],
    skills :{
        "Programming Languages" : ["C","C++","Java","Python"],
        "Web Development" : ["HTML","CSS","JavaScript","ReactJS"],
        "Tools" : ["Oracle Application Forms and Reports", "Service Now","Docker","Jenkins"],
        "Database and Version Control" : ["Oracle Database Express 12c","MySQL","SQL","PostgreSQL","Github","Gitlab"],
        "Certifications" : ["Big Data Training Completion certificate from IBM"]
        },
    navList : {
        home:"Home",
        education : "Education",
        workexp: "Work Experience",
        projects: "Projects",
        contact: "Contact"
        },
    work : [
        {
            company : "Wipro Technologies",
            position: "Software Engineer",
            duration : "Apr 2019 - May 2021",
            workcomments : [
            "Developed custom Triggers, Procedures, and Packages using PLSQL and created databases using SQL.",
            "Worked on different Production issues for customers and resolved them based on their requirements.",
            "Hands-on experience in developing end to end process of Order Management and Supply Chain related activities for the client using PLSQL Procedures, Packages and Front-end Screens using Oracle Forms.",
            "Worked on migrating conventional version storage to version control systems such as GitLab, and built pipeline to deploy new releases to Jenkins development by integrating GitLab with Jenkins for customers.",
            "Analyzed client business processes to propose optimally software applications for unique requirements."
            ]
        },
        {
            company : "Kapil IT Solutions",
            position : "Software Engineer Intern",
            duration : "May 2018 - Jul 2018",
            workcomments : [
            "Applied Java, HTML, JSP, and MYSQL as an intern to assist in the building of Web Portals for several small-scale local businesses so that they can receive orders online and customers can track their orders."
            ]
        }
        ],
    projects : [
        {
            img : pos,
            title : "Parts-of-Speech Tagging",
            description : "Implemented Parts of speech tagging for sentences using Naive-Baye's Classifier, HMM-Viterbi and MCMC using Gibb's Sampling.",
            githubUrl : "https://github.com/KANDEBRAHMA/POS-Tagging"
        },
        {
            img : knn,
            title : "K-Nearest-Neighbor-Classification-ML",
            description : "Implemented K-Nearest-Neighbor Classifier in Python.",
            githubUrl : "https://github.com/KANDEBRAHMA/K-Nearest-Neighbor-Classification-ML"
        },
        {
            img : checkers,
            title : "Checkers-MinMax-AI",
            description : "Implemented Checkers game using Min-Max algorithm with slight modifications in game rules.",
            githubUrl : "https://github.com/KANDEBRAHMA/Checkers-MinMax-AI"
        },
        {
            img : mlp,
            title : "Multilayer-Perceptron-Classification-ML",
            description : "Implemented MLP using neural networks in Python",
            githubUrl : "https://github.com/KANDEBRAHMA/Multilayer-Perceptron-Classification-ML"
        },
        {
            img : city,
            title : "City-Navigation-AI",
            description : "Implemented a Google Maps prototype that provides the shortest route in terms of distance, the fastest route, the route with the fewest turns, and a scenic route that avoids roads when provided a source and destination. The algorithms used were DFS, BFS, A*, and Iterative Depth First Search.",
            githubUrl : "https://github.com/KANDEBRAHMA/City-Navigation-AI"
        }
        ],
    contactDetails : {
        address : "418 S Grant Street, Apt 11, Bloomington, Indiana, 47401.",
        mobile : "+1 (812)778-6920",
        email : "harishanker.kande@gmail.com"
        }
}

export default data;
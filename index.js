var univer_names = [
    {
        "id": "6",
        "name": "CALIFORNIA INSTITUTE OF TECHNOLOG",
        "ielts": "7.0",
        "toefl": "110",
        "sat": "1530",
        "gpa": "3.5"
    },
    {
        "id": "7",
        "name": "IMPERIAL COLLEGE LONDON",
        "ielts": "6.5",
        "toefl": "100",
        "sat": "0",
        "gpa": "3.6"
    },
    {
        "id": "8",
        "name": "ETH Zurich",
        "ielts": "7.0",
        "toefl": "100",
        "sat": "0",
        "gpa": "0"
    },
    {
        "id": "9",
        "name": "UCL (University College London)",
        "ielts": "6.5",
        "toefl": "92",
        "sat": "1490",
        "gpa": "0"
    },
    {
        "id": "10",
        "name": "University of Chicago",
        "ielts": "7.0",
        "toefl": "92",
        "sat": "1500",
        "gpa": "4.5"
    },
    {
        "id": "11",
        "name": "National University of Singapore",
        "ielts": "6.5",
        "toefl": "92",
        "sat": "1250",
        "gpa": "0"
    },
    {
        "id": "12",
        "name": "Nanyang Technological University, Singapore (NTU)",
        "ielts": "6.0",
        "toefl": "90",
        "sat": "1250",
        "gpa": "4.5"
    },
    {
        "id": "13",
        "name": "University of Pennsylvania",
        "ielts": "6.5",
        "toefl": "100",
        "sat": "1460",
        "gpa": "4.8"
    },
    {
        "id": "14",
        "name": "EPFL",
        "ielts": "5.5",
        "toefl": "72",
        "sat": "0",
        "gpa": "4.5"
    },
    {
        "id": "15",
        "name": "Yale University",
        "ielts": "7.0",
        "toefl": "100",
        "sat": "1460",
        "gpa": "4.2"
    },
    {
        "id": "16",
        "name": "The University of Edinburgh",
        "ielts": "6.5",
        "toefl": "100",
        "sat": "1290",
        "gpa": "4.1"
    },
    {
        "id": "17",
        "name": "Tsinghua University",
        "ielts": "6.5",
        "toefl": "80",
        "sat": "0",
        "gpa": "4.5"
    },
    {
        "id": "18",
        "name": "Peking University",
        "ielts": "6.5",
        "toefl": "92",
        "sat": "1400",
        "gpa": "0"
    },
    {
        "id": "19",
        "name": "Columbia University",
        "ielts": "7.5",
        "toefl": "105",
        "sat": "1460",
        "gpa": "4.12"
    },
    {
        "id": "20",
        "name": "Princeton University",
        "ielts": "7",
        "toefl": "100",
        "sat": "1450",
        "gpa": "3.9"
    },
    {
        "id": "21",
        "name": "Cornell University",
        "ielts": "7.5",
        "toefl": "100",
        "sat": "1400",
        "gpa": "4.07"
    },
    {
        "id": "22",
        "name": "The University of Hong Kong",
        "ielts": "6.0",
        "toefl": "80",
        "sat": "1400",
        "gpa": "4.5"
    },
    {
        "id": "23",
        "name": "The University of Tokyo",
        "ielts": "6.5",
        "toefl": "90",
        "sat": "1500",
        "gpa": "4.5"
    },
    {
        "id": "24",
        "name": "University of Michigan-Ann Arbor",
        "ielts": "6.5",
        "toefl": "80",
        "sat": "1340",
        "gpa": "4.85"
    },
    {
        "id": "25",
        "name": "Johns Hopkins University",
        "ielts": "7.0",
        "toefl": "100",
        "sat": "1470",
        "gpa": "4.9"
    }
];
var description = [
    "We tend to take our sense of touch for granted in everyday settings, but it is vital for our ability to interact with our surroundings.",
    "Leading Imperial academics from across the College have been recognised in the Queen’s Jubilee Birthday Honours List.",
    "This is your one stop shop for events and activities from across your university – from talks and exhibitions to networking.",
    "Free and open discourse is the foundation of a transformative education and world-changing research. We are committed to the pursuit of this goal.",
    "We are a group of students who are passionate about the future of education and the impact it will have on our world.",
    "Learn how our transformative education and multidisciplinary research have nurtured effective global leaders and innovators.",
    "It’s a springtime tradition, a long-standing rite of passage for architecture students at EPFL’s Design Studio on the Conception campus.",
];


function show_un() {
    var ielts = document.getElementById("ielts").value;
    var toefl = document.getElementById("toefl").value;
    var sat = document.getElementById("sat").value;
    document.getElementById("universities").innerHTML = '';
    univer_names.forEach(function (un) {
        if (((ielts == '' || un.ielts <= ielts) && (toefl == '' || un.toefl <= toefl)) && (sat == '' || un.sat <= sat)) {
            if (un.gpa == 0) {un.gpa = "N/A";}
            if(un.sat == 0) {un.sat = "N/A";}
            if (un.toefl == 0) {un.toefl = "N/A";}
            if (un.ielts == 0) {un.ielts = "N/A";}
            let random_num = Math.floor(Math.random() * (description.length - 1));
            var description_text = description[random_num];
            document.getElementById("universities").innerHTML += '<section class="u__list"><div class="container"><div class="list__item"><div class="sec__list"><div class="left__list"><img src="images/top_'+un.id+'.svg" alt="" /></div><div class="right__list"><h1>#'+un.id+' '+un.name+'</h1> <p>'+description_text+'</p><div class="scores"><p>IELTS: '+un.ielts+'</p><p>SAT: '+un.sat+'</p><p>GPA: '+un.gpa+'</p></div></div></div></div></div></section>';
        }

    });
}




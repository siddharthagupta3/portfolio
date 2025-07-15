// Header Section :)
// Selecting elements
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

// Open menu
menu.addEventListener("click", function () {
    navLinks.classList.add("show");
    body.classList.add("no-scroll"); // Disable scrolling
});

// Close menu
close.addEventListener("click", function () {
    navLinks.classList.remove("show");
    body.classList.remove("no-scroll"); // Enable scrolling

});

// Slider Sections :)
let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        const slideContainer = document.querySelector(".slide-container");
        const typingTexts = [
            "SDE, software development engieer",
            "full stack developer",
            "Passionate software engineer"
        ];
        let typingIndex = 0;
        let charIndex = 0;
        let typingSpeed = 100;

        function showSlide(index) {
            currentIndex = index;
            slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentIndex].classList.add("active");
            startTypingAnimation();
        }

        function startTypingAnimation() {
            let typingElement = slides[currentIndex].querySelector(".typing-text");
            typingElement.innerHTML = "";

            function typeCharacter() {
                if (charIndex < typingTexts[currentIndex].length) {
                    typingElement.innerHTML += typingTexts[currentIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeCharacter, typingSpeed);
                } else {
                    charIndex = 0;
                }
            }
            typeCharacter();
        }

        function autoSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function changeSlide(index) {
            clearInterval(autoSlideInterval);
            showSlide(index);
            autoSlideInterval = setInterval(autoSlide, 5000);
        }

        let autoSlideInterval = setInterval(autoSlide, 5000);
        startTypingAnimation();


        // Skills Sections :)
const Skills = [
    {
        name: "full stack development",
        progress: 70,
        discription: " full stack handles both front-end and back-end, covering UI , server database etc."
    },
    {
        name: "databases",
        progress: 80,
        discription: "bulit scalable databases with MangoDB flexibility and SQL server structured queries"
    },
    {
        name: "cloud",
        progress: 70,
        discription: "Basic familiarity with AWS"
    },
    {
        name: "Version control",
        progress: 90,
        discription: "Git , Github"
    },
    {
        name: "deployment",
        progress: 80,
        discription: "deployed apps using DOCKER , streamlined with CI/CD tools for automation."
    },
    {
        name: "testing",
        progress: 90,
        discription: " tested APIs with POSTMAN and python scripts using PYTEST for auotmation"
    },
    {
        name: "SDE ( software development engineer)",
        progress: 70,
        discription: " skilled SDE proficient in MangoDB,SQL,Server,Docker,CI/CD,Poastman for scalable sloution"
    },
];

const skillsContainer = document.querySelector('.wrapper-container')
Skills.forEach(mySkills =>{

    const skillsDiv = document.createElement('div');
    skillsDiv.classList.add('skills-wrapper');

    const skillsName = document.createElement('div');
    skillsName.classList.add('skills-name');
    skillsName.innerText = mySkills.name;
    
    const skillsDiscription = document.createElement('div');
    skillsDiscription.classList.add('skills-discription');
    skillsDiscription.innerText = mySkills.discription;

    const progressDivCon = document.createElement('div');
    progressDivCon.classList.add('progress-container');

   const progressDiv = document.createElement('div');
   progressDiv.classList.add('progressBar');
   progressDiv.style.width = `${mySkills.progress}`;
   progressDiv.innerHTML = mySkills.progress;

   skillsContainer.appendChild(skillsDiv)
   skillsDiv.appendChild(skillsName);
   skillsDiv.appendChild(skillsDiscription);
   skillsDiv.appendChild(progressDivCon);
   progressDivCon.appendChild(progressDiv);
   // Animate progress bar
   let currentProgress = 0;
   let realProgress = mySkills.progress;
   let interval = setInterval(() => {
       if (currentProgress >= realProgress) {
           clearInterval(interval); // Stop when reaching the target
       } else {
           currentProgress++; // Increase progress
           progressDiv.style.width = `${currentProgress}%`;
           progressDiv.innerText = `${currentProgress}%`; // Update text inside bar
       }
   }, 100); // Adjust speed of the animation
})

// Projects Sections :)

const USER_NAME = 'siddharthagupta3';
const url = `https://api.github.com/users/${USER_NAME}/repos`;

const fetchData = async()=>{
    try {
        let reponse = await fetch(url);
        let data = await reponse.json();
        // console.log(data);
        
        data.map((projectsData =>{
        const projectsConatiner = document.querySelector('.projects-wrapper-container');
        
        const projectsDivCon = document.createElement('div');
        projectsDivCon.classList.add('projects-wrapper');


        const projectNames = document.createElement('div');
        projectNames.classList.add('project-name')
        projectNames.innerHTML = projectsData.name;

        const projectDiscriptions = document.createElement('div');
        projectDiscriptions.classList.add('project-discription')
        projectDiscriptions.innerHTML = projectsData.description;

        const projectLink = document.createElement('a');
        projectLink.classList.add('project-link');
        projectLink.href = projectsData.html_url;
        projectLink.innerText = "View on Github";
        projectLink.setAttribute("target", "_blank");
        const githubLogo = document.createElement('img');
        githubLogo.src = './public/icons8-github-logo-94.png'
        githubLogo.style.height = '5vh';
        githubLogo.style.padding = '5px'
        projectLink.append(githubLogo);

   projectsConatiner.appendChild(projectsDivCon);
   projectsDivCon.appendChild(projectNames)
   projectsDivCon.appendChild(projectDiscriptions)
   projectsDivCon.appendChild(projectLink)

}))

    } catch (error) {
        console.log(error.message);
        
    }
}

fetchData();

document.addEventListener("DOMContentLoaded", function () {
    const skillsWwrapper = document.w+this.querySelector('.skills-wrapper');
    skillsWwrapper.style.opacity = "0";
    skillsWwrapper.style.transform = "translateY(50px)";
    window.addEventListener("scroll", function () {
        if (window.scrollY > skillsWwrapper.offsetTop - window.innerHeight / 1.2) {
            skillsWwrapper.style.opacity = "1";
            skillsWwrapper.style.transform = "translateY(0)";
            skillsWwrapper.style.transition = "all 0.6s ease-in-out";
        }
    })

})


// About Section :)
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-container");
    // const projectsContainer = document.querySelector('.projects-wrapper');
    aboutSection.style.opacity = "0";
    aboutSection.style.transform = "translateY(50px)";

    // projectsContainer.style.opacity = "0";
    // projectsContainer.style.transform = "translateY(50px)";

    

    window.addEventListener("scroll", function () {
        if (window.scrollY > aboutSection.offsetTop - window.innerHeight / 1.2) {
            aboutSection.style.opacity = "1";
            aboutSection.style.transform = "translateY(0)";
            aboutSection.style.transition = "all 0.6s ease-in-out";
        }
        
        
    });
});
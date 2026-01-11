//-------------------------expirience-------------------------------

//------------------------------------------------------------------------

// Experience data for modals
const experienceData = {
    1: {
        title: "Embedded Electronics Engineering Intern",
        company: "ALTEN / Automotive & Advanced Systems",
        period: "April 2025 - Present",
        location: "Tetouan, Morocco",
        image: [
            "images/experience/IMG_1340 - Copy.jpeg",
            "https://i.vimeocdn.com/video/1510985502-457bb4107fb112e6ff57b8d3b0086408d892991569ee6fa9ffecc37f7a30f578-d?f=webp"
        ],
        description: "Industrial automation and robotic system integration",
        fullDescription: "During my placement at ALTEN, I participated in the development and validation of electronic and embedded systems for next-generation automotive projects. Initially joining the BCI PMO team, I contributed to project management and process optimization for the STELLANTIS program, supporting supplier selection, product development, and industrialization. I produced dashboards and KPIs, followed modification management, tracked PIV events (physical and digital), and handled logistics for development kits.<br />I received in-house training on change management (GDM), APQP, validation plans (PIV), V-cycle, CATIA V6, and PLM tools. <br />Later, I joined an advanced driver assistance system (ADAS) team for a German client (Stellantis), focusing on emergency braking systems (EBS) and blind spot detection (BSD). My key contributions included the analysis and interpretation of CAN bus communications for electronic safety systems. <br />This diverse experience deepened my knowledge of embedded electronics in the automotive sector and enhanced my skills in digital system validation and cross-functional collaboration.", 
       responsibilities: [
            "Monitored robustness and progress of electronic modules through all project phases",
            "Analyzed supplier offers and supported product industrialization",
            "Animated meetings, synthesized ratings/decisions with international teams",
            "Created dashboards, tracked KPIs, managed retro-planning",
            "Participated in analysis of CAN bus data for EBS and BSD modules",
            "Contributed to quality/documentation reviews"
        ],
        technologies: ["Advanced Driver-Assistance Systems (ADAS)", "Gestion des essais", "Testing", "Control Systems", "CAN Bus Analysis", "Project Management", "MATLAB & Simulink", "CANalyzer"],
        achievements: [
            "Facilitated cross-site communication, improving tracking efficiency",
            "Enhanced the validation process with effective dashboard automation",
            "Strengthened system reliability through data-driven analysis of safety modules "
        ]
    },
    2: {
    title: "Design and Implementation of a Voltage-Current Curve Tracer",
    company: "Abdelmalek Essaâdi University - FST of Tangier",
    period: "April 2024 - June 2024",
    location: "Tangier, Morocco",
    image: [
        "images/PFE/PFE2.jpg",
        "images/PFE/PFE1.jpg", 
        "images/PFE/PFE3.jpg",
        "images/PFE/PFE5.jpg"
    ],
    description: "Development of a fault detection system through I-V curve analysis",
    fullDescription: "As part of this final year degree project, I designed and built a voltage-current characteristic tracer for fault detection in electronic components and circuit boards. The system is based on an Arduino Nano microcontroller, an AD9833 signal generator, and a TFT screen to display the characteristic curves of the tested components. This project allowed me to deepen my skills in analog electronics, circuit design, and embedded programming.",
    responsibilities: [
        "Designed and simulated electronic circuits (amplification, measurement, offset)",
        "Developed Arduino firmware for peripheral management and display",
        "Performed hardware integration of components (TFT screen, AD9833 generator, relay)",
        "Conducted experimental system validation via tests on various components",
        "Wrote the technical report and presented the project to a university jury"
    ],
    technologies: [
        "Arduino",
        "Analog Electronics", 
        "SPI",
        "KiCad",
        "C++",
        "Op-Amps",
        "AD9833",
        "TFT Display"
    ],
    achievements: [
        "Delivered a functional prototype with real-time I-V curve display",
        "Effectively detected faults in components such as diodes and capacitors",
        "Optimized the offset circuit for precise microcontroller measurement",
        "Successfully validated the system by comparing healthy and faulty components"
    ],
    links: {
        github: "https://github.com/yourusername/curve-tracer-project",
        report: "documents/PFE_Report.pdf"
    }
}
};



// Experience Modal Functionality
const experienceModal = document.getElementById('experienceModal');
const experienceCloseModal = experienceModal.querySelector('.close-modal');

// Open experience modal when clicking "View Details" or experience card
document.querySelectorAll('.experience-card, .view-experience-details').forEach(element => {
    element.addEventListener('click', (e) => {
        // Don't open modal if clicking on links
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        const experienceId = element.getAttribute('data-experience');
        openExperienceModal(experienceId);
    });
});

// Close experience modal
experienceCloseModal.addEventListener('click', closeExperienceModal);

experienceModal.addEventListener('click', (e) => {
    if (e.target === experienceModal) {
        closeExperienceModal();
    }
});

// Close experience modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && experienceModal.style.display === 'block') {
        closeExperienceModal();
    }
});

function openExperienceModal(experienceId) {
    const experience = experienceData[experienceId];
    if (!experience) return;

    // Generate carousel HTML
    const carouselHTML = experience.image.length > 0 ? `
        <div class="modal-carousel" data-modal-carousel="${experienceId}">
            ${experience.image.map((img, index) => `
                <div class="modal-carousel-slide ${index === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${experience.title} - Image ${index + 1}" loading="lazy">
                </div>
            `).join('')}
    
            <button class="modal-carousel-nav modal-carousel-prev">‹</button>
            <button class="modal-carousel-nav modal-carousel-next">›</button>
            
            <div class="modal-carousel-counter">
                <span class="modal-current-slide">1</span>/<span class="modal-total-slides">${experience.image.length}</span>
            </div>
            
            <div class="modal-carousel-controls">
                ${experience.image.map((_, index) => `
                    <button class="modal-carousel-dot ${index === 0 ? 'active' : ''}" data-modal-slide="${index}"></button>
                `).join('')}
            </div>
        </div>
    ` : '';

    const modalBody = experienceModal.querySelector('.modal-body');
    modalBody.innerHTML = `
        ${carouselHTML}
        <h2 class="modal-title">${experience.title}</h2>
        <div class="modal-experience-info">
            <div class="modal-company">
                <i class="fas fa-building"></i>
                <span>${experience.company}</span>
            </div>
            <div class="modal-period">
                <i class="fas fa-calendar-alt"></i>
                <span>${experience.period}</span>
            </div>
            <div class="modal-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${experience.location}</span>
            </div>
        </div>
        <p class="modal-description">${experience.fullDescription}</p>
        
        <div class="modal-features">
            <h4>Key Responsibilities</h4>
            <ul>
                ${experience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-features">
            <h4>Notable Achievements</h4>
            <ul>
                ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-tech">
            <h4>Technologies & Skills</h4>
        </div>
        <div class="modal-tech">           
          ${experience.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
    `;

    experienceModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize modal carousel if there are images
    if (experience.image.length > 0) {
        initializeExperienceModalCarousel(experienceId);
    }
}

function closeExperienceModal() {
    experienceModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Experience Carousel Functionality
function initializeExperienceCarousels() {
    const carousels = document.querySelectorAll('.experience-carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.experience-carousel-slide');
        const dots = carousel.querySelectorAll('.experience-carousel-dot');
        const prevBtn = carousel.querySelector('.experience-carousel-prev');
        const nextBtn = carousel.querySelector('.experience-carousel-next');
        const currentSlide = carousel.querySelector('.experience-current-slide');
        const totalSlides = carousel.querySelector('.experience-total-slides');
        
        let currentIndex = 0;
        totalSlides.textContent = slides.length;
        
        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            // Update counter
            currentSlide.textContent = index + 1;
            currentIndex = index;
        }
        
        // Next slide
        function nextSlide() {
            let newIndex = currentIndex + 1;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            showSlide(newIndex);
        }
        
        // Previous slide
        function prevSlide() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            showSlide(newIndex);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-advance (optional)
        let autoAdvance = setInterval(nextSlide, 5000);
        
        // Pause auto-advance on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(nextSlide, 5000);
        });
        
        // Touch swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        }
    });
}

// Experience Modal Carousel Functionality
function initializeExperienceModalCarousel(experienceId) {
    const carousel = experienceModal.querySelector(`[data-modal-carousel="${experienceId}"]`);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.modal-carousel-slide');
    const dots = carousel.querySelectorAll('.modal-carousel-dot');
    const prevBtn = carousel.querySelector('.modal-carousel-prev');
    const nextBtn = carousel.querySelector('.modal-carousel-next');
    const currentSlide = carousel.querySelector('.modal-current-slide');
    const totalSlides = carousel.querySelector('.modal-total-slides');
    
    let currentIndex = 0;
    totalSlides.textContent = slides.length;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update counter
        currentSlide.textContent = index + 1;
        currentIndex = index;
    }
    
    // Next slide
    function nextSlide() {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }
    
    // Previous slide
    function prevSlide() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        showSlide(newIndex);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Keyboard navigation
    function handleKeydown(e) {
        if (experienceModal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    }
    
    document.addEventListener('keydown', handleKeydown);
    
    // Clean up event listener when modal closes
    const originalCloseExperienceModal = closeExperienceModal;
    window.closeExperienceModal = function() {
        document.removeEventListener('keydown', handleKeydown);
        originalCloseExperienceModal();
    };
    
    // Auto-advance (optional)
    let autoAdvance = setInterval(nextSlide, 4000);
    
    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSlide, 4000);
    });
    
    // Touch swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
        }
    }
}

// Initialize experience carousels when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeExperienceCarousels();
});




//--------------------------fromation--------------------------------

//----------------------------------------------------------------------------


// Formation data for modals
const formationData = {
    1: {
        title: "Master in Mechatronics and Artificial Intelligence",
        institution: "University of Advanced Technology",
        period: "2022 - 2024",
        location: "Tangier, Morocco",
        status: "En cours",
        description: "Spécialisation en robotique, automatisation et applications d'intelligence artificielle",
        fullDescription: "Ce programme de Master complet se concentre sur l'intégration du génie mécanique, de l'électronique et de l'informatique pour développer des systèmes intelligents. Le curriculum met l'accent sur les applications pratiques de l'intelligence artificielle en robotique et automatisation, préparant les étudiants pour des rôles avancés dans l'Industrie 4.0.",
        courses: [
            "Systèmes robotiques et d'automatisation avancés",
            "Machine Learning et Vision par Ordinateur",
            "IoT Industriel et Fabrication Intelligente",
            "Systèmes de Contrôle et Programmation PLC",
            "Conception de Systèmes Embarqués",
            "Traitement Numérique du Signal",
            "Intégration de Systèmes Mécatroniques",
            "Applications IA en Robotique"
        ],
        skills: [
            "Conception et Contrôle de Systèmes Robotiques",
            "Algorithmes de Machine Learning",
            "Implémentation de Vision par Ordinateur",
            "Automatisation Industrielle",
            "Programmation PLC",
            "Systèmes Embarqués",
            "Intégration IA"
        ],
        achievements: [
            "Projet de fin d'études : Bras Robotique Intelligent avec Vision IA",
            "Participation à la Compétition Nationale de Robotique",
            "Publication en cours sur l'IA en Automatisation Industrielle"
        ],
        projects: [
            "Développement d'un bras robotique 6 axes avec contrôle IA",
            "Système de vision industrielle pour contrôle qualité",
            "Plateforme IoT pour monitoring d'usine intelligente"
        ],
        technologies: ["ROS", "Python", "TensorFlow", "MATLAB", "SolidWorks", "PLC", "C++", "OpenCV"],
        diplomaLink: "#"
    },
    2: {
        title: "Machine Learning Specialization",
        institution: "Coursera - Stanford University",
        period: "2023 (6 mois)",
        location: "Online",
        status: "Certification",
        description: "Techniques avancées de machine learning et applications",
        fullDescription: "Cette spécialisation a fourni une connaissance approfondie des algorithmes de machine learning, des réseaux de neurones et des techniques de deep learning. Le programme incluait des projets pratiques utilisant Python, TensorFlow et PyTorch, avec des applications en vision par ordinateur, traitement du langage naturel et analytique prédictive.",
        courses: [
            "Machine Learning Supervisé",
            "Apprentissage Non Supervisé et Clustering",
            "Réseaux de Neurones et Deep Learning",
            "Vision par Ordinateur et Traitement d'Images",
            "Traitement du Langage Naturel",
            "Apprentissage par Renforcement",
            "Déploiement et Production de Modèles"
        ],
        skills: [
            "Algorithmes de Machine Learning",
            "Architectures de Deep Learning",
            "Applications de Vision par Ordinateur",
            "Entraînement et Évaluation de Modèles",
            "Prétraitement de Données",
            "Programmation Python pour l'IA"
        ],
        achievements: [
            "Terminé avec un score global de 98%",
            "Développement et déploiement de 5 projets ML réels",
            "Certificat de Spécialisation avec Mention",
            "Classé parmi les meilleurs performeurs du programme"
        ],
        projects: [
            "Système de reconnaissance d'images avec CNN",
            "Modèle de prédiction de séries temporelles",
            "Application de classification de texte avec NLP"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "Pandas"],
        certificateLink: "#"
    },
    3: {
        title: "ROS & Robotics Development",
        institution: "Robotics Academy",
        period: "2023 (4 mois)",
        location: "Online",
        status: "Certification",
        description: "Développement de systèmes robotiques avec ROS",
        fullDescription: "Formation intensive sur ROS (Robot Operating System) couvrant le développement de systèmes robotiques complexes. Apprentissage de la programmation de robots autonomes, de la simulation Gazebo, et de l'intégration de capteurs et actionneurs.",
        courses: [
            "Fondamentaux de ROS et Architecture",
            "Programmation de Noeuds ROS",
            "Simulation de Robots avec Gazebo",
            "Navigation et Planification de Chemin",
            "Perception et Traitement de Capteurs",
            "Contrôle de Mouvement et Cinématique",
            "Intégration Vision ROS-OpenCV"
        ],
        skills: [
            "Développement ROS",
            "Simulation Gazebo",
            "Navigation Robotique",
            "Programmation C++/Python ROS",
            "Intégration Capteurs",
            "Contrôle de Robots"
        ],
        achievements: [
            "Certification ROS Developer avancée",
            "Développement d'un robot mobile autonome",
            "Projet de bras robotique contrôlé par ROS"
        ],
        projects: [
            "Robot mobile autonome avec SLAM",
            "Bras robotique ROS pour pick-and-place",
            "Interface de contrôle ROS-Web"
        ],
        technologies: ["ROS", "C++", "Python", "Gazebo", "OpenCV", "RViz", "MoveIt"],
        certificateLink: "#"
    },
    4: {
        title: "Bachelor in Mechanical Engineering",
        institution: "National School of Applied Sciences",
        period: "2019 - 2022",
        location: "Casablanca, Morocco",
        status: "Diplômé",
        description: "Programme d'ingénierie complet axé sur la conception mécanique et l'automatisation",
        fullDescription: "Le programme de Bachelor a fourni une base solide en principes d'ingénierie mécanique avec un accent particulier sur la mécatronique et l'automatisation. Le curriculum a combiné les connaissances théoriques avec les applications pratiques, préparant les étudiants pour des défis d'ingénierie complexes dans les industries modernes.",
        courses: [
            "Mathématiques et Physique Avancées",
            "Thermodynamique et Transfert de Chaleur",
            "Science et Ingénierie des Matériaux",
            "Conception Mécanique et CAD/CAM",
            "Mécanique des Fluides et Hydraulique",
            "Systèmes de Contrôle et Automatisation",
            "Processus de Fabrication",
            "Mathématiques pour l'Ingénierie"
        ],
        skills: [
            "Conception et Analyse Mécanique",
            "Maîtrise des Logiciels CAD/CAM",
            "Systèmes Thermodynamiques",
            "Sélection et Test de Matériaux",
            "Processus de Fabrication",
            "Calculs d'Ingénierie"
        ],
        achievements: [
            "Diplômé dans les 10% premiers de la promotion",
            "Liste du Doyen pour l'Excellence Académique",
            "Prix du Meilleur Projet de Conception Mécanique",
            "Stage en entreprise leader automobile"
        ],
        projects: [
            "Conception d'un système de transmission automatique",
            "Optimisation thermique d'un moteur industriel",
            "Système automatisé de tri de pièces"
        ],
        technologies: ["SolidWorks", "CATIA", "MATLAB", "AutoCAD", "Ansys", "Abaqus", "Siemens NX"],
        diplomaLink: "#"
    },
    5: {
        title: "Industrial Automation Certification",
        institution: "Siemens Training Center",
        period: "2021 (3 mois)",
        location: "Casablanca, Morocco",
        status: "Certification",
        description: "Programmation PLC et systèmes d'automatisation industrielle",
        fullDescription: "Formation certifiante sur les systèmes d'automatisation industrielle Siemens, couvrant la programmation PLC TIA Portal, les systèmes HMI, et le contrôle de processus industriels. Formation pratique sur des équipements industriels réels.",
        courses: [
            "Programmation PLC Siemens TIA Portal",
            "Systèmes HMI et Interface Opérateur",
            "Réseaux Industriels PROFIBUS/PROFINET",
            "Contrôle de Moteurs et Variateurs",
            "Sécurité des Machines et Normes",
            "Diagnostic et Maintenance",
            "SCADA et Supervision"
        ],
        skills: [
            "Programmation PLC Siemens",
            "Configuration HMI",
            "Réseaux Industriels",
            "Contrôle de Moteurs",
            "Sécurité Machine",
            "Diagnostic Industriel"
        ],
        achievements: [
            "Certification Siemens S7-1200/1500",
            "Projet d'automatisation d'atelier complet",
            "Mention Excellence en Automatisation"
        ],
        projects: [
            "Automatisation de ligne d'assemblage",
            "Système de contrôle de processus chimique",
            "Interface HMI pour usine intelligente"
        ],
        technologies: ["Siemens TIA Portal", "STEP 7", "WinCC", "PROFIBUS", "PROFINET", "S7-1200", "S7-1500"],
        certificateLink: "#"
    }
};

// Formation Modal Functionality
const formationModal = document.getElementById('formationModal');
const formationCloseModal = formationModal.querySelector('.close-modal');

// Open formation modal when clicking "View Details" or formation card
document.querySelectorAll('.formation-card, .view-formation-details').forEach(element => {
    element.addEventListener('click', (e) => {
        // Don't open modal if clicking on links
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        const formationId = element.closest('.timeline-item').getAttribute('data-formation');
        openFormationModal(formationId);
    });
});

// Close formation modal
formationCloseModal.addEventListener('click', closeFormationModal);

formationModal.addEventListener('click', (e) => {
    if (e.target === formationModal) {
        closeFormationModal();
    }
});

// Close formation modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && formationModal.style.display === 'block') {
        closeFormationModal();
    }
});

function openFormationModal(formationId) {
    const formation = formationData[formationId];
    if (!formation) return;

    const modalBody = formationModal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h2 class="modal-title">${formation.title}</h2>
        <div class="modal-formation-info">
            <div class="modal-institution">
                <i class="fas fa-university"></i>
                <span>${formation.institution}</span>
            </div>
            <div class="modal-formation-period">
                <i class="fas fa-calendar-alt"></i>
                <span>${formation.period}</span>
            </div>
            ${formation.location ? `
            <div class="modal-formation-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${formation.location}</span>
            </div>
            ` : ''}
            <div class="modal-formation-status">
                <i class="fas fa-info-circle"></i>
                <span>Status: ${formation.status}</span>
            </div>
        </div>
        <p class="modal-description">${formation.fullDescription}</p>
        
        <div class="modal-courses">
            <h4>Programme & Cours Principaux</h4>
            <ul>
                ${formation.courses.map(course => `<li>${course}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-skills">
            <h4>Compétences Développées</h4>
            <ul>
                ${formation.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-projects">
            <h4>Projets Réalisés</h4>
            <ul>
                ${formation.projects.map(project => `<li>${project}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-achievements">
            <h4>Réalisations</h4>
            <ul>
                ${formation.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-tech">
            <h4>Technologies & Outils Maîtrisés</h4>
            ${formation.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <div class="modal-links">
            ${formation.diplomaLink ? `<a href="${formation.diplomaLink}" class="modal-link" target="_blank"><i class="fas fa-certificate"></i> Voir le Diplôme</a>` : ''}
            ${formation.certificateLink ? `<a href="${formation.certificateLink}" class="modal-link outline" target="_blank"><i class="fas fa-award"></i> Voir le Certificat</a>` : ''}
        </div>
    `;

    formationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeFormationModal() {
    formationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code if needed
});


//----------------------------------------------------------------------------


//---------------------------Les proof-----------------------------------


// References Section Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Copy contact info on click
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                // Visual feedback
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> <span>Copied!</span>';
                this.style.color = '#10b981';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = '';
                }, 1500);
            }).catch(err => {
                console.log('Failed to copy: ', err);
            });
        });
    });
    
    // Add smooth hover effects
    const cards = document.querySelectorAll('.reference-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

//----------------------------------------------------------------------------


//------------------------------------------------------------------------


 // Project data for modals
 const projectsData = {
    1: {
        title: "Design and Validation of a Thermal Engine",
        image: [
            "images/project/1/the1.png",
            "images/project/1/the2.png"
        ],
        description: "Thermo-mechanical analysis and energy optimization – ANSYS, CATIA, SOLIDWORKS",
        fullDescription: "This project involved the comprehensive design and validation of a thermal engine with a focus on performance optimization, energy efficiency, and emission reduction. The design process incorporated advanced thermo-mechanical modeling techniques and careful material selection to enhance both durability and operational efficiency.",
        features: [
            "Optimized thermal engine design for performance and efficiency",
            "Advanced thermo-mechanical modeling and simulation",
            "Material selection for enhanced durability",
            "Innovative combustion and heat transfer technologies",
            "Comprehensive simulation and validation processes",
            "Compliance with industrial and environmental standards"
        ],
        technologies: ["CATIA", "SolidWorks", "Abaqus", "ANSYS", "Thermal Analysis", "Material Science"],
        liveDemo: "#",
        github: "#"
    },
    2: {
        title: "Design of a Pressure Control System in a Hydraulic Circuit",
        image: [
            "images/project/2/aut1.png",
            "data:image/jpeg;base64,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"
        ],
        description: "This project aims to design and simulate a hydraulic pressure control system using MATLAB/Simulink.",
        fullDescription: "This project focused on the design and simulation of a sophisticated hydraulic pressure control system. Using MATLAB/Simulink, we modeled the system dynamics and implemented a PID controller to ensure stable and precise pressure regulation under various operating conditions. The system demonstrates excellent performance in maintaining desired pressure levels despite external disturbances.",
        features: [
            "Dynamic modeling of hydraulic systems",
            "PID controller implementation for pressure regulation",
            "Stability analysis under varying conditions",
            "Real-time pressure monitoring and control",
            "System performance optimization",
            "Simulation validation with real-world parameters"
        ],
        technologies: ["MATLAB", "Simulink", "PID Control", "Hydraulic Systems", "System Dynamics", "Control Theory"],
        liveDemo: "#",
        github: "#"
    },
    3: {
        title: "Automotive Diagnostics System",
        image: [
            "images/project/3/Preteus.PNG",
            "images/project/3/MPLab.PNG"
        ],
         description: "Microcontroller-Based Automotive Monitoring Project",
        fullDescription: "This project developed a comprehensive automotive diagnostics system using microcontroller technology. The system monitors various vehicle parameters in real-time, providing valuable insights into vehicle health and performance. It includes features for fault detection, performance analysis, and predictive maintenance alerts.",
        features: [
            "Real-time monitoring of vehicle parameters",
            "Fault detection and diagnostic capabilities",
            "Performance analysis and reporting",
            "Predictive maintenance alerts",
            "User-friendly interface for data visualization",
            "Compatible with various vehicle systems"
        ],
        technologies: ["C/C++", "Assembly", "MPLAB X IDE", "PROTEUS", "PIC Microcontrollers", "Embedded Systems"],
        liveDemo: "#",
        github: "https://github.com/MOHAMEDDAGMOUMI97/Automotive_Diagnostic_System/tree/main"
    },
    4: {
        title: "Design and Optimization of an ABS System (Anti-Lock Braking System)",
        image: [
            "images/project/4/ABS1.PNG",
            "images/project/4/valid.png",
            "images/project/4/ABS3.png"
        ],
        description: "Mechanical design and structural analysis of an Anti-Lock Braking System",
        fullDescription: "This project involved the comprehensive design and optimization of an Anti-Lock Braking System (ABS) to enhance vehicle safety and braking efficiency. Using CATIA and SolidWorks for 3D modeling, and Abaqus for finite element analysis, the system was meticulously designed and optimized to deliver superior performance and reliability under real-world driving conditions.",
        features: [
            "3D modeling of ABS components using CATIA and SolidWorks",
            "Finite element analysis for structural integrity",
            "Optimization for enhanced braking performance",
            "Safety and reliability validation",
            "Compatibility with various vehicle types",
            "Performance testing under different conditions"
        ],
        technologies: ["CATIA", "SolidWorks", "Abaqus", "Mechanical Design", "Finite Element Analysis", "Validation"],
        liveDemo: "#",
        github: "#"
    },
    5: {
        title: "Power Electronics Simulation Project – Study of Converters with PSIM",
        image: [
            "images/project/5/puial2.png",
            "images/project/5/puial3.png",
            "images/project/5/puial1.png"],
        description: "#",
        fullDescription: "This project involved using PSIM simulation software to analyze the performance of various power electronic converters, including rectifiers, AC controllers, and choppers. Key parameters such as firing angles, inductance values, and load types were studied to interpret results and optimize converter operation. The work strengthened skills in electrical simulation, circuit analysis, and result interpretation using specialized simulation tools.",
        features: [
            "Simulation and comparative analysis of rectifiers, AC controllers, and choppers using PSIM",
            "Study of electrical parameters—firing angles, inductance, and loads—to evaluate converter efficiency and behavior",
            "Interpretation of simulation outcomes to optimize each converter’s performance and reliability",
            "Enhanced expertise in circuit modeling and power electronics software"
        ],
        technologies: ["PSIM" , "Power Electronics" ,"Circuit Simulation","Electrical Engineering"],
        liveDemo: "#",
        github: "#"
    },
    6: {
        title: "Design and Validation of a Single-Phase and Three-Phase Inverter",
        image: [
            "images/project/6/OND5.jpg",
            "images/project/6/Doc1.jpg",
            "images/project/6/OND6.jpg"
        ],
        description: "#",
        fullDescription: "This project involved the comprehensive design, simulation, and validation of single-phase and three-phase inverters as part of a power electronics module. The main objective was to optimize inverter operation, analyze energy performance, and study load effects using both theoretical calculations and Simulink simulations. Various scenarios (classic control, PWM, inductance variation) enabled result comparison and system validation.",
        features: [
            "Optimized inverter design for improved efficiency and output signal quality",
            "Advanced modeling and simulation of output voltage and current with Simulink, including RMS calculations and FFT spectral analysis",
            "Comparative analysis of single-phase and three-phase versions, highlighting the impact of electric settings (inductance, control) on performance",
            "Study of PWM control (Pulse Width Modulation) for loss reduction and improved system control",
            "Simulation of inductance variation effects on current filtering and regularity",
            "Compliance validation with industrial and electrical standards"
        ],
        technologies: ["Matlab", "Simulink", "FFT Analysis", "Power Electronic Engineering"],
        liveDemo: "#",
        github: "#"
    }
};

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Modal functionality
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.querySelector('.modal-body');

// Open modal when clicking "View Details" or project card
document.querySelectorAll('.project-card, .view-details').forEach(element => {
    element.addEventListener('click', (e) => {
        // Don't open modal if clicking on links
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        const projectId = element.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close modal functions
closeModal.addEventListener('click', closeModalFunc);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunc();
    }
});
//



function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Generate carousel HTML
    const carouselHTML = `
        <div class="modal-carousel" data-modal-carousel="${projectId}">
            ${project.image.map((img, index) => `
                <div class="modal-carousel-slide ${index === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${project.title} - Image ${index + 1}" loading="lazy">
                </div>
            `).join('')}
    
            <button class="modal-carousel-nav modal-carousel-prev">‹</button>
            <button class="modal-carousel-nav modal-carousel-next">›</button>
            
            <div class="modal-carousel-counter">
                <span class="modal-current-slide">1</span>/<span class="modal-total-slides">${project.image.length}</span>
            </div>
            
            <div class="modal-carousel-controls">
                ${project.image.map((_, index) => `
                    <button class="modal-carousel-dot ${index === 0 ? 'active' : ''}" data-modal-slide="${index}"></button>
                `).join('')}
            </div>
        </div>
    `;

    modalBody.innerHTML = `
        ${carouselHTML}
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.fullDescription}</p>
        
        <div class="modal-features">
            <h4>Key Features</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <div class="modal-links">
            ${project.liveDemo !== '#' ? `<a href="${project.liveDemo}" class="modal-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            ${project.github !== '#' ? `<a href="${project.github}" class="modal-link outline" target="_blank"><i class="fab fa-github"></i> Source Code</a>` : ''}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize modal carousel
    initializeModalCarousel(projectId);
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
     const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
   
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

// Formspree endpoint
    const url = form.getAttribute('action'); // You can keep the action in the form HTML

    
 // Alternatively, you can set the url directly: const url = 'https://formspree.io/f/mnngyego';
    fetch(url, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        } else {
            return response.json().then(err => {
                throw new Error(err.error || 'Form submission failed');
            });
        }
    })

     .catch(error => {
        alert('There was an error sending your message. Please try again. Error: ' + error.message);
        })
    .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        });
    });
    // Simulate form submission
 /*   setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('loading');
    }, 1500);
});
*/
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading state for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});


// Image Carousel Functionality
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const currentSlide = carousel.querySelector('.current-slide');
        const totalSlides = carousel.querySelector('.total-slides');
        
        let currentIndex = 0;
        totalSlides.textContent = slides.length;
        
        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            // Update counter
            currentSlide.textContent = index + 1;
            currentIndex = index;
        }
        
        // Next slide
        function nextSlide() {
            let newIndex = currentIndex + 1;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            showSlide(newIndex);
        }
        
        // Previous slide
        function prevSlide() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            showSlide(newIndex);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-advance (optional)
        let autoAdvance = setInterval(nextSlide, 5000);
        
        // Pause auto-advance on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(nextSlide, 5000);
        });
        
        // Touch swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        }

        
    });
}

// Modal Carousel Functionality
function initializeModalCarousel(projectId) {
    const carousel = document.querySelector(`[data-modal-carousel="${projectId}"]`);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.modal-carousel-slide');
    const dots = carousel.querySelectorAll('.modal-carousel-dot');
    const prevBtn = carousel.querySelector('.modal-carousel-prev');
    const nextBtn = carousel.querySelector('.modal-carousel-next');
    const currentSlide = carousel.querySelector('.modal-current-slide');
    const totalSlides = carousel.querySelector('.modal-total-slides');
    
    let currentIndex = 0;
    totalSlides.textContent = slides.length;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update counter
        currentSlide.textContent = index + 1;
        currentIndex = index;
    }
    
    // Next slide
    function nextSlide() {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }
    
    // Previous slide
    function prevSlide() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        showSlide(newIndex);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Keyboard navigation
    function handleKeydown(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    }
    
    document.addEventListener('keydown', handleKeydown);
    
    // Clean up event listener when modal closes
    const originalCloseModalFunc = closeModalFunc;
    window.closeModalFunc = function() {
        document.removeEventListener('keydown', handleKeydown);
        originalCloseModalFunc();
    };
    
    // Auto-advance (optional)
    let autoAdvance = setInterval(nextSlide, 4000);
    
    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSlide, 4000);
    });
    
    // Touch swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
        }
    }
}



// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', initializeCarousels);

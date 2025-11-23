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
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
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

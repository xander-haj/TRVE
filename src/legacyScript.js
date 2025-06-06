document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const navLinks = document.querySelectorAll('#sidebar .nav-link');
    const lessonContents = document.querySelectorAll('.lesson-content');
    const welcomeSection = document.getElementById('welcome-section');
    const mainHeaderTitle = document.getElementById('main-header-title');

    const defaultHeaderTitle = "E-Learning Platform";

    function hideAllContentSections() {
        lessonContents.forEach(content => content.classList.add('hidden'));
        if (welcomeSection) {
            welcomeSection.classList.add('hidden');
        }
    }

    function updateActiveLink(activeId) {
        navLinks.forEach(navLink => {
            if (navLink.getAttribute('href').substring(1) === activeId) {
                navLink.classList.add('active-link');
                navLink.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-blue-300', 'hover:text-green-300', 'hover:text-yellow-300');
            } else {
                navLink.classList.remove('active-link');
                navLink.classList.add('text-gray-300');
                if(navLink.closest('div').querySelector('h2').textContent.includes('TypeScript')) {
                     navLink.classList.add('hover:text-blue-300');
                } else if (navLink.closest('div').querySelector('h2').textContent.includes('Vite')) {
                     navLink.classList.add('hover:text-green-300');
                } else if (navLink.closest('div').querySelector('h2').textContent.includes('React')) {
                     navLink.classList.add('hover:text-yellow-300');
                }
                 navLink.classList.add('hover:bg-gray-700');
            }
        });
    }
    
    function showContent(targetId) {
        hideAllContentSections();
        const targetElement = document.getElementById(targetId);
        let lessonTitle = defaultHeaderTitle;

        if (targetElement) {
            targetElement.classList.remove('hidden');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            const titleElement = targetElement.querySelector('h3');
            if (titleElement) {
                 lessonTitle = titleElement.textContent;
            }
             mainHeaderTitle.textContent = lessonTitle;
        } else if (welcomeSection) {
            welcomeSection.classList.remove('hidden');
            mainHeaderTitle.textContent = defaultHeaderTitle;
        }
        updateActiveLink(targetId);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            if (window.location.hash !== '#' + targetId) {
                 window.location.hash = targetId;
            } else {
                showContent(targetId);
            }
        });
    });

    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showContent(hash);
        } else if (welcomeSection) {
            hideAllContentSections();
            welcomeSection.classList.remove('hidden');
            mainHeaderTitle.textContent = defaultHeaderTitle;
            updateActiveLink(''); 
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();


    document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            const icon = trigger.querySelector('.collapsible-icon');
            
            content.classList.toggle('hidden');
            
            if (content.classList.contains('hidden')) {
                icon.classList.remove('rotate-180');
            } else {
                icon.classList.add('rotate-180');
            }
        });
    });
});

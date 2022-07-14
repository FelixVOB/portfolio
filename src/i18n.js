import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources: {
      en: {
        translation: {
          "greeting": "Hello, I'm",
          "front-end-dev": "Front-end Developer",
          "lets-talk": "Let's Talk",
          "scroll-down": "Scroll Down",
          "get-to-know": "Get To Know",
          "about-me": "About Me",
          "experience": "Experience",
          "9-tech": "9+ technologies",
          "education": "Education",
          "pursuing": "Pursuing A Degree At UCLL",
          "projects": "Projects",
          "12": "12+ Completed Projects",
          "about-me-text": "My name is Felix Van Obbergen and I am a full-time programming student at UCLL, Leuven. I am currently pursuing a programming degree and I will be graduating in 2 years. Altough my degree covers the whole field of programming, my passion lies in front-end development. Check out some of my most relevant projects down in the portfolio section to see some of the websites/web-apps that I have build.",
          "what-skills": "What Skills I Have",
          "my-experience": "My Experience",
          "front-end": "Front-end Development",
          "back-end": "Back-end Development",
          "my-recent": "My Recent Work",
          "dessert": "Dessert Recepy Website",
          "practice": "Practice Site",
          "weather": "Weather App",
          "study": "Study Tracker",
          "get-in-touch": "Get In Touch",
          "contact-me": "Contact Me",
          "send": "Send a message",
          "send-message": "Send Message",
          "your-full-name": "Your Full Name",
          "your-email": "Your Email",
          "your-message": "Your Message",
          "home": "Home",
          "about": "About",
          "exp": "Experience"
        }
      },
      nl: {
        translation: {
          "greeting": "Hallo, Ik ben",
          "front-end-dev": "Front-end Ontwikkelaar",
          "lets-talk": "Contacteer Me",
          "scroll-down": "Scroll",
          "get-to-know": "Leer Meer",
          "about-me": "Over Mij",
          "experience": "Ervaring",
          "9-tech": "9+ technologiën",
          "education": "Educatie",
          "pursuing": "Hogeschoolstudent Aan Ucll",
          "projects": "Projecten",
          "12": "12+ Afgemaakte Projecten",
          "about-me-text": "Mijn naam is Felix Van Obbergen en ik ben voltijds student programmeren aan de UCLL in Leuven. Momenteel volg ik een opleiding programmeren en zal binnen 2 jaar afstuderen. Hoewel mijn diploma het hele veld van programmeren beslaat, ligt mijn passie bij front-end ontwikkeling. Bekijk enkele van mijn meest relevante projecten onderaan in de portfolio sectie om de website/webapps te zien die ik heb gebouwd.",
          "what-skills": "Welke Vaardigheden Ik Bezit",
          "my-experience": "Mijn Ervaring",
          "front-end": "Front-end Ontwikkeling",
          "back-end": "Back-end Ontwikkeling",
          "my-recent": "Mijn Recente Werk",
          "dessert": "Recepten Website",
          "practice": "Oefen Site",
          "weather": "Weer App",
          "study": "Studiebelaster",
          "get-in-touch": "Neem Contact Op",
          "contact-me": "Contacteer Mij",
          "send": "Stuur een bericht",
          "send-message": 'Stuur Bericht',
          "your-full-name": "Volledige Naam",
          "your-email": "Email",
          "your-message": "Uw Bericht",
          "home": "Startpagina",
          "about": "Over Mij",
          "exp": "Ervaring"
        }
      }
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

export default i18n;
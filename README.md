# Personal Portfolio & Growth Hub

Nowoczesne, interaktywne portfolio połączone z dashboardem rozwoju osobistego i klasyczną mini-grą. Projekt stworzony w ramach przedmiotu Technologie Internetowe (TIN).

## O projekcie
Aplikacja webowa służąca nie tylko jako standardowe CV, ale również jako dynamiczny system śledzenia postępów w rozwoju osobistym (czytelnictwo) oraz demonstracja umiejętności programistycznych w JavaScript. Projekt wyróżnia się minimalistycznym designem, optymalizacją pod kątem wydajności oraz dbałością o dostępność (a11y).

## Główne funkcjonalności
- **Dynamiczna Biblioteka (Fetch API):** Zestawienie przeczytanych książek oraz wishlisty pobierane i parsowane w czasie rzeczywistym z zewnętrznego arkusza kalkulacyjnego (CSV). Implementacja sortowania i dynamicznego rozwijania list.
- **Interaktywne CV:** Responsywna oś czasu prezentująca doświadczenie zawodowe, projekty biznesowe (m.in. *Dream Garage Hunter*) oraz edukację.
- **Snake Minigame:** W pełni funkcjonalna gra zaimplementowana w czystym JavaScript z wykorzystaniem interfejsu Canvas API, wyposażona w system punktacji oraz zapobieganie domyślnemu scrollowaniu strony.
- **Nowoczesny UI/UX:** Czysty interfejs zbudowany w oparciu o metodologię BEM, system zmiennych CSS (Design Tokens) oraz płynne animacje przejść. Całość w 100% responsywna.

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+ / Vanilla JS)
- **Architektura CSS:** BEM (Block Element Modifier), CSS Variables
- **Integracje:** Google Sheets (jako baza danych), Fetch API
- **Inne:** HTML5 Canvas, Git

## Struktura plików
```text
📦 TIN-projekt
 ┣ 📂 media/               # Zasoby graficzne i certyfikaty PDF
 ┣ 📜 index.html           # Strona główna z licznikiem statystyk
 ┣ 📜 cv.html              # Interaktywne Curriculum Vitae
 ┣ 📜 ksiazki.html         # Dashboard czytelniczy z pobieraniem danych z API
 ┣ 📜 gra.html             # Kontener na grę Snake
 ┣ 📜 style.css            # Główny arkusz stylów (zmienne, klasy, media queries)
 ┣ 📜 script.js            # Globalna logika (nawigacja, event listenery)
 ┣ 📜 game.js              # Logika silnika gry Snake
 ┗ 📜 README.md            # Dokumentacja projektu
```

## **Jak uruchomić projekt lokalnie**
Projekt nie wymaga żadnych zewnętrznych bibliotek Node.js ani bundlerów. Aby go uruchomić:
- Sklonuj repozytorium: git clone git@github.com:lukandooo/PersonalWebsite.git
- Otwórz folder z projektem w swoim edytorze kodu (np. VS Code).
- Uruchom plik index.html w przeglądarce (zalecane użycie rozszerzenia Live Server do prawidłowego działania funkcji Fetch API lokalnie).

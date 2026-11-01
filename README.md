# PadiMachi Education Portal

**Live Demo:** https://padimachi-education-portal.vercel.app/

## About

I created PadiMachi when I was studying in my 1st year of engineering.

During my first year, I wanted to make it easier for students in my college to find study materials and answers in one place. I collected and organized study material using our college question bank and prepared the website around the subjects students were studying.

Other 1st-year students in my college used the website for their studies and exam preparation.

I also added a separate section for 11th-standard students. Currently, that section focuses on Physics and includes chapter-wise study material and questions.

This is one of my earlier projects, but it is important to me because it was made for a real problem and real students were using it.

## What is Included

### 1st Year Engineering

The website contains study material for first-year engineering subjects, including:

- Mathematics
- Physics
- Chemistry
- English
- C Programming

The material is organized into subjects and units so students can find what they need without going through many separate files.

### 11th Standard Physics

I also created a section for 11th-standard Physics with:

- Chapter-wise material
- One-mark questions
- Choose-the-correct-answer questions
- Study guides

## Features

- Simple student-friendly navigation
- Subject and unit-wise study material
- Questions and answers
- Physics study material for 11th standard
- Audio answers for some study material
- Responsive design for phones and computers
- Static website that can be opened without a backend

## Technologies Used

- HTML5
- CSS3
- JavaScript
- HTML5 Audio
- Vercel

I kept the project simple because the main goal was to make the study material easy for students to access.

## How It Works

```text
Open PadiMachi
      ↓
Choose student category
      ↓
Choose subject
      ↓
Choose unit / chapter
      ↓
Read questions and answers
      ↓
Use audio answers where available
```

## Project Structure

Some of the main files are:

```text
.
├── index.html          # Main page
├── 1st_year.html       # Engineering section
├── 11th.html           # 11th standard section
├── engineering.html    # Engineering subjects
├── style.css           # Website styles
├── protection.js       # Basic browser-side protection
├── *_unit*.html        # Unit-wise study pages
├── *.m4a               # Audio study material
└── images/assets       # Educational images and diagrams
```

## Running Locally

This is a static website, so there is no backend setup required.

Clone the repository:

```bash
git clone https://github.com/MohammedAyman07/padimachi-education-portal.git
cd padimachi-education-portal
```

You can open `index.html` directly in a browser.

Or use a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Content

The study material was prepared using the question bank and study material available to me during my studies.

The purpose of this project was to organize the material in a way that was easier for students to access and revise.

If any material in this repository belongs to a college, publisher, teacher, or another copyright holder, it should not be treated as my original copyrighted material. The repository is mainly a record of the educational website and the development work behind it.

## About the Website Protection

I added some basic JavaScript protection such as disabling the context menu and some common copy shortcuts.

This is only a basic browser-side measure. It is not real security and it cannot prevent someone from accessing or copying content using developer tools or other methods.

## Testing

I tested the website by opening the pages in the browser and checking the main navigation, subject/unit links, images and audio files.

There is currently no automated test suite because this is a static educational website.

## What I Learned

This was one of the projects where I learned a lot about building something for actual users.

I learned about:

- Building a complete website from scratch
- Organizing a large amount of educational content
- HTML and CSS
- JavaScript
- Responsive web design
- Adding audio to web pages
- Managing many linked pages and assets
- Deploying a static website
- Thinking about what users actually need instead of only focusing on the code

## Future Improvements

If I continue developing PadiMachi, I would like to add:

- Search for questions and topics
- Better content management instead of maintaining many HTML files manually
- Offline support / PWA
- Better accessibility
- More subjects and educational levels
- A better way to manage audio and study material

## License

The original source code, design, and documentation in this repository are proprietary and all rights are reserved by Mohammed Ayman S. The source is publicly available for portfolio review only. Educational content, images, audio, and other third-party materials may belong to their respective owners and remain subject to their own terms. See the [AYMAN Proprietary Portfolio Licence](LICENSE) for permitted use and restrictions.

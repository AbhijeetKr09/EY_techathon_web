# AI-Driven Personalized Learning Platform

This project is an AI-driven personalized learning platform designed to help youth (students and early professionals) achieve their career and educational goals. The platform provides customized learning paths based on user input (goals, quizzes, educational background) and adapts in real-time to evolving job market trends. It integrates multiple AI modules to deliver dynamic learning content and progress tracking.

## Key Features

- **Personalized Onboarding**: Users provide their goals, quizzes, and educational history, which are used to create custom learning paths.
- **Job Market Insights**: The platform uses a web scraping module to gather real-time job market data, informing the learning paths and ensuring relevance.
- **Dynamic Quiz Generation**: AI-driven quizzes are created based on the user's input and real-time insights, allowing for an evolving learning experience.
- **Learning Content**: The platform fetches relevant videos (via YouTube API) and transcribes them to enhance learning. AI analyzes the transcripts to create further quizzes and refine learning paths.
- **Offline Support**: Users can download videos and access text-based content offline, with progress syncing once online.
- **Adaptive Learning**: Based on quiz results and job market data, the AI continuously adjusts the learning roadmap for the user.

## Data Flow

1. **User Input**: User input is passed to the Scraper Module, which fetches real-time job market insights.
2. **Personalized Quizzes**: The data is sent to LLM Module (1) to generate personalized quizzes.
3. **Video Retrieval**: YouTube Module retrieves relevant videos, and transcripts are created for further analysis.
4. **Additional Quizzes**: LLM Module (2) generates additional quizzes based on the video content.
5. **Learning Roadmap**: The final results and quizzes help the AI build an updated learning roadmap for the user.

## Modules

### 1. Scraper Module
- Gathers real-time job market data using web scraping techniques.
- Uses Selenium and BeautifulSoup for scraping job descriptions and other relevant information.

### 2. LLM Module
- Generates personalized quizzes based on user input and real-time job market data.
- Analyzes video transcripts to create further quizzes and refine learning paths.

### 3. YouTube Module
- Retrieves relevant educational videos using the YouTube API.
- Transcribes video content to enhance learning and generate quizzes.

### 4. Text Preprocessing Module
- Cleans and preprocesses text data to retain important keywords.
- Extracts key phrases to assist in quiz generation and learning path refinement.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbhijeetKr09/EY_techathon_web.git
   cd EY_techathon_web

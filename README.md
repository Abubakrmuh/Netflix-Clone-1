# Netflix Clone

A modern Netflix clone built with React and Vite, featuring a responsive design and movie streaming interface.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Movie Browsing**: Browse trending movies, TV shows, and Netflix originals
- **Search Functionality**: Search for movies and TV shows
- **Continue Watching**: Track your viewing progress
- **Modern UI**: Clean, Netflix-inspired interface
- **API Integration**: Uses The Movie Database (TMDB) API for movie data

## Technologies Used

- **React 19.1.1**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Material-UI**: UI components and icons
- **Axios**: HTTP client for API requests
- **CSS3**: Custom styling and animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abubakrmuh/Netflix-Clone.git
cd Netflix-Clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```
VITE_API_KEY=your_tmdb_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## API Setup

This project uses The Movie Database (TMDB) API. To get an API key:

1. Visit [TMDB](https://www.themoviedb.org/)
2. Create an account
3. Go to Settings > API
4. Request an API key
5. Add the key to your `.env` file

## Project Structure

```
src/
├── components/
│   ├── Banner/          # Hero banner component
│   ├── Header/          # Navigation header
│   ├── Rows/            # Movie row components
│   ├── Search/          # Search functionality
│   ├── ContinueWatching/ # Continue watching section
│   └── Footer/          # Footer component
├── Pages/
│   └── Home/            # Main home page
├── Utils/
│   ├── axios.jsx        # API configuration
│   └── requests.jsx     # API endpoints
└── assets/              # Static assets
```

## Contributing

This is an Evangadi Full-Stack Web Development exit project. Feel free to fork and submit pull requests for improvements.

## License

This project is for educational purposes.

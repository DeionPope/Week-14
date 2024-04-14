import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/Movie';
import NavBar from './components/Navbar';
import Stars from './components/Stars';


// used array here to hold movies instead of using movie component
const App = () => {
  const [movies] = useState([
    { id: 1,
      img:"https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png",
      title:"Legally Blonde",
      year: 2001,
      info:"Being dumped by her boyfriend for being too blonde,' Elle Woods decides to win him back by enrolling in Harvard Law School with him.",
    },
  
    { id: 2,
      img:"https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX671_.jpg",
      title:"Princess Diaries",
      year:2001,
      info:"Dorky teenager Mia Thermopolis gets a surprise of a lifetime when her estranged grandmother shows up and announces that Mia is a princess.",
    },

    { id: 3,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKDBZZMelkBUAFPji4Q16uS089Y3BN1Xckw&usqp=CAU",
      title:"Freaky Friday",
      year:2003,
      info:"A mother-daughter duo receive cryptic fortune cookies which make them swap bodies. Forced to live as the other, they soon develop a new sense of understanding for one another.",
    },

    { id: 4,
      img:"https://ravanna.vidangel.com/file/ravanna/1/4/movies-10096_0010_07_14facd949705cfb3.jpg",
      title:"13 Going on 30",
      year:2004,
      info:"When teenager Jenna Rink's wish to be 'thirty, flirty, and thriving' comes true, she soon learns that adulthood isn't what she thought it'd be.",
    },

    { id: 5,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj36woYwDd5WYGOSFuumbA4vd6zUNcCnhoRA&usqp=CAU",
      title:"Mean Girls",
      year:2004,
      info:"When expat Katy moves to the American suburbs and befriends the most powerful clique in school, The Plastics, she soon realizes how shallow popularity can really be.",
    },

    { id: 6,
      img:"https://lumiere-a.akamaihd.net/v1/images/p_enchanted_19751_8adb9bba.jpeg?region=0%2C0%2C540%2C810",
      title:"Enchanted",
      year:2007,
      info:"Giselle is banished from a fairy-tale land by an evil queen to NYC. Giselle meets a cynical lawyer who helps her find her one true love.",
    },
  ]);
  
  return (
      <div className='App'>
        <NavBar />
        <div className='container-fluid movie-app mt-5'>
          <div className='row'>
            <MovieList movies = {movies} starsComponent = {Stars} />
          </div>
          {/* <ReviewList /> */}
        </div>
      </div>
  );
}

export default App;
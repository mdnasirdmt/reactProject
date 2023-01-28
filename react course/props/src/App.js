
import './App.css';
import Movie from './components/Movies';
import Header from './components/Header';
import MoviesJson from './moviedata.json';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        {
          MoviesJson.map((el,index)=>{
            return(
            <Movie 
              key={index}
              title={el.Title}
              year={el.Year}
              img={el.Poster}
              imdb={el.imdbID}

            />
            )
          })
        }
        
      </div>
    </div>

  );
}



export default App;

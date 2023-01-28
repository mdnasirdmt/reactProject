

const Movies = (props) => {
  return (
    <div className="movie">
        <img src={props.img} alt="" />
        <p>Title : {props.title}</p>
        <p>Year : {props.year}</p>
        <p>imdb : {props.imdb}</p>
    </div>
  )
}
export default Movies;
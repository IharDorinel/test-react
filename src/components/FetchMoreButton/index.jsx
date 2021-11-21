import "./index.css";


const FetchMoreButton = ({ fetchMore }) => {
  
  return (
    <button className="FetchMoreButton" type="submit" onClick={fetchMore}>Show more</button>
  )
}

export default FetchMoreButton;
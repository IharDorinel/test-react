const ContentItem = ({content, visible}) => {
  
  return content.slice(0, visible).map((item) => (
    <li key={item.id}>
      <figure>
      <img className="ContentImg" src={item.image} alt={item.name} />
      </figure>
      <div className="figcaptionContainer">
        <figcaption>Name: {item.name}</figcaption>
        <figcaption>Species: {item.species}</figcaption>
        <figcaption>Gender: {item.gender}</figcaption>
        <figcaption>Status: {item.status}</figcaption>
    </div>
    </li>
  ))
}

export default ContentItem;
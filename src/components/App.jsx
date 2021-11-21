import Header from "./Header";
import ContentList from "./ContentList";
import FetchMoreButton from "./FetchMoreButton";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";


const App = () => {
  const [content, visible, getContent, fetchMore] = useLoadContent();
  
  return (
    <div className="App">
      <Header onSearch={getContent} />
      <h1 className="Title">Simple content list</h1>
      <ContentList content={content} visible={visible}/>
      {visible < content.length &&
      <FetchMoreButton fetchMore={fetchMore}/>
      }
    </div>
  );
};

export default App;
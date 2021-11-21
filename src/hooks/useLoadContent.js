import {useState} from "react";

export const useLoadContent = () => {
  
  const [imgList, setImgList] = useState([]);
  
  const [visible, setVisible] = useState(10);
  
  const getContent = async (value) => {
    await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then(res => res.json())
      .then(data => {
        setVisible(10)
        setImgList(data.results)
      })
  }
  
  const fetchMore = () => {
    setVisible(init => init + 10)
  }

  return [imgList, visible, getContent, fetchMore];
};
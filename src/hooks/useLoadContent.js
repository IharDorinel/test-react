import {useState} from "react";

export const useLoadContent = () => {
  
  const [imgList, setImgList] = useState([]);
  
  const [visible, setVisible] = useState(10);
  
  const getContent = async (value) => {
    
    await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then(res => (res.ok)
        ? res.json()
        : Promise.reject('is not ok: ' + res.status)
      )
      .then(data => {
          setVisible(10)
          if(value !== '') {
            setImgList(data.results)
          } else {
            alert('Please enter some value')
          }
      })
      .catch(() => setImgList([]))
  }
  
  const fetchMore = () => {
    setVisible(init => init + 10)
  }

  return [imgList, visible, getContent, fetchMore];
};


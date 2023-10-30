import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Components/Card";
import lottie from "lottie-web";
import animationData from "./Animation/Animation.json";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementsByClassName("Animation")[0], // Specify the HTML element where the animation will be rendered
      renderer: "svg", // Choose the renderer (canvas, svg)
      loop: true,
      autoplay: true,
      animationData: animationData, // Pass your JSON animation data
    });
    return () => anim.destroy(); // Clean up animation on unmount
  }, []);

  // fetching api data here
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        // console.log(result);

        const newArray = [];
        result.map((item) => {
          if (
            newArray.length === 0 ||
            newArray[newArray.length - 1].userId !== item.userId
          ) {
            // newArray[item.userId] = [];
            newArray.push({
              userId: item.userId,
              data: [{ id: item.id, title: item.title, delete:false }],
            });
          } else if (newArray[newArray.length - 1].userId === item.userId) {
            newArray[newArray.length - 1].data.push({
              id: item.id,
              title: item.title,
              delete:false
            });
          }
        });

        console.log(newArray);
        setData(newArray);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if(data.length==0){ 
      fetchData();
    }
    
  }, []); // passing empty de[endency array to run it only once]


  useEffect(()=>{
    console.log("rendered");  
  },[data])
  // handling delete button clicked
  const handleDeleteAction=(userId,id)=>{
    let id2 = id%10-1;
    if(id2===-1){
      id2 = 9;
    }
    const newData = [...data];
    newData[userId-1].data[id2].delete = !newData[userId-1].data[id2].delete;
    setData(newData);
  }

  return (
    <div className="App">
      <div className="createAlbum">CREATE NEW ALBUM</div>
      <div className="Animation"></div>
      <div className="cardWrapper">
        {data.map((item) => {
          return(
            <Card item={item} handleDeleteAction={handleDeleteAction} key={item.userId} />
          );
        })}
        </div>
    </div>
  );
}

export default App;

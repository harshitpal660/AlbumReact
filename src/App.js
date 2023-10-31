import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Components/Card";
import lottie from "lottie-web";
import animationData from "./Animation/Animation.json";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  // for storing API data
  const [data, setData] = useState([]);

  // for displaying loading animation
  const [loading, setLoading] = useState(false);

  // for displaying edit form
  const [displayEditModal, setDisplayEditModal] = useState(false);

  // for storing ID and userId of album so that we can edit it
  const [arr, setArr] = useState([]);

  // Text for storing new Title
  const [title, setTitle] = useState("");

  // Text for storing new id
  const [id, setId] = useState("");

  // To determine that we need to open create new card modal
  const [create, setCreate] = useState(false);

  // setting bird animations
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
              data: [{ id: item.id, title: item.title, delete: false }],
            });
          } else if (newArray[newArray.length - 1].userId === item.userId) {
            newArray[newArray.length - 1].data.push({
              id: item.id,
              title: item.title,
              delete: false,
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

    if (data.length == 0) {
      fetchData();
    }
  }, []); // passing empty dependency array to run it only once]

  useEffect(() => {
    // console.log("rendered");
  }, [data, displayEditModal]);

  // handling delete button clicked
  const handleDeleteAction = (userId, id) => {
    const newData = [...data];
    newData.map((item) => {
      if (item.userId === userId) {
        item.data.map((i) => {
          if (i.id === id) {
            i.delete = !i.delete;
          }
        });
      }
    });

    // let id2 = (id % 10) - 1;
    // if (id2 === -1) {
    //   id2 = 9;
    // }
    // const newData = [...data];
    // newData[userId - 1].data[id2].delete =
    //   !newData[userId - 1].data[id2].delete;
    setData(newData);
  };

  const handleDisplayEditModal = (userId, id) => {
    setDisplayEditModal(!displayEditModal);
    setArr([userId, id]);
    console.log("userId", userId);
    console.log("id", id);
  };

  // when user click on OK button
  const handleOK = () => {
    // when title is not "" and create in not true
    if (title != "" && !create) {
      const id = arr[1];
      const userId = arr[0];
      const newData = [...data];
      newData.map((item) => {
        if (item.userId === userId) {
          item.data.map((i) => {
            if (i.id === id) {
              i.title = title;
            }
          });
        }
      });
      console.log(newData);
      setData(newData);
    } else if (title != "" && create) {
      const userId = parseInt(id);
      const newData = [...data];

      // if you  selects same card in that case you just need to add a separate face of the same card

      let findSimilar = false;
      newData.map((item) => {
        if (item.userId === userId) {
          item.data.push({ id: parseInt(item.data[item.data.length-1].id)+1, title: title, delete: false });
          console.log(newData);
          findSimilar = true;
          setData(newData);
          // return;
        }
      });
      // console.log(newData);
      if(!findSimilar){newData.push({
        userId: userId,
        data: [{ id: 1, title: title, delete: false }],
      });}
      setData(newData);
    }

    console.log(create);
    if (create) {
      setCreate(!create);
    }
    setDisplayEditModal(!displayEditModal);
  };

  // when user click on cancel button
  const handleCancel = () => {
    setArr([]);
    setDisplayEditModal(!displayEditModal);

    console.log(create);
    if (create) {
      setCreate(!create);
    }
  };

  // function to handle create Album
  const handleCreateAlbum = () => {
    console.log(create);
    setDisplayEditModal(!displayEditModal);
    setCreate(!create);
  };

  return (
    <div className="App">
      {/* modal */}
      {displayEditModal && (
        <div className="modalForm">
          <div className="inputWrapper">
            <div className="d-flex flex-column">
              {create && (
                <input
                  type="text"
                  placeholder="user name "
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>
              )}
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="buttonWrapper">
            <div className="d-flex flex-row justify-content-center">
              <div onClick={handleCancel} className="button">
                cancel
              </div>
              <div onClick={handleOK} className="button">
                ok
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`${displayEditModal && "blurr"}`}>
        <div className="createAlbum" onClick={handleCreateAlbum}>
          CREATE NEW ALBUM
        </div>
        <div className="Animation"></div>
        <div className="cardWrapper">
          {data.map((item) => {
            return (
              <Card
                object={item}
                handleDeleteAction={handleDeleteAction}
                handleDisplayEditModal={handleDisplayEditModal}
                key={item.userId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

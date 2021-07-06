import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import "../Home/Home.css";
import { useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import firebase from "firebase";

function Home() {
  const [search, setsearch] = useState("");

  const { currentUser } = useAuth();
  // const byuser = currentUser.email;
  let username =
    currentUser.email.substr(0, currentUser.email.indexOf("@")) || " ";

  const [placename, setplacename] = useState("");
  const [cityname, setcityname] = useState("");
  const [country, setcountry] = useState("");
  const [typeofplace, settypeofplace] = useState("");
  const [userspostData, setuserspostData] = useState([]);

  const [error, seterror] = useState("");

  const getplacename = (e) => {
    setplacename(e.target.value);
  };
  const getcityname = (e) => {
    setcityname(e.target.value);
  };
  const getcountry = (e) => {
    setcountry(e.target.value);
  };
  const gettypeofplace = (e) => {
    settypeofplace(e.target.value);
  };

  // adding posts/feeds to firebase
  const addpost = async (e) => {
    e.preventDefault();

    await db.collection("posts").add({
      byuser: username,
      placename: placename,
      cityname: cityname,
      country: country,
      typeofplace: typeofplace,
      likes: 0,
      dislikes: 0,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    seterror("Please fill all the field");
  };

  const Searching = (event) => {
    const userinput = event.target.value;
    setsearch(userinput);
  };
  //getting feeds/posts from firebase

  const getfeeds = async () => {
    await db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (querySnapshot) {
        setuserspostData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  };
  useEffect(() => {
    getfeeds();
  }, []);

  //Hiding form

  const hideform = () => {
    const condition = document.getElementById("postform");
    if (condition.style.display === "none") {
      condition.style.display = "block";
    } else {
      condition.style.display = "none";
    }
  };

  return (
    <>
      <div>
        <div className="feed">
          <div className="feed__btncontainer">
            <button className="hideformbtn" onClick={hideform}>
              View Post
            </button>
          </div>
        </div>

        <div className="feed__inputcontainer">
          <form id="postform">
            <input
              type="text"
              placeholder="Place Name"
              value={placename}
              onChange={getplacename}
            />
            <input
              type="text"
              placeholder="City Name"
              value={cityname}
              onChange={getcityname}
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={getcountry}
            />
            <input
              type="text"
              value={typeofplace}
              placeholder="Type of Place"
              onChange={gettypeofplace}
            />

            <div className="feed__btnsubmitcontainer">
              <button
                // disabled={!typeofplace }
                type="submit"
                className="submitform"
                onClick={addpost}
                disabled={!placename || !cityname || !country || !typeofplace}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="search">
        <input
          className="search__by__name"
          type="text"
          placeholder="Search by Country Name"
          onChange={Searching}
          value={search}
        />
      </div>

      {true ? (
        userspostData
          .filter((value) => {
            console.log("value ==== ", typeof value.data.country);
            if (
              value.data.country.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            } else {
              <h1>No data found</h1>;
            }
          })
          .map(
            ({
              id,
              data: {
                byuser,
                placename,
                cityname,
                country,
                typeofplace,
                likes,
                dislikes,
              },
            }) => (
              <div className="post">
                <Posts
                  id={id}
                  byuser={byuser}
                  placename={placename}
                  cityname={cityname}
                  country={country}
                  typeofplace={typeofplace}
                  likes={likes}
                  dislikes={dislikes}
                  username={username}
                />
              </div>
            )
          )
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
}

export default Home;

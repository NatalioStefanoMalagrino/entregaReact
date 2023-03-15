import React, { useEffect } from "react";
import { useState } from "react";

const FetchingData = () => {
  const [posts, setPosts] = useState([]);

  let id = 20;

  //const {id} = useParams()

  //let obj = {
  //    userId: 1,
  //    title: "este es un nuevo post",
  //    body: "aca va la descripcion del post bla bla"
  //}

  //obtener datos
  useEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(getData);

    getData
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  //crear un post

  // useEffect(()=>{

  //     let createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
  //         method: "POST",
  //         headers:{
  //             //"authorization": "fdsafdsadfsafasfdDFADafdasf",
  //             "Content-type":"aplication-json"
  //         },
  //         body: JSON.stringify({
  //             userId: 1,
  //             title: "este es un nuevo post",
  //             body: "aca va la descripcion del post bla bla bla"
  //         })
  //     })

  //     createPost
  //         .then(res=> console.log("se creo el post", res))

  // }, [])

  useEffect(() => {
    let updatePost = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        //"authorization": "fdsafdsadfsafasfdDFADafdasf",
        "Content-type": "aplication-json",
      },
      body: JSON.stringify({
        userId: 1,
        title: "este se modifico",
        body: "aca va la descripcion del post bla bla bla",
      }),
    });

    updatePost.then((res) => console.log("se modifico el post", res));
  }, []);

  console.log(posts);

  return <div>FetchingData</div>;
};

export default FetchingData;

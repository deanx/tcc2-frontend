import React, { useState } from 'react';
import axios from 'axios';
import Draggable from 'react-draggable'

import Questionario from './posts/questionario.jsx';
import Post1 from './posts/post1.jsx';
import Post2 from './posts/post2.jsx';
import Post3 from './posts/post3.jsx';
import Post4 from './posts/post4.jsx';
import Post5 from './posts/post5.jsx';
import Post6 from './posts/post6.jsx';
import Post7 from './posts/post7.jsx';
import Agradecimento from './posts/agradecimento.jsx';

import { API_URL } from './constants.js';

import {
  useSteps
} from '@chakra-ui/react';


const steps = [
  { title: 'Post 1', description: '' },
  {  title: 'Post 2', description: '' },
  { title: 'Post 3', description: '' },
  { title: 'Post 4', description: '' },
  { title: 'Post 5', description: '' },
  { title: 'Post 6', description: '' },
  { title: 'Post 7', description: '' },
]

const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let startbutton = null;

function showViewLiveResultButton() {
  if (window.self !== window.top) {
    // Ensure that if our document is in a frame, we get the user
    // to first open it in its own tab or window. Otherwise, it
    // won't be able to request permission for camera access.
    document.querySelector(".contentarea").remove();
    const button = document.createElement("button");
    button.textContent = "View live result of the example code above";
    document.body.append(button);
    button.addEventListener("click", () => window.open(location.href));
    return true;
  }
  return false;
}

function startup() {
  if (showViewLiveResultButton()) {
    return;
  }
  video = document.getElementById("video");
  canvas = document.getElementById("canvas");
  photo = document.getElementById("photo");
  startbutton = document.getElementById("startbutton");
  
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
      window.videoEnabled = true;
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });

  video.addEventListener(
    "canplay",
    (ev) => {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height)) {
          height = width / (4 / 3);
        }

        video.setAttribute("width", width);
        video.setAttribute("height", height);
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        streaming = true;
      }
    },
    false,
  );
  clearphoto();
}

function clearphoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

function takepicture(emailaddress) {
  if(window.videoEnabled == true) {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png",1);

      let filename = emailaddress.replace("@", "at") + ".png"
      saveFile(data, filename);

      photo.setAttribute("src", data);
      
    } else {
      clearphoto();
    }
  } else {
    setTimeout(() => takepicture(emailaddress), 1000);
  }
  
}

function saveFile(recordedChunks, filename){
  const formdata = new FormData();
  formdata.append("blobs", recordedChunks);
  formdata.append("filename", filename);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  };

  fetch(API_URL + "/upload-picture", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  }


function App() {
  const [activeStep, setActiveStep] = React.useState(parseInt(localStorage.getItem("step")) || 1);

  function savePost(post, like, save, compartilhar, comentario, email, proximoPasso) {
    if(comentario == "") {
      alert("Insira um comentário");
      document.getElementById("comment").focus()
    }
    else {
      if(!email) email = localStorage.getItem("email");
      let data = JSON.stringify({
        "id": post,
        "post": post,
        "like": like.toString(),
        "save": save.toString(),
        "compartilhar": compartilhar.toString(),
        "comentario": comentario,
        "email": localStorage.getItem("email") || window.email
      });      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: API_URL + "/post",
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios.request(config)
      .then((response) => {
        takepicture(email + "-fim-post-" + post)
        setActiveStep(proximoPasso);
        localStorage.setItem("step", proximoPasso)
      })
      .catch((error) => {
        console.log(error)
        alert("Erro! Revise os dados e tente novamente!")
      });
    }
  }

  function startVideoReloaded() {
    if(!window.email && localStorage.getItem("email")) {
      setTimeout(()=>{
        if(document.getElementById("video")) startup()
          else {
          setTimeout(() => startVideoReloaded(), 2000)
        }
      }, 1000)
    }
  }

  startVideoReloaded();
  
  return (
    <>
      <Draggable
      defaultPosition={{x: 0, y: 0}}
      position={null}
      scale={1}
      display="inline"
      >
        <div className="camera" style={{"display":localStorage.getItem("email")?"blocl": "none"}} id="container-camera">
        <div>
          <video id="video" playsInline={true}>Video stream not available.</video>
        </div>
        </div>
      </Draggable>
        <canvas id="canvas" style={{"display":"none"}}> </canvas>
        <div className="output" style={{"display":"none"}}>
            <img id="photo" alt="The screen capture will appear in this box." />
        </div>
      { activeStep === 1 && <Questionario setActiveStep={setActiveStep} startup={startup} takepicture={takepicture} /> }
      { activeStep === 2 && <Post1 setActiveStep={setActiveStep} savePost={savePost}/> }
      { activeStep === 3 && <Post2 setActiveStep={setActiveStep} savePost={savePost} /> }
      { activeStep === 4 && <Post3 setActiveStep={setActiveStep} savePost={savePost} /> }
      { activeStep === 5 && <Post4 setActiveStep={setActiveStep} savePost={savePost} /> }
      { activeStep === 6 && <Post5 setActiveStep={setActiveStep} savePost={savePost} /> }
      { activeStep === 7 && <Post6 setActiveStep={setActiveStep} savePost={savePost} /> }
      { activeStep === 8 && <Post7 setActiveStep={setActiveStep} savePost={savePost} /> }
      { activeStep === 9 && <Agradecimento /> }

    </>
  )
}

export default App

// This file is just a bunch of methods I use extensively.  I called it dimsum
// because is like a said tasty bun, full of nice and tasty stuff inside :)

/* global URL */

function makeGetStreamX(width, height, buttonName, gotStreamFunction) {
  return function() {
    var constraintsWidthXHeight = {
      "audio": false,
      "video": {
        "mandatory": {
          "minWidth": width,
          "maxWidth": width,
          "minHeight": height,
          "maxHeight": height
        },
        "optional": []
      }
    };
    navigator.webkitGetUserMedia(constraintsWidthXHeight,
                                 gotStreamFunction,
                                 getUserMediaFailedCallback);
    document.getElementById(buttonName).disabled = true;
  };
}

function createButton(id, text, onClick) {
  const button = document.createElement("input");
  button.id = id;
  button.type = "button";
  button.value = text;
  button.onclick = onClick;
  document.body.appendChild(button);
  console.log("Button " + id + " created");
}

function createVideoTag(id, width, height, video_source) {
  const videoTag = document.createElement('video');
  if (video_source != '')
    videoTag.src = URL.createObjectURL(video_source);
  videoTag.id = id;
  videoTag.width = width;
  videoTag.height = height;
  document.body.appendChild(videoTag);
  videoTag.autoplay = true;
  console.log("VideoTag " + id + " created");
}

function getUserMediaFailedCallback(error) {
  console.error('User media request denied with error code ' + error.code);
}

function recorderOnStop() {
  console.log('recorderOnStop fired');
}

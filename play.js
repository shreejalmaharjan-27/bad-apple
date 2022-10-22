import { Checkboxland } from './index.js';

const width = 68;
const height = 51;
const dimensions = `${width}x${height}`;
let cbl = undefined;

function init(existingCbl) {
  cbl = !!existingCbl ? existingCbl : new Checkboxland({ dimensions });

  const videoEl = document.querySelector('video');

  cbl.renderVideo(videoEl);

  return cbl
}

function cleanUp() {
  cbl.renderVideo.cleanUp()
}

export {
  init,
  cleanUp,
  dimensions,
}
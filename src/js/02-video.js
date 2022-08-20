import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});

newCurrentTime();

player.on('timeupdate', throttle(playerTimeUpdate, 1000));

function playerTimeUpdate() {
  player
    .getCurrentTime()
    .then(seconds => localStorage.setItem('videoplayer-current-time', seconds));
}

function newCurrentTime() {
  const newTimeUpdate = localStorage.getItem('videoplayer-current-time');
  if (newTimeUpdate) {
    player.setCurrentTime(newTimeUpdate);
  }
}

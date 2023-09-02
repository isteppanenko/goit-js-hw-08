import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = throttle(data => {
  console.log(data.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}, 1000);
player.on('timeupdate', onPlay);

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(currentTime);

const button = document.querySelector("button");
const INITIAL_TEXT = "Stopped. Click to process your microphone.";
let isPlaying = false;
let sound;

button.innerText = INITIAL_TEXT;

const initSound = callback => {
  if (sound) {
    callback();
    return;
  }

  /**
   * IMPORTANT:
   * When accessing AudioContext without a user gesture, a browser console displays this warning:
   * "The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page."
   * See this link for more: https://goo.gl/7K7WLu
   * Without this line, no "microphone" sounds could be heard
   * I.e. this wouldn't work:
   * const voice = new Pizzicato.Sound({ source: 'input' });
   */
  Pizzicato.context.resume();

  sound = new Pizzicato.Sound(
    {
      source: "input"
    },
    callback
  );

  sound.addEffect(
    new Pizzicato.Effects.Delay({
      feedback: 0.1,
      time: 0.5,
      mix: 0.5
    })
  );

  // sound.addEffect(
  //   new Pizzicato.Effects.Distortion({
  //     gain: 0.4
  //   })
  // );
};

const onClick = () => {
  initSound(() => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      button.innerText = "Processing. Click to stop.";
      sound.play();
    } else {
      button.innerText = INITIAL_TEXT;
      sound.stop();
    }
  });
};

button.addEventListener("click", onClick);

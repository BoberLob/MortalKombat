export const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${timeToZeroFormat(hours)}:${timeToZeroFormat(minutes)}`;
}

const timeToZeroFormat = time => time < 10 ? `0${time}` : time;

export const getRandomNumber = max => Math.floor(Math.random() * max);

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getLifeBarColor = hp => {
  let color = "";
  switch (!!hp) {
    case hp >= 75:
      color = "green";
      break;
    case hp >= 50 && hp <= 74:
      color = "yellow";
      break;
    case hp >= 25 && hp <= 49:
      color = "orange";
      break;
    case hp <= 24:
      color = "red";
      break;
    default:
      color = "red";
      break;
  }
  return color;
}
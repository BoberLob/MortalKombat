class RestApi {
  constructor() {
    this.host = 'https://reactmarathon-api.herokuapp.com/api/mk';
  }

  getAllFighters = async () =>
    await fetch(`${this.host}/players`).then(res => res.json());

  getOpponent = async () =>
    await fetch(`${this.host}/player/choose`).then(res => res.json());

  postFightProcess = async (hit, defence) => {
    return await fetch(`${this.host}/player/fight`, {
      method: 'POST',
      body: JSON.stringify({
        hit,
        defence,
      }),
    }).then(res => res.json());
  };
}

const RestApiClass = new RestApi();

export default RestApiClass;

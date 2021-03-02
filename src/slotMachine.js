export default class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;

    const isWinner =
      Math.random() < 0.5 && Math.random() < 0.5 && Math.random() < 0.5;

    if (isWinner) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

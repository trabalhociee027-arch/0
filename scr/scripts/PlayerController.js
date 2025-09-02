export class PlayerController {
  constructor(name) {
    this.name = name;
    this.empatia = 0;
    this.skills = [];
  }

  move(direction) {
    console.log(`${this.name} se moveu para ${direction}`);
  }

  levelUpEmpatia() {
    this.empatia += 1;
    console.log(`${this.name} aumentou Empatia para ${this.empatia}`);
  }
}

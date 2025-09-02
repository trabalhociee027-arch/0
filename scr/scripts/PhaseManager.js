export class PhaseManager {
  constructor(phases) {
    this.phases = phases;
    this.currentPhase = 0;
  }

  nextPhase() {
    if(this.currentPhase < this.phases.length - 1) {
      this.currentPhase++;
      console.log(`Fase atual: ${this.phases[this.currentPhase].name}`);
    } else {
      console.log("Jogo concluído!");
    }
  }
}

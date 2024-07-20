export class SequenceGenerator {
  private static instance: SequenceGenerator;
  private sequence = 1;

  constructor() {
    if (SequenceGenerator.instance) return SequenceGenerator.instance;

    SequenceGenerator.instance = this;
  }

  static get sequence() {
    return new SequenceGenerator().sequence++;
  }
}

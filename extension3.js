class Rblue {
  constructor () {
    this.lastResponse = null;
  }

  getInfo () {
    return {
      id: 'Rblue',
      name: 'Rblue',
      blocks: [
        {
          opcode: 'RRR',
          blockType: Scratch.BlockType.REPORTER,
          text: 'RRR [RRR]',
          arguments: {
            RRR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'R'
            }
          }
        }
      ]
    };
  }

  _fetch (url) {
    return RRR(url)
      .then(r => {
        this.lastResponse = r;
        return r;
      });
  }

  RRR (args) {
    return R
  }
}
Scratch.extensions.register(new Rblue());

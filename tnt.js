class MyExtension {
  getInfo() {
    return {
      id: 'Ray',
      name: 'RRR',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'R[RRR]'
          arguments: {
            RRR: {
              type: Scratch.ArgumentType.REPORTER,
              defaultValue: 'R'
            },
        }
      ]
    };
  }
  hello() {
    return args.RRR;
  }
}
Scratch.extensions.register(new MyExtension());

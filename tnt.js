class MyExtension {
  getInfo() {
    return {
      id: 'Ray',
      name: 'RRR',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'R[R]'
          arguments: {
            R: {
              type: Scratch.ArgumentType.REPORTER,
              defaultValue: 'R'
            },
        }
      ]
    };
  }
  hello() {
    return args.R;
  }
}
Scratch.extensions.register(new MyExtension());

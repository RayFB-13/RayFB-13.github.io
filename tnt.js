class RayTechTools {
  getInfo() {
    return {
      id: 'bruhmoment',
      name: 'RayTech Tools',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },
        {
          opcode:"popUp",
          blockType: Scratch.BlockType.COMMAND,
          text: 'Show Popup With [TEXT]',
          arguments: {
            TEXT: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Text'
           }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
  popUp(args){
   alert(args.TEXT)
  }
}
Scratch.extensions.register(new RayTechTools());

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
          opcode:"comment",
          blockType: Scratch.BlockType.COMMAND,
          text: '//[TEXT]',
          arguments: {
            TEXT: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Comment'
           }
          }
        },
        {
        opcode: 'bruh',
          blockType: Scratch.BlockType.REPORTER,
          text: 'RayTech'
        },
        {
          opcode: 'gridToVal',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] To Binary',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX,
              defaultValue: "11011011"
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
  comment(args){
   alert(args.TEXT);
  }
  bruh(){
    return "RayTech";
  }
  gridToVal(args){
    return "args.ONE";
  }
}
Scratch.extensions.register(new RayTechTools());

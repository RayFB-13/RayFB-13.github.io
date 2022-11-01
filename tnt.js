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
          text: "‭‭‭"‭‭
        },
        {
          opcode: 'gridToVal',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] To Binary',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX,
              defaultValue: "0"
            }
          }
        },
        {
        opcode: 'whatThePoint',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "0"
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
    return null;
  }
  gridToVal(args){
    return args.ONE;
  }
  whatThePoint(args){
    return args.ONE;
  }
}
Scratch.extensions.register(new RayTechTools());

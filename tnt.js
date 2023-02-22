class RayTechTools {
  getInfo() {
    return {
      id: 'bruhmoment',
      name: 'RayTech Tools',
      blocks: [
        {
          opcode: 'test',
          blockType: Scratch.BlockType.REPORTER,
          text: 'When [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: "0"
            }
          }
        },
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
        },
        {
          opcode:"block",
          blockType: Scratch.BlockType.COMMAND,
          text: 'The RayTech Block'
          }
      ]
    };
  }
  onListener({ ONE }) {
		const self = this;
		if ((this.isRunning) && (this.socketListeners.hasOwnProperty(String(ONE)))) {
			return String(ONE);
		} else {
			return false;
		};
	};
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  };
  comment(args){
   alert(args.TEXT);
  };
  gridToVal(args){
    return args.ONE;
  };
  whatThePoint(args){
    return args.ONE;
  };
  whatThePoint(){
    alert();
  };
}
Scratch.extensions.register(new RayTechTools());

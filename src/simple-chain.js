const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let valueStr;
    if (value === undefined) {
        valueStr = '';
    } else if (typeof value === 'object' && value !== null) {
        valueStr = value.toString();
    } else {
        valueStr = String(value);
    }
    this.chain = [...this.chain, valueStr];
    return this;
  },
  removeLink(position) {
    if ((position ^ 0) === position && position > 0 && position < this.getLength()) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('Invalid argument');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainStr = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;

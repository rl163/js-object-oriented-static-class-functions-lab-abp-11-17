'use strict';
class Question {
  static _All() {
    return this._All
  }

  static Find(id){
    return this.All()[id-1]
  }

  constructor(content){
    this.content = content;
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }
}

Questions._All=[]

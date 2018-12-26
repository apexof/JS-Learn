function Voter(options) {
  const elem = this._elem = options.elem;
  this._voteElem = elem.querySelector('.vote');
  elem.onmousedown = () => false;
  elem.onclick = this._onClick.bind(this);
}

Voter.prototype._onClick = function(event) {
  if (event.target.closest('.down')) {
    this._voteDecrease();
  } else if (event.target.closest('.up')) {
    this._voteIncrease();
  }
};

Voter.prototype._voteIncrease = function() {
  this._voteElem.innerHTML = +this._voteElem.innerHTML + 1;
};

Voter.prototype._voteDecrease = function() {
  this._voteElem.innerHTML = +this._voteElem.innerHTML - 1;
};

Voter.prototype.setVote = function(vote) {
  this._voteElem.innerHTML = +vote;
};

function StepVoter(options) {
  Voter.call(this, options);
  this._step = options.step;
}

// задаём наследование
StepVoter.prototype = Object.create(Voter.prototype);
StepVoter.prototype.constructor = StepVoter;

StepVoter.prototype._voteIncrease = function() {
  // Voter.prototype._voteIncrease.call(this);
  this._voteElem.innerHTML = +this._voteElem.innerHTML + this._step;
};

StepVoter.prototype._voteDecrease = function() {
  this._voteElem.innerHTML = +this._voteElem.innerHTML - this._step;
};

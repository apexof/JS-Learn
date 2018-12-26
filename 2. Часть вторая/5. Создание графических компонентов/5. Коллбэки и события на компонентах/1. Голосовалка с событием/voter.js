function Voter(options) {
  const elem = options.elem;
  const voteElem = elem.querySelector('.vote');
  elem.onclick = (event) => {
    if (event.target.closest('.down')) {
      voteDecrease();
    } else if (event.target.closest('.up')) {
      voteIncrease();
    }
  };
  elem.onmousedown = () => false;
  // ----------- методы -------------

  function voteDecrease() {
    setVote(+voteElem.innerHTML - 1);
  }

  function voteIncrease() {
    setVote(+voteElem.innerHTML + 1);
  }

  function setVote(vote) {
    voteElem.innerHTML = +vote;
    const eve = new CustomEvent('change', {
      bubbles: true,
      detail: vote
    });
    elem.dispatchEvent(eve);
  }
  this.setVote = setVote;
}

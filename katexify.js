var options = {
  delimiters: [
    {left: "$$", right: "$$", display: true},
    {left: "\\[", right: "\\]", display: true},
    {left: "\\(", right: "\\)", display: false},
    {left: "$", right: "$", display: false}
  ]
};

renderMathInElement(document.body, options);

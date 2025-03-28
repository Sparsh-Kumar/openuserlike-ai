(function () {
  const script = document.createElement('script');
  script.src = 'http://localhost:9090/widget.bundle.js'; // Reference the bundled file
  script.onload = function () {
    const widget = document.createElement('userlike-widget');
    document.body.appendChild(widget);
  };
  document.head.appendChild(script);
}());

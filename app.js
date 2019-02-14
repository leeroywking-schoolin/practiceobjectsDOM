'use strict';

var days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

var alkiUl = document.getElementById('alkibeach');
var goldenGardensUl = document.getElementById('gg');
var edmondsUl = document.getElementById('edmondsbeach');

var aliki = {
  name: 'Alki',
  neighborhood: 'West Seattle',
  seagullCount: [212, 44, 34, 14, 15, 23, 42],
  render: function () {
    for (var i = 0; i < days.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
      alkiUl.appendChild(liEl);
    }
  }
};

var goldenGardens = {
  name: 'Golden Gardens',
  neighborhood: 'Crown Hill',
  seagullCount: [
    22,
    440,
    324,
    5,
    15,
    3,
    423
  ],
  render: function () {
    for (var i = 0; i < days.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
      goldenGardensUl.appendChild(liEl);
    }
  }
}
var edmondsBeach = {
  name: 'Edmonds Beach',
  neighborhood: 'North Seattle',
  seagullCount: [12, 4, 3, 4, 5, 2, 4],
  render: function () {
    for (var i = 0; i < days.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls.`;
      edmondsUl.appendChild(liEl);
    }
  }
};



alki.render();
goldenGardens.render();
edmondsBeach.render();

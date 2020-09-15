var movie_database = [{
    title: 'Hereditary',
    rating: 9 + '/' + 10,
    seen: true
  },
  {
    title: 'Mulan',
    rating: 7 + '/' + 10,
    seen: false
  },
  {
    title: 'Independence day',
    rating: 8 + '/' + 10,
    seen: true
  }
];

for (var i = 0; i < movie_database.length; i++) {
  if (movie_database[i]['seen']) {
    console.log(movie_database[i]['title'] + ': ' + movie_database[i]['seen']);
  } else {
    console.log(movie_database[i]['title'] + ' ' + 'has not been seen')
  }

}

// with forEACH
movie_database.forEach(function (item) {
  console.log(result(item));
})

function result(item) {
  var result = 'you have '
  if (item['seen']) {
    result += 'watched ' + "\"" + item['title'] + "\"- ";
  } else {
    result += 'not watched ' + "\"" + item['title'] + "\"- ";
  }
  result += item['rating']
  return result;
}
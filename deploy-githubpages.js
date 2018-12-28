var ghpages = require('gh-pages');

ghpages.publish('public',{
  branch: 'master',
  repo: 'https://' + process.argv[2] + '@github.com/ashleybeshir/ashleybeshir.github.io'
}, function(err) {
    console.log(err);
});
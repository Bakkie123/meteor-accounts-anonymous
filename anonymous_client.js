(function() {
  Meteor.loginAnonymously = function(fn) {
    Meteor.call('login', {anonymous: true}, function(err, result) {
      if (err) 
        throw err
      Accounts.makeClientLoggedIn(result.id, result.token);
      fn && fn();
    });
  }
})();

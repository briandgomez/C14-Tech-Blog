const withAuth = (req, res, next) => {
    //if the session id exists redirect them to the login page
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  
module.exports = (req, res, next) => {
    const { restaurant_name, password } = req.body;
  
    // function validEmail(userEmail) {
    //   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    // }
  
    if (req.path === "/register") {
      console.log(!restaurant_name.length);
      if (![restaurant_name, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } //else if (!validEmail(email)) {
        //return res.status(401).json("Invalid Email");
      //}
    } else if (req.path === "/login") {
      if (![restaurant_name, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
       }// else if (!validEmail(email)) {
    //     return res.status(401).json("Invalid Email");
    //   }
    }
  
    next();
  };
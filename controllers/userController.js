const uniqid = require("uniqid");
let users = [
  {
    id: 1,
    qid: uniqid(),
    name: "Anmol",
    age: 5,
  },
  {
    id: 2,
    qid: uniqid(),
    name: "Div",
    age: 15,
  },
  {
    id: 3,
    qid: uniqid(),
    name: "Abc",
    age: 25,
  },
];

// @desc Get all users
// @route GET /users
// @access public
const getAllUsers = (req, res) => {
  return res.status(200).json({ users, message: "users all get" });
};

// @desc create a user
// @route POST /users
// @access public
const postUser = (req, res) => {
    const data = req?.body;

    if (!data || !data?.name || !data.age) {
      return res.status(400).json({ message: "bad request" });
    }

    let temp = {
      id: users.length + 1,
      qid: uniqid(),
      name: data?.name,
      age: data?.age,
    };

    users.push(temp);

    return res.status(201).json({ users, message: "user created" });
  };


// @desc Get a user
// @route GET /users/:id
// @access public
const getUser = (req, res) => {
  let user = users.find((item) => item?.id === parseInt(req?.params?.id));
  if (!user) {
    return res
      .status(404)
      .json({ message: `the user with ${req.params.id} does not exist.` });
  }

  res.status(200).json({ user, message: `get user for id: ${req.params.id}` });
};

// @desc update a user
// @route PUT /users/:id
// @access public
const putUser = (req, res) => {
  const data = req?.body;
  // look for the user
  //not exist return 404
  let user = users.find((item) => item?.id === parseInt(req?.params?.id));
  if (!user) {
    return res
      .status(404)
      .json({ message: `the user with ${req.params.id} does not exist.` });
  }

  // validate user
  //not valid return 400
  if (!data || !data?.name || !data.age) {
    return res.status(400).json({ message: "bad request" });
  }

  user.name = data?.name;
  user.age = data?.age;
  return res
    .status(200)
    .json({ user, message: `user updated for id: ${req.params.id}` });
};

// @desc delete a user
// @route DELETE /users/:id
// @access public
const deleteUser = (req, res) => {
  // look for the user
  //not exist return 404
  let user = users.find((item) => item?.id === parseInt(req?.params?.id));
  if (!user) {
    return res
      .status(404)
      .json({ message: `the user with ${req.params.id} does not exist.` });
  }

  let index = users.indexOf(user);
  users.splice(index, 1);
  return res
    .status(200)
    .json({ user, message: `user deleted for id: ${req.params.id}` });
};

module.exports = { getAllUsers, getUser, putUser, deleteUser, postUser };

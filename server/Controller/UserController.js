const postgreSqlConnect = require("../dbConnect");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const text = "SELECT * FROM users";
      const data = await postgreSqlConnect.query(text);
      res.json(data.rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },
};

module.exports = userController;

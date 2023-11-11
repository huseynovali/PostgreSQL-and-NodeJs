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
  addUser: async (req, res) => {
    const { username, useremail, password } = req.body;
    try {
      const text =
        "INSERT INTO users(username, useremail, userpassword) VALUES ($1, $2, $3) RETURNING *";
      const values = [username, useremail, password];

      const data = await postgreSqlConnect.query(text, values);

      res.json(data.rows[0]); // Eklendikten sonra kullanıcının bilgilerini geri dönmek istiyorsanız.
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Failed to add user" });
    }
  },
};

module.exports = userController;

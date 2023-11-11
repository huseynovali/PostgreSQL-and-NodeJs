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

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const text = "DELETE FROM users WHERE id = $1 RETURNING *";
      const values = [userId];

      const data = await postgreSqlConnect.query(text, values);

      if (data.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({
          message: "User deleted successfully",
          deletedUser: data.rows[0],
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const { username, useremail, password } = req.body;

    try {
      const text =
        "UPDATE users SET username = $1, useremail = $2, userpassword = $3 WHERE id = $4 RETURNING *";
      const values = [username, useremail, password, userId];

      const data = await postgreSqlConnect.query(text, values);

      if (data.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({
          message: "User updated successfully",
          updatedUser: data.rows[0],
        });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  },
};

module.exports = userController;

const User = require('../models/User');
const Material = require('../models/Material'); // Ensure the correct model is imported
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to create a JWT token
const createToken = (user, expiresIn) => { 
  const { id, email, username } = user;
  const secret = process.env.JWT_SECRET || 'fallbackSecret'; // Use the same fallback method
  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    // Fetches all users
    users: async () => await User.find({}),
    // Fetches a single user by ID
    user: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) throw new Error('User not found');
      return user;
    },
    // Fetches all materials
    getMaterials: async () => {
      try {
        return await Material.find();
      } catch (error) {
        throw new Error('Error fetching materials');
      }
    },
    // Fetches a single material by ID
    getMaterialById: async (_, { id }) => {
      try {
        return await Material.findById(id);
      } catch (error) {
        throw new Error('Material not found');
      }
    }
  },
  Mutation: {
    // Handles user login
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) throw new Error('Invalid password');
      return {
        userId: user.id,
        token: createToken(user, '2h'),
        tokenExpiration: 2
      };
    },
    // Adds a new user
    addUser: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('User already exists');
      const hashedPassword = await bcrypt.hash(password, 12); // Hash the password
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
      const result = await newUser.save();
      return result;
    },
    // Updates an existing user
    updateUser: async (_, { id, username, email }) => {
      const updates = {};
      if (username !== undefined) updates.username = username;
      if (email !== undefined) updates.email = email;
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    },
    // Deletes an existing user
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw new Error('User not found');
      return deletedUser;
    },
    // Adds a new material
    addMaterial: async (_, { partName, partNumber, description, quantInStock, unit }) => {
      try {
        const newMaterial = new Material({
          partName,
          partNumber,
          description,
          quantInStock,
          unit
        });
        return await newMaterial.save();
      } catch (error) {
        console.error("Error adding material:", error);
        throw new Error('Error adding material');
      }
    },
    // Updates an existing material
    updateMaterial: async (_, { id, partName, partNumber, description, quantInStock, unit }) => {
      try {
        const updatedMaterial = await Material.findByIdAndUpdate(
          id,
          { partName, partNumber, description, quantInStock, unit },
          { new: true }
        );
        return updatedMaterial;
      } catch (error) {
        throw new Error('Error updating material');
      }
    },
    // Removes a material
    removeMaterial: async (_, { id }) => {
      try {
        const removedMaterial = await Material.findByIdAndRemove(id);
        return removedMaterial;
      } catch (error) {
        throw new Error('Error removing material');
      }
    }
  }
};

module.exports = resolvers;

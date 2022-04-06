const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            const userData = await User.findOne({ _id: context.user._id })
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })

                return userData;
            }

            throw new AuthenticationError('Not Logged in!')
        },

        users: async (parent, args) => {
            return User.find();
        },
    },

    Mutation : {
        login: async(parent, { email, password }) => {
            const user = await User.findOne({email})

            if(!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);
            return { token, user };

        }
    }
}

module.exports = resolvers;
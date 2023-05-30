const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, That sounds like something I want to get into."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Voice assistants have become an integral part of my daily routine. They make life so much easier! Can't wait to see what new features and advancements they'll bring."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I'm really excited about the future of electric vehicles and self-driving cars. It's amazing how technology is reshaping the way we travel. Can't wait to own one!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Blockchain has so much potential outside of cryptocurrencies. Its ability to provide transparency and security in various industries is truly impressive. Exciting times ahead!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "AR is changing the game! It's fascinating to see how it's being integrated into social media platforms. I love playing around with AR filters and making my posts more interactive."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is incredible! The potential of AI in healthcare is mind-boggling. I can't wait to see how it continues to revolutionize the industry."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
const [Comment] = require('../Models');
const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "That is insane! He is always doing some crazy stuff, but I cannot wait to see how it works."
    },

    {
        user_id: 2,
        post_id: 1,
        comment_text: "Yay! I am so excited to see what news people post about on here."
    },

    {
        user_id: 3,
        post_id: 2,
        comment_text: "That is so true, I use Chat GPT all the time. It is so conveinent and actually gives some pretty good ideas."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
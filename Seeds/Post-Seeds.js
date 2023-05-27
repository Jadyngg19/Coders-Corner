const {Post} = require('../Models');
const postData = [
    {
        title: "Coder's Corner Has Been Released to the Public!",
        post_content: "Coder's Corner is this website you are currently on, which allows you to post your thoughts related to coding and comment on other people's posts.",
        user_id: 1
    },

    {
        title: "Chat GPT - The World's Up and Coming AI",
        post_content: "Welcome to the world of ChatGPT, an advanced language model designed to assist and engage with users in natural and meaningful conversations. Developed by OpenAI, ChatGPT harnesses the power of artificial intelligence to provide accurate information, creative solutions, and engaging interactions.",
        user_id: 2
    },

    {
        title: "Elon Musk is at it Again! It Seems he has Developed a Neuralink?",
        post_content: "In the realm of groundbreaking technological advancements, few figures have captured the world's imagination quite like Elon Musk. Known for his audacious endeavors, Musk's Neuralink project represents a remarkable leap forward in the intersection of neuroscience and computer science. With the ambitious goal of merging human brains with artificial intelligence, Neuralink aims to revolutionize the way we interact with technology, potentially unlocking new frontiers of human potential.",
        user_id: 3
    }
]

const seedPosts = () => Post.beforeBulkCreate(postData);
module.exports = seedPosts;

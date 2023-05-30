const { Post } = require('../models');

const postData = [
    {
        title: "AI-powered robot successfully performs surgery on a patient!",
        post_content: "In this blog post, we explore the significant advancements in artificial intelligence (AI) technology within the healthcare industry. We discuss how AI is revolutionizing medical diagnosis, treatment, and patient care. The recent event highlights a groundbreaking achievement where an AI-powered robot successfully performed a complex surgery, demonstrating the immense potential of AI in healthcare.",
        user_id: 3
    },
    {
        title: "Blockchain Technology: Beyond Cryptocurrency",
        post_content: "In this blog post, we explore the potential applications of blockchain technology beyond cryptocurrency. We discuss how blockchain offers secure and transparent solutions in various sectors, such as supply chain management, healthcare, and finance. The recent event highlights a government agency's adoption of blockchain for secure document verification, demonstrating the trust and efficiency blockchain brings to traditional processes.",
        user_id: 1
    },
    {
        title: "Popular social media platform introduces AR filters for user-generated content",
        post_content: "This blog post focuses on augmented reality (AR) technology and its impact on enhancing real-world experiences. We delve into how AR is changing industries like gaming, marketing, and social media. The recent event showcases a popular social media platform's introduction of AR filters for user-generated content, enabling users to add interactive and immersive elements to their posts.",
        user_id: 2

    },
    {
        title: "The Growing Influence of Voice Assistants in Everyday Life",
        post_content: "In this blog post, we explore the increasing influence of voice assistants, such as Amazon Alexa and Google Assistant, in our everyday lives. We discuss how voice-controlled devices are transforming the way we interact with technology and simplifying daily tasks. The recent event highlights the record-breaking sales of voice-controlled smart home devices during the holiday season, indicating the growing popularity and acceptance of voice assistants.",
        user_id: 5
    },
    {
        title: "The Future of Transportation: Electric and Self-Driving Vehicles",
        post_content: "This blog post delves into the future of transportation, focusing on the emergence of electric vehicles (EVs) and self-driving cars. We discuss the benefits of EVs for reducing carbon emissions and the latest advancements in autonomous vehicle technology. The recent event showcases a major car manufacturer's unveiling of a fully autonomous electric car, signaling a significant milestone in the transportation industry.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
import React from 'react';
import '../CSS/Additional.css'

function Additional() {
    const images = [
        "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
        "https://emarsys.com/app/uploads/2020/03/real-ai.jpg",
        "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
        "https://emarsys.com/app/uploads/2020/03/real-ai.jpg",
        "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
        "https://emarsys.com/app/uploads/2020/03/real-ai.jpg",
        "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
        "https://emarsys.com/app/uploads/2020/03/real-ai.jpg",
    ];
    const mlimages = [
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
    ]
    const dpimages = [
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
    ]

    return (
        <div className="page-container">
            <h1>Exploring Technology</h1>
            <section className="attention-catcher">
                <h2>Artificial Intelligence</h2>
                <div className="scroll-container">
                    {images.map((image, index) => (
                        <img src={image} alt={"AI Image " + (index + 1)} key={index} />
                    ))}
                </div>
                <p>Artificial intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making.</p>
            </section>
            <section className="mid-section">
                <h2>Machine Learning</h2>
                <div className="scroll-container">
                    {mlimages.map((image, index) => (
                        <img src={image} alt={"AI Image " + (index + 1)} key={index} />
                    ))}
                </div>
                <p>Machine learning is a subset of AI that involves training algorithms to learn from data and improve their performance over time. It has applications in areas such as image and speech recognition, natural language processing, and predictive analytics.</p>
            </section>
            <section className="last-section">
                <h2>Deep Learning</h2>
                <div className="scroll-container">
                    {dpimages.map((image, index) => (
                        <img src={image} alt={"AI Image " + (index + 1)} key={index} />
                    ))}
                </div>
                <p>Deep learning is a subset of machine learning that involves the use of neural networks to analyze and interpret data. It has applications in areas such as computer vision, natural language processing, and speech recognition.</p>
            </section>
        </div>
    );
}

export default Additional;
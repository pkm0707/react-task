import React from "react";
import PageContent from "./PageContent";

function All() {
  const AllData = [
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-High-Paying-IT-Jobs-For-Arts-Students.webp",
      title: "7 Best High-Paying IT Jobs For Arts Students",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Entry-Level-Tech-Jobs-with-No-Experience-Needed-2023-1.png",
      title: "Top Entry-Level Tech Jobs with No Experience Needed in 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/The-Role-of-Continuous-Learning-in-Tech-Hiring-feature-image-2048x1024.png",
      title: "The Role of Continuous Learning in Tech Hiring",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title: "",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg",
      title: "Impact of Certification Programs on Hiring Data Scientists",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn 2023",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
      title: "Top 13 Product Based Companies for AI Freshers",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      title: "Best 11 Product-Based Companies for Product Managers in India",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp",
      title: "Best Product-Based Companies for Game Developers in 2023",
    },
  ];
  return (
    <div class="page-container">
      <div class="card-container">
        {AllData.map((data, index) => (
          <PageContent Key={index} image={data.image} title={data.title} />
        ))}
      </div>
    </div>
  );
}

export default All;
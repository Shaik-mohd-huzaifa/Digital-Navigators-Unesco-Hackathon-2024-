import { useSelector } from "react-redux"
import "./Forum.styles.scss"
import { categorySelector } from "../../store/forum/forum.selector"
import { Article } from "../Article/Article.component";
import { MdPublish } from "react-icons/md";

const articles = [
    {
      id: 1,
      title: "Understanding Misinformation",
      body: "How to identify fake news and false information.",
      image: "/images/misinformation.jpg",
    },
    {
      id: 2,
      title: "Fact-Checking Techniques",
      body: "Tools and strategies for verifying information sources.",
      image: "/images/facts.jpg",
    },
    {
      id: 3,
      title: "Media Bias",
      body: "Recognizing and understanding bias in different media outlets.",
      image: "/images/mediabias.jfif",
    },
    {
      id: 4,
      title: "Impact of Social Media on News Consumption",
      body: "How social media influences public perception.",
      image: "/images/social.avif",
    },
    {
      id: 5,
      title: "Digital Footprint",
      body: "How online activities affect privacy and reputation.",
      image: "/images/footprint.jfif",
    },
  ];

export const Forum = () => {
    const categories = useSelector(categorySelector)
    return (
        <div className="forum-container">
          <div className="header">
            <h2>Media and Literacy Forum</h2>
            </div>
            <div className="category-container">
                <div className="category-header">
                <h3>Categories</h3>
                <button><MdPublish/> Publish</button>
                </div>
                {
                    categories.map((category, index) => 
                <div key={index} className="category">
                        <div className="image-container">
                        <img src={`/icons/${category["category"]}.png`}/>
                        </div>
                        <div className="title-container">
                        <p className="title">{category["category"]}</p>
                        <p className="publications">Publications: {category["publications"]}</p>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className="articles">
            {
                articles.map(article => (
                    <Article body={article.body} key={article.id} image={article.image} title={article.title}/>
                ))
            }
            </div>
        </div>
    )
}
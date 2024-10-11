import "./Article.styles.scss";

export const Article = ({ title, body, image }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-body">
          {body}
        </p>
        <button className="article-button">Read More</button>
      </div>
    </div>
  );
};

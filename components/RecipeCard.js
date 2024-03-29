import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>

      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} to prepare.</p>
        </div>
        <div className="actions">
          <Link href={"/recipes/" + slug}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
      {/* styled jsx */}
      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          font-size: 1.2rem;
          margin: 0;
          color: #777;
        }
        .actions {
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          font-size: 1.1rem;
          background: #00994d;
          padding: 10px 18px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;

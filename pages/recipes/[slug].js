import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

//getStaticPaths-func
//get paths
export const getStaticPaths = async () => {
  //get all of the items
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    //return an object for each path
    return {
      params: { slug: item.fields.slug },
    };
  });

  //array of path-objects that next.js will use to build the static pages
  return {
    paths: paths,
    //show 404 instead of fallback page
    fallback: false,
    //paths: [{ params: { slug: "" } }, {}],
  };
};

//getStaticProps-func
//get single item-data based on the page we are on
//params = destructured from context-object
export const getStaticProps = async ({ params }) => {
  //get all of the items
  //always array even if only one slug matches
  //items = destructured from res
  const { items } = await client.getEntries({
    content_type: "recipe",
    //the field we want
    "fields.slug": params.slug,
  });
  //return 1st item
  return {
    props: { recipe: items[0] },
    //after what time (at most) in seconds next.js will check for content updates, but only after revisit on page
    revalidate: 3,
  };
};

const RecipeDetails = ({ recipe }) => {
  console.log("recipe", recipe);
  const {
    featuredImage,
    title,
    cookingTime,
    ingredients,
    method,
  } = recipe.fields;
  console.log(method);

  return (
    <div>
      <div className="banner">
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>Takes about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>

        {ingredients.map((ing) => {
          return <span key={ing}>{ing}</span>;
        })}
      </div>
      <div className="method">
        <h3>Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>

      <style jsx>{`
        h2,
        h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }
        .info p {
          margin: 0;
        }
         {
          /* comma after ing */
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: " ";
        }
      `}</style>
    </div>
  );
};
export default RecipeDetails;

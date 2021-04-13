import RecipeCard from "../components/RecipeCard";
import { client } from "../client";

//getStaticProps
export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
      revalidate: 3,
    },
  };
};

const Recipes = ({ recipes }) => {
  console.log("recipes", recipes);
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.sys.id} recipe={recipe} />;
      })}

      {/* styled jsx */}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
};
export default Recipes;

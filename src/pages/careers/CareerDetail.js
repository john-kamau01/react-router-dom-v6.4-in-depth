import { useLoaderData, useParams } from "react-router-dom";

const CareerDetail = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
          assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
          officiis aperiam earum eum vel quas odio optio, distinctio ab sunt
          unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi,
          cupiditate iusto!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi
          architecto quidem, non odit saepe facere voluptas esse mollitia illo
          fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit
          velit beatae laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi
          architecto quidem, non odit saepe facere voluptas esse mollitia illo
          fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit
          velit beatae laudantium.
        </p>
      </div>
    </div>
  );
};
export default CareerDetail;

// career loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
        assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
        officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde
        incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate
        iusto!
      </p>
      <p>
        Go to <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};
export default NotFound;

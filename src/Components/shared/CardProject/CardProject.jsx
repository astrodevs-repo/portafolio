import { Link } from "react-router-dom";
import SubTitle from "../SubTitle";
import Text from "../Text";

const CardProject = ({ id, nombre, description, tipoTrabajo, client, project, tools, imgCard }) => {
  return (
    <>
      <Link to={`/project/${id}`}>
        <div className="  w-full">
          <div className="w-full ">
            <div>
              <img
                className="rounded-lg"
                src={
                  imgCard
                    ? imgCard
                    : "https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg"
                }
                alt=""
              />
            </div>
            <div className="pt-2">
              <SubTitle text={nombre} />
              <Text content={description?.substring(0, 100) + "..."} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CardProject;

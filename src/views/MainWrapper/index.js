import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDrop } from "react-dnd";
import CardDetail from "../../components/CardDetail";
import { photosActions } from "../../store/photos.action";
function MainWrapper() {
  // const [basket, setBasket] = useState([]);
  // const [{ isOver }, dropRef] = useDrop({
  //   accept: "pet",
  //   drop: (item) =>
  //     setBasket((basket) =>
  //       !basket.includes(item) ? [...basket, item] : basket
  //     ),
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //   }),
  // });

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.photosData.photosList);
  console.log(usersList, "userslist");
  useEffect(() => {
    dispatch(photosActions.photosRequestAction());
  }, []);

  return (
    <>
      <div className="main_wrap">
        {usersList &&
          usersList.map((data, index) => (
            <CardDetail draggable content={data} key={data.id} />
          ))}
      </div>
    </>
  );
}

export default MainWrapper;

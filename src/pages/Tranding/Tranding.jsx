import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTranding } from "../../redux/getTranding";
import "./tranding.css";

function Tranding() {
  const dispatch = useDispatch();
  const tranding = useSelector((state) => state.tranding.data);
  const loading = useSelector((state) => state.tranding.loading);

  useEffect(() => {
    let offset = 10;
    let isLoaded = !loading;
    document.addEventListener("scroll", () => {
      const el = document.body;
      if (window.scrollY + window.innerHeight >= el.scrollHeight && isLoaded) {
        dispatch(getTranding({ offset })).then(() => {
          isLoaded = true;
        });
        isLoaded = false;
        offset += 10;
      }
    });
  }, []);

  useEffect(() => {
    dispatch(getTranding());
  }, []);

  return (
    <div>
      <div className="tranding">
      {tranding.length > 0 &&
        tranding.map((item) => {
          return (
            <img
              className="tranding__img tranding__hover"
              key={item.id}
              src={item.images.downsized.url}
            />
          );
        })}
      {loading && "Loading..."}
    </div>
    </div>
  );
}

export default Tranding;

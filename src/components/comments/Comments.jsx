import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import scss from "./Comments.module.scss";
import commentsArray from "../../json/comments.json";
import Comment from "./Comment";

const Comments = () => {
  return (
    <section className={scss.comments}>
      <div className={scss.comments__container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {commentsArray.map((comment) => (
            <SwiperSlide key={comment.id}>
              <Comment comment={comment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;

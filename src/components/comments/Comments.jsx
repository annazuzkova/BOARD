import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import scss from "./Comments.module.scss";
import commentsArray from "../../json/comments_with_ids.json";
import Comment from "./Comment";

const Comments = () => {
  return (
    <section className={scss.comments}>
      <div className={scss.comments__container}>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            nextEl: `.${scss.nextBtn}`,
            prevEl: `.${scss.prevBtn}`,
          }}
          modules={[Navigation]}
        >
          {commentsArray.map((comment) => (
            <SwiperSlide key={comment.id}>
              <Comment comment={comment} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки навігації */}
        <button className={scss.prevBtn}>❮</button>
        <button className={scss.nextBtn}>❯</button>
      </div>
    </section>
  );
};

export default Comments;
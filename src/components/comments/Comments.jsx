import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import scss from "./Comments.module.scss";
import commentsArray from "../../json/comments.json";
import Comment from "./Comment";

const Comments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleDots = 5; // кількість видимих крапочок

  return (
    <section className={scss.comments}>
      <div className={scss.comments__container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              // Межі видимих точок
              let half = Math.floor(visibleDots / 2);
              let start = Math.max(
                Math.min(
                  activeIndex - half,
                  commentsArray.length - visibleDots
                ),
                0
              );
              let end = start + visibleDots - 1;

              // Додаємо клас hidden, якщо точка поза вікном
              let extraClass = index < start || index > end ? "dot-hidden" : "";

              return `<span class="${className} ${extraClass}"></span>`;
            },
          }}
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

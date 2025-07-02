import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className="hz-sec sec-1 hz_color_1_bg mb-5 position-relative mb-100px" id="sec1">
        <div className="bg_clouds_wrap z-0 position-absolute top-0 h-50vh w-100">
          <div
            className="bg_clouds h-100 position-absolute w-100"
            style={{ backgroundImage: "url('/images/bg_clouds.webp')" }}
          ></div>
        </div>
        <div className="bg_clouds_wrap fg_clouds_wrap z-3 position-absolute h-80vh bottom-0 w-100">
          <div
            className="bg_clouds h-100 w-100"
            style={{ backgroundImage: "url('/images/fg_clouds.webp')" }}
          ></div>
        </div>
        <div className="container hz-container z-1 position-relative">
          <div className="row hz-row hz-row1">
            <div className="col-md-7 col-12">
              <h1 className="sec1_head text-white made_outer-sans f-64 mb-20px weight-300">
                Train Smarter. Play Better. Anywhere.
              </h1>
              <p className="sec1-p f-16 text-capitalize hz_color_6_text mb-30px">
                Professional Coaching for Grassroots Soccer. Connect with certified soccer coaches and sports
                <br />
                psychologists for online 1-on-1 sessions, tailored to help young players grow on and off the field.
              </p>
              <div className="hz_dual_btns d-flex align-items-center justify-content-start gap-20px mb-20px">
                <div className="hz_btn_wrapper hz_btn_wrapper_1">
                  <a href="#" className="hz_btn d-flex align-items-center justify-content-center text-decoration-none text-black weight-400 made_outer-sans w-100 hz_color_2_bg">
                    Book a Session
                  </a>
                </div>
                <div className="hz_btn_wrapper hz_btn_wrapper_2">
                  <a href="#" className="hz_btn d-flex align-items-center justify-content-center text-decoration-none text-white weight-400 made_outer-sans w-100">
                    Explore Coaches
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec1_ground z-2 position-relative">
          <img src="/images/sec1_ground.webp" alt="ground" className="img-fluid w-100" />
        </div>
      </section>

      <section className="hz-sec sec-2 pt-100px pb-100px mb-5" id="sec2">
        <div className="container hz-container">
          <div className="row hz-row hz-row1 align-items-center">
            <div className="col-md-7 col-12">
              <h2 className="sec1_head text-black made_outer-sans f-64 mb-20px weight-300">Train in 3 Easy Steps</h2>
            </div>
            <div className="col-md-5 col-12">
              <div className="hz_btn_wrapper text-end">
                <a href="#" className="hz_btn d-inline-flex align-items-center justify-content-center text-decoration-none hz_color_3_bg text-white weight-400 made_outer-sans">
                  See How It Works
                </a>
              </div>
            </div>
          </div>

          <div className="row hz-row hz-row2">
            {[
              {
                title: "Book Your Session",
                desc: "Schedule a time that works for you — all sessions are online.",
              },
              {
                title: "Choose Your Expert",
                desc: "Browse certified coaches and psychologists to find the right fit for your goals.",
              },
              {
                title: "Train & Improve",
                desc: "Join your coach on a video call and start transforming your game.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-4 col-12">
                <div className="sec2_card radius-12px text-center">
                  <div className="sec2_ico mb-30px">
                    {/* Reuse your SVG icon here */}
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M27 25.2V5.6C27 4.0558 25.7043 2.8 24.1111 2.8H21.2222V0H18.3333V2.8H9.66667V0H6.77778V2.8H3.88889C2.29567 2.8 1 4.0558 1 5.6V25.2C1 26.7442 2.29567 28 3.88889 28H24.1111C25.7043 28 27 26.7442 27 25.2ZM9.66667 22.4H6.77778V19.6H9.66667V22.4ZM9.66667 16.8H6.77778V14H9.66667V16.8ZM15.4444 22.4H12.5556V19.6H15.4444V22.4ZM15.4444 16.8H12.5556V14H15.4444V16.8ZM21.2222 22.4H18.3333V19.6H21.2222V22.4ZM21.2222 16.8H18.3333V14H21.2222V16.8ZM24.1111 9.8H3.88889V7H24.1111V9.8Z"
                        fill="#FFFAEE"
                      />
                    </svg>
                  </div>
                  <div className="sec2_content">
                    <h3 className="sec2_content_head hz_color_8_text f-30 made_outer-sans f-24 mb-20px weight-300">
                      {item.title}
                    </h3>
                    <p className="sec2_content_p f-16 hz_color_7_text mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
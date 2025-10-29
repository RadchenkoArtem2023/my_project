import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.contain}>
      <div className={styles.column}>
        <div className={styles.rowView}>
          <div className={styles.column2}>
            <div className={styles.rowView2}>
              <div className={styles.column3}>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/274c6nu0_expires_30_days.png"
                  className={styles.image}
                />
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/mq1a5fgg_expires_30_days.png"
                  className={styles.absoluteImage}
                />
                <button
                  className={styles.absoluteButton}
                  onClick={() => alert("Pressed!")}>
                  <div className={styles.rowView3}>
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/qqz8nar8_expires_30_days.png"
                      className={styles.image2}
                    />
                    <span className={styles.text}>{"Have fun"}</span>
                  </div>
                </button>
              </div>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/1vza1a30_expires_30_days.png"
                className={styles.image3}
              />
              <div className={styles.box}></div>
              <div className={styles.column4}>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/sk1sggag_expires_30_days.png"
                  className={styles.image4}
                />
                <span className={styles.absoluteText}>
                  {"Make This Holiday Magical with Secret Nick"}
                </span>
              </div>
            </div>
            <div className={styles.rowView4}>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/jfqye1ud_expires_30_days.png"
                className={styles.image5}
              />
              <span className={styles.text2}>
                {`It’s a secret — don’t tell who you’re matched with!
Use the wishlist or preferences to pick the perfect gift.
Be ready for the big gift exchange!`}
              </span>
            </div>
            <div className={styles.rowView5}>
              <button
                className={styles.buttonRowView}
                onClick={() => alert("Pressed!")}>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/b4511fzm_expires_30_days.png"
                  className={styles.image2}
                />
                <span className={styles.text}>{"Share wishes"}</span>
              </button>
              <div>
                <button
                  className={styles.view}
                  onClick={() => navigate("/create-room")}>
                  <span className={styles.text3}>{"Create Your Room"}</span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.column5}>
            <div className={styles.rowView6}>
              <button
                className={styles.buttonRowView2}
                onClick={() => alert("Pressed!")}>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/bxwq0c97_expires_30_days.png"
                  className={styles.image2}
                />
                <span className={styles.text}>{"Match people"}</span>
              </button>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/jxist5bj_expires_30_days.png"
                className={styles.image6}
              />
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/vicwojx0_expires_30_days.png"
              className={styles.image7}
            />
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/2trabcxz_expires_30_days.png"
              className={styles.image8}
            />
            <button
              className={styles.buttonRowView3}
              onClick={() => alert("Pressed!")}>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/cd1ffavs_expires_30_days.png"
                className={styles.image2}
              />
              <span className={styles.text}>{"Give presents"}</span>
            </button>
          </div>
        </div>
        <div className={styles.rowView7}>
          <div className={styles.column6}>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/k6sbhk4m_expires_30_days.png"
              className={styles.image9}
            />
            <div className={styles.absoluteView}>
              <div className={styles.rowView8}>
                <span className={styles.text4}>
                  {"© 2025 EPAM Systems. All rights reserved."}
                </span>
                <div className={styles.rowView9}>
                  <div className={styles.view2}>
                    <span className={styles.text5}>{"Privacy Policy"}</span>
                  </div>
                  <div className={styles.view3}>
                    <span className={styles.text5}>{"Privacy Notice"}</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/tpyl30cw_expires_30_days.png"
              className={styles.image10}
            />
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/xydlqr9i_expires_30_days.png"
              className={styles.absoluteImage2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

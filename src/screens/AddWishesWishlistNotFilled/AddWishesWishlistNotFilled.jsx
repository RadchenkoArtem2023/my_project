import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./AddWishesWishlistNotFilled.module.css";

const AddWishesWishlistNotFilled = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    roomName,
    minParticipants,
    maxParticipants,
    budget,
    currency,
    firstName,
    lastName,
    email,
    phone,
  } = location.state || {};

  const [wishName, setWishName] = useState("");
  const [wishLink, setWishLink] = useState("");
  const [surprise, setSurprise] = useState("");
  const [wishMode, setWishMode] = useState("ideas"); // додали стан для вибору

  const handleAddWish = () => {
    alert("Wish Added (поки тест)");
  };

  const handleComplete = () => {
    navigate("/room-created-success", {
      state: {
        roomName,
        minParticipants,
        maxParticipants,
        budget,
        currency,
        firstName,
        lastName,
        email,
        phone,
        wishName,
        wishLink,
        surprise,
        wishMode, // передаємо вибір
      },
    });
  };

  const handleBack = () => {
    navigate("/add-participant", {
      state: {
        roomName,
        minParticipants,
        maxParticipants,
        budget,
        currency,
        firstName,
        lastName,
        email,
        phone,
      },
    });
  };

  return (
    <div className={styles.contain}>
      <div className={styles.column}>
        <div className={styles.column2}>
          <div className={styles.column3}>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/qnajps2j_expires_30_days.png"
              className={styles.image}
            />

            <div
              className={styles.view}
              onClick={handleBack}
              style={{ cursor: "pointer" }}>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/8dzceffn_expires_30_days.png"
                className={styles.image2}
              />
            </div>

            <div className={styles.view2}>
              <div className={styles.rowView}>
                <div className={styles.rowView2}>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/6fgz07yj_expires_30_days.png"
                    className={styles.image3}
                  />
                  <span className={styles.text}>Create room</span>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/mmeors8o_expires_30_days.png"
                    className={styles.image4}
                  />
                </div>

                <div className={styles.rowView2}>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/lnlbpif5_expires_30_days.png"
                    className={styles.image3}
                  />
                  <span className={styles.text2}>Add personal info</span>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/ytvlv9fy_expires_30_days.png"
                    className={styles.image5}
                  />
                </div>

                <div className={styles.rowView3}>
                  <div className={styles.view3}>
                    <span className={styles.text3}>3</span>
                  </div>
                  <span className={styles.text4}>Add wishlist</span>
                </div>
              </div>
            </div>

            <div className={styles.view4}>
              <div className={styles.column4}>
                <div className={styles.rowView4}>
                  <div className={styles.column5}>
                    <span className={styles.text5}>Add Your Wishes</span>
                    <div className={styles.column6}>
                      <span className={styles.text6}>
                        Let your Secret Nick know what would make you smile this
                        season.
                      </span>
                      <span className={styles.text7}>
                        Gift Budget: {budget} {currency}
                      </span>
                    </div>
                  </div>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/cz8mfpd7_expires_30_days.png"
                    className={styles.image6}
                  />
                </div>

                <div className={styles.column7}>
                  <div className={styles.column8}>
                    <div className={styles.rowView5}>
                      <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/4tela4uv_expires_30_days.png"
                        className={styles.image7}
                      />
                      <span className={styles.text8}>
                        I have gift ideas! (add up to 5 gift ideas)
                      </span>
                      <input
                        type="radio"
                        name="wishMode"
                        value="ideas"
                        checked={wishMode === "ideas"}
                        onChange={() => setWishMode("ideas")}
                        style={{ marginLeft: "10px" }}
                      />
                    </div>

                    <div className={styles.rowView10}>
                      <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/g5ugfdfz_expires_30_days.png"
                        className={styles.image7}
                      />
                      <span>I want a surprise gift</span>
                      <input
                        type="radio"
                        name="wishMode"
                        value="surprise"
                        checked={wishMode === "surprise"}
                        onChange={() => setWishMode("surprise")}
                        style={{ marginLeft: "10px" }}
                      />
                    </div>

                    {/* Відображення інпутів залежно від вибору */}
                    {wishMode === "ideas" && (
                      <div className={styles.rowView6}>
                        <div className={styles.column9}>
                          <div className={styles.rowView7}>
                            <span className={styles.text9}>I wish for</span>
                            <span className={styles.text10}>*</span>
                          </div>
                          <input
                            className={styles.input}
                            placeholder="Enter your wish name"
                            value={wishName}
                            onChange={(e) => setWishName(e.target.value)}
                          />
                        </div>

                        <div className={styles.column10}>
                          <span className={styles.text9}>Add link</span>
                          <input
                            className={styles.input}
                            placeholder="E.g. https://example.com/item"
                            value={wishLink}
                            onChange={(e) => setWishLink(e.target.value)}
                          />
                        </div>
                        <button
                          className={styles.buttonRowView}
                          onClick={handleAddWish}>
                          <span className={styles.text14}>Add Wish</span>
                        </button>
                      </div>
                    )}

                    {wishMode === "surprise" && (
                      <input
                        className={styles.input2}
                        placeholder="I want a surprise gift"
                        value={surprise}
                        onChange={(e) => setSurprise(e.target.value)}
                      />
                    )}
                  </div>
                </div>

                <div className={styles.column11}>
                  <button className={styles.button} onClick={handleComplete}>
                    <span className={styles.text15}>Complete</span>
                  </button>

                  <div
                    className={styles.rowView11}
                    onClick={handleBack}
                    style={{ cursor: "pointer" }}>
                    <span className={styles.text16}>
                      Back to the previous step
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/6gjngtv3_expires_30_days.png"
            className={styles.absoluteImage}
          />
        </div>

        <div className={styles.view6}>
          <div className={styles.rowView12}>
            <span className={styles.text17}>
              © 2025 EPAM Systems. All rights reserved.
            </span>
            <div className={styles.rowView13}>
              <span className={styles.text18}>Privacy Policy</span>
              <span className={styles.text18}>Privacy Notice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWishesWishlistNotFilled;

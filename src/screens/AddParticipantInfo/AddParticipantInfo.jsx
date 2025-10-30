import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AddParticipantInfo.module.css";

const AddParticipantInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Дані, які прийшли з CreateRoom
  const {
    roomName = "",
    minParticipants = "",
    maxParticipants = "",
    budget = "",
    currency = "",
  } = location.state || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    navigate("/add-wishlist", {
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

  const handleBack = () => {
    navigate("/create-room", {
      state: {
        roomName,
        minParticipants,
        maxParticipants,
        budget,
        currency,
      },
    });
  };

  return (
    <div className={styles.contain}>
      <div className={styles.column}>
        <div className={styles.column2}>
          <div className={styles.column3}>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/eq069ud7_expires_30_days.png"
              className={styles.image}
            />

            {/* ✅ Кнопка Назад */}
            <div className={styles.view}>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/ng6hfthk_expires_30_days.png"
                className={styles.image2}
                onClick={handleBack}
                style={{ cursor: "pointer" }}
              />
            </div>

            {/* === Далі без змін візуалу, тільки інпути прив’язано === */}

            <div className={styles.view2}>
              <div className={styles.rowView}>
                <div className={styles.rowView2}>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/obdh0atf_expires_30_days.png"
                    className={styles.image3}
                  />
                  <span className={styles.text}>Create room</span>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/hz8dg3m9_expires_30_days.png"
                    className={styles.image4}
                  />
                </div>

                <div className={styles.rowView2}>
                  <div className={styles.view3}>
                    <span className={styles.text2}>2</span>
                  </div>
                  <span className={styles.text3}>Add personal info</span>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/4wfqyk2v_expires_30_days.png"
                    className={styles.image5}
                  />
                </div>

                <div className={styles.rowView3}>
                  <div className={styles.view4}>
                    <span className={styles.text4}>3</span>
                  </div>
                  <span className={styles.text4}>Add wishlist</span>
                </div>
              </div>
            </div>

            {/* === Форма даних користувача === */}
            <div className={styles.view5}>
              <div className={styles.column4}>
                <div className={styles.rowView4}>
                  <div className={styles.column5}>
                    <span className={styles.text5}>Add Your Details</span>
                    <span className={styles.text6}>
                      Secret Nick needs to know where to send your present!
                    </span>

                    <div className={styles.rowView5}>
                      <div className={styles.column6}>
                        <div className={styles.rowView6}>
                          <span className={styles.text7}>First name</span>
                          <span className={styles.text8}>*</span>
                        </div>
                        <input
                          placeholder="e.g. Nickolas"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.column6}>
                        <div className={styles.rowView6}>
                          <span className={styles.text7}>Last name</span>
                          <span className={styles.text8}>*</span>
                        </div>
                        <input
                          placeholder="e.g. Secret"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email + Phone */}
                <div className={styles.column8}>
                  <div className={styles.rowView9}>
                    <div className={styles.column9}>
                      <div className={styles.rowView6}>
                        <span className={styles.text7}>Phone number</span>
                        <span className={styles.text8}>*</span>
                      </div>
                      <input
                        placeholder="+380 77 777 77 77"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.column6}>
                      <div className={styles.view8}>
                        <span className={styles.text7}>Email</span>
                      </div>
                      <input
                        placeholder="nickolas@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>

                {/* ✅ Кнопка Continue передає всі дані далі */}
                <div className={styles.column12}>
                  <button className={styles.button} onClick={handleContinue}>
                    <span className={styles.text16}>Continue</span>
                  </button>

                  {/* ✅ Back: дубль */}
                  <div
                    className={styles.rowView13}
                    onClick={handleBack}
                    style={{ cursor: "pointer" }}>
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/a0uylpdi_expires_30_days.png"
                      className={styles.image8}
                    />
                    <span className={styles.text17}>
                      Back to the previous step
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={styles.view10}>
            <div className={styles.rowView11}>
              <span className={styles.text18}>
                © 2025 EPAM Systems. All rights reserved.
              </span>
              <div className={styles.rowView14}>
                <div className={styles.view11}>
                  <span className={styles.text19}>Privacy Policy</span>
                </div>
                <div className={styles.view12}>
                  <span className={styles.text19}>Privacy Notice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddParticipantInfo;

import { useState } from "react";
import styles from "./AddParticipantInfo.module.css";

const AddParticipantInfo = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  return (
    <div className={styles.contain}>
      <div className={styles.column}>
        <div className={styles.column2}>
          <div className={styles.column3}>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/eq069ud7_expires_30_days.png"
              className={styles.image}
            />
            <div className={styles.view}>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/ng6hfthk_expires_30_days.png"
                className={styles.image2}
              />
            </div>

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
                          value={input1}
                          onChange={(e) => setInput1(e.target.value)}
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
                          value={input2}
                          onChange={(e) => setInput2(e.target.value)}
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.column8}>
                  <div className={styles.rowView7}>
                    <span className={styles.text10}>0</span>
                    <span className={styles.text11}>/</span>
                    <span className={styles.text4}>40</span>
                  </div>

                  <div className={styles.rowView8}>
                    <span className={styles.text10}>0</span>
                    <span className={styles.text11}>/</span>
                    <span className={styles.text4}>40</span>
                  </div>

                  <div className={styles.rowView9}>
                    <div className={styles.column9}>
                      <div className={styles.rowView6}>
                        <span className={styles.text7}>Phone number</span>
                        <span className={styles.text8}>*</span>
                      </div>
                      <div className={styles.rowView10}>
                        <div className={styles.view6}>
                          <span className={styles.text7}>+380</span>
                        </div>
                        <div className={styles.view7}>
                          <span className={styles.text12}>77 777 77 77</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.column6}>
                      <div className={styles.view8}>
                        <span className={styles.text7}>Email</span>
                      </div>
                      <input
                        placeholder="nickolas@example.com"
                        value={input3}
                        onChange={(e) => setInput3(e.target.value)}
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.column10}>
                  <div className={styles.rowView11}>
                    <span className={styles.text13}>
                      Your delivery address (no North Pole required!)
                    </span>
                    <span className={styles.text14}>*</span>
                  </div>

                  <div className={styles.column11}>
                    <div className={styles.view9}>
                      <span className={styles.text12}>
                        Where should St. Nick deliver your gift?
                      </span>
                    </div>
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/vch3oclq_expires_30_days.png"
                      className={styles.image7}
                    />
                  </div>
                </div>

                <div className={styles.rowView12}>
                  <span className={styles.text10}>0</span>
                  <span className={styles.text15}>/</span>
                  <span className={styles.text4}>500</span>
                </div>

                <div className={styles.column12}>
                  <button
                    className={styles.button}
                    onClick={() => alert("Pressed!")}>
                    <span className={styles.text16}>Continue</span>
                  </button>

                  <div className={styles.rowView13}>
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

          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/v7yflq6k_expires_30_days.png"
            className={styles.absoluteImage}
          />
        </div>

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
  );
};

export default AddParticipantInfo;

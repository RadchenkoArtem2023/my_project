import { useState } from "react";
import styles from "./CreateRoom.module.css";

const CreateRoom = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <div className={styles.contain}>
      <div className={styles.column}>
        <div className={styles.column2}>
          <div className={styles.column3}>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/2ur4poyq_expires_30_days.png"
              className={styles.image}
            />
            <div className={styles.view}>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/59jzu1r9_expires_30_days.png"
                className={styles.image2}
              />
            </div>

            <div className={styles.view2}>
              <div className={styles.rowView}>
                <div className={styles.rowView2}>
                  <div className={styles.view3}>
                    <span className={styles.text}>1</span>
                  </div>
                  <span className={styles.text2}>Create room</span>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/304nvk9k_expires_30_days.png"
                    className={styles.image3}
                  />
                </div>

                <div className={styles.rowView2}>
                  <div className={styles.view4}>
                    <span className={styles.text3}>2</span>
                  </div>
                  <span className={styles.text4}>Add personal info</span>
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/mo4rlsds_expires_30_days.png"
                    className={styles.image4}
                  />
                </div>

                <div className={styles.rowView3}>
                  <div className={styles.view5}>
                    <span className={styles.text3}>3</span>
                  </div>
                  <span className={styles.text3}>Add wishlist</span>
                </div>
              </div>
            </div>

            <div className={styles.view6}>
              <div className={styles.column4}>
                <div className={styles.rowView4}>
                  <div className={styles.column12}>
                    <div className={styles.column5}>
                      <span className={styles.text5}>
                        Create Your Secret Nick Room
                      </span>
                      <span className={styles.text6}>
                        Let the holiday magic begin! Set up your gift exchange
                        in just a few steps.
                      </span>
                    </div>
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/dwfvn54h_expires_30_days.png"
                      className={styles.image5}
                    />
                  </div>
                </div>
                <div className={styles.rowView5}>
                  <span className={styles.text7}>Room name</span>
                  <span className={styles.text8}>*</span>
                  <div className={styles.column6}>
                    <input
                      placeholder="Enter your room name"
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                      className={styles.absoluteInput}
                    />
                  </div>
                </div>

                <div className={styles.column7}>
                  <div className={styles.rowView6}>
                    <span className={styles.text9}>0</span>
                    <span className={styles.text10}>/</span>
                    <span className={styles.text3}>40</span>
                  </div>

                  <div className={styles.column8}>
                    <div className={styles.rowView7}>
                      <span className={styles.text11}>Room description</span>
                      <span className={styles.text12}>*</span>
                    </div>

                    <div className={styles.column9}>
                      <div className={styles.view7}>
                        <span className={styles.text13}>
                          Enter your message here...
                        </span>
                      </div>
                      <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/bkq5h82p_expires_30_days.png"
                        className={styles.image6}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.column10}>
                  <div className={styles.rowView8}>
                    <span className={styles.text9}>0</span>
                    <span className={styles.text14}>/</span>
                    <span className={styles.text3}>200</span>
                  </div>

                  <div className={styles.rowView9}>
                    <div className={styles.column11}>
                      <div className={styles.rowView10}>
                        <span className={styles.text7}>Gift Exchange date</span>
                        <span className={styles.text8}>*</span>
                      </div>
                      <div className={styles.rowView11}>
                        <input
                          placeholder="Select date"
                          value={input2}
                          onChange={(e) => setInput2(e.target.value)}
                          className={styles.input}
                        />
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/k23rlgzn_expires_30_days.png"
                          className={styles.image7}
                        />
                      </div>
                    </div>

                    <div className={styles.column11}>
                      <div className={styles.rowView10}>
                        <span className={styles.text7}>Gift budget</span>
                        <span className={styles.text8}>*</span>
                      </div>
                      <div className={styles.rowView12}>
                        <div className={styles.view8}>
                          <span className={styles.text13}>
                            Type in your budget
                          </span>
                        </div>
                        <div className={styles.view9}>
                          <span className={styles.text7}>UAH</span>
                        </div>
                      </div>
                      <div className={styles.view10}>
                        <span className={styles.text15}>
                          0 means unlimited budget
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className={styles.button}
                  onClick={() => alert("Pressed!")}>
                  <span className={styles.text16}>Continue</span>
                </button>
              </div>
            </div>
          </div>

          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/aya8sehf_expires_30_days.png"
            className={styles.absoluteImage}
          />
        </div>

        <div className={styles.view11}>
          <div className={styles.rowView7}>
            <span className={styles.text17}>
              © 2025 EPAM Systems. All rights reserved.
            </span>
            <div className={styles.rowView13}>
              <div className={styles.view12}>
                <span className={styles.text18}>Privacy Policy</span>
              </div>
              <div className={styles.view13}>
                <span className={styles.text18}>Privacy Notice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;

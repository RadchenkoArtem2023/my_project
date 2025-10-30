import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRoom.module.css";
import { setRoomData } from "../../redux/roomSlice";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomDate, setRoomDate] = useState("");
  const [roomBudget, setRoomBudget] = useState("");

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!roomName.trim()) newErrors.name = "Room name is required";
    if (!roomDescription.trim()) newErrors.desc = "Description is required";
    if (!roomDate) newErrors.date = "Date is required";
    if (roomBudget === "") newErrors.budget = "Budget is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validateForm()) return;

    dispatch(
      setRoomData({
        name: roomName,
        description: roomDescription,
        date: roomDate,
        budget: Number(roomBudget),
      })
    );

    navigate("/add-participant");
  };

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

            {/* ✅ Breadcrumb steps залишили без змін */}
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
                {/* Заголовок */}
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

                {/* ✅ Room name */}
                <div className={styles.rowView5}>
                  <span className={styles.text7}>Room name</span>
                  <span className={styles.text8}>*</span>
                  <div className={styles.column6}>
                    <input
                      maxLength={40}
                      placeholder="Enter your room name"
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                      className={styles.absoluteInput}
                    />
                    {errors.name && (
                      <div className={styles.error}>{errors.name}</div>
                    )}
                  </div>
                </div>

                {/* Лічильник символів */}
                <div className={styles.rowView6}>
                  <span className={styles.text9}>{roomName.length}</span>
                  <span className={styles.text10}>/</span>
                  <span className={styles.text3}>40</span>
                </div>

                {/* ✅ Description */}
                <div className={styles.column7}>
                  <div className={styles.column8}>
                    <div className={styles.rowView7}>
                      <span className={styles.text11}>Room description</span>
                      <span className={styles.text12}>*</span>
                    </div>
                    <textarea
                      maxLength={200}
                      placeholder="Enter your message here..."
                      value={roomDescription}
                      onChange={(e) => setRoomDescription(e.target.value)}
                      className={styles.textArea}
                    />
                    {errors.desc && (
                      <div className={styles.error}>{errors.desc}</div>
                    )}
                  </div>
                </div>

                {/* Лічильник символів */}
                <div className={styles.rowView8}>
                  <span className={styles.text9}>{roomDescription.length}</span>
                  <span className={styles.text14}>/</span>
                  <span className={styles.text3}>200</span>
                </div>

                {/* ✅ Date + Budget */}
                <div className={styles.column10}>
                  <div className={styles.rowView9}>
                    <div className={styles.column11}>
                      <span className={styles.text7}>Gift Exchange date</span>
                      <span className={styles.text8}>*</span>
                      <input
                        type="date"
                        value={roomDate}
                        onChange={(e) => setRoomDate(e.target.value)}
                        className={styles.input}
                      />
                      {errors.date && (
                        <div className={styles.error}>{errors.date}</div>
                      )}
                    </div>

                    <div className={styles.column11}>
                      <span className={styles.text7}>Gift budget</span>
                      <span className={styles.text8}>*</span>
                      <input
                        type="number"
                        min={0}
                        placeholder="UAH"
                        value={roomBudget}
                        onChange={(e) => setRoomBudget(e.target.value)}
                        className={styles.input}
                      />
                      {errors.budget && (
                        <div className={styles.error}>{errors.budget}</div>
                      )}
                      <span className={styles.text15}>
                        0 means unlimited budget
                      </span>
                    </div>
                  </div>
                </div>

                {/* ✅ Button */}
                <button className={styles.button} onClick={handleContinue}>
                  <span className={styles.text16}>Continue</span>
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Footer */}
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

          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/aya8sehf_expires_30_days.png"
            className={styles.absoluteImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;

import React, {useState} from "react";
import "./index.css"
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="contain">
			<div className="column">
				<div className="column2">
					<div className="column3">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/2ur4poyq_expires_30_days.png"} 
							className="image"
						/>
						<div className="view">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/59jzu1r9_expires_30_days.png"} 
								className="image2"
							/>
						</div>
						<div className="view2">
							<div className="row-view">
								<div className="row-view2">
									<div className="view3">
										<span className="text" >
											{"1"}
										</span>
									</div>
									<span className="text2" >
										{"Create room"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/304nvk9k_expires_30_days.png"} 
										className="image3"
									/>
								</div>
								<div className="row-view2">
									<div className="view4">
										<span className="text3" >
											{"2"}
										</span>
									</div>
									<span className="text4" >
										{"Add personal info"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/mo4rlsds_expires_30_days.png"} 
										className="image4"
									/>
								</div>
								<div className="row-view3">
									<div className="view5">
										<span className="text3" >
											{"3"}
										</span>
									</div>
									<span className="text3" >
										{"Add wishlist"}
									</span>
								</div>
							</div>
						</div>
						<div className="view6">
							<div className="column4">
								<div className="row-view4">
									<div className="column5">
										<span className="text5" >
											{"Create Your Secret Nick Room"}
										</span>
										<span className="text6" >
											{"Let the holiday magic begin! Set up your gift exchange in just a few steps."}
										</span>
										<div className="row-view5">
											<span className="text7" >
												{"Room name"}
											</span>
											<span className="text8" >
												{"*"}
											</span>
										</div>
									</div>
									<div className="column6">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/dwfvn54h_expires_30_days.png"} 
											className="image5"
										/>
										<input
											placeholder={"Enter your room name"}
											value={input1}
											onChange={(event)=>onChangeInput1(event.target.value)}
											className="absolute-input"
										/>
									</div>
								</div>
								<div className="column7">
									<div className="row-view6">
										<span className="text9" >
											{"0"}
										</span>
										<span className="text10" >
											{"/"}
										</span>
										<span className="text3" >
											{"40"}
										</span>
									</div>
									<div className="column8">
										<div className="row-view7">
											<span className="text11" >
												{"Room description"}
											</span>
											<span className="text12" >
												{"*"}
											</span>
										</div>
										<div className="column9">
											<div className="view7">
												<span className="text13" >
													{"Enter your message here..."}
												</span>
											</div>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/bkq5h82p_expires_30_days.png"} 
												className="image6"
											/>
										</div>
									</div>
								</div>
								<div className="column10">
									<div className="row-view8">
										<span className="text9" >
											{"0"}
										</span>
										<span className="text14" >
											{"/"}
										</span>
										<span className="text3" >
											{"200"}
										</span>
									</div>
									<div className="row-view9">
										<div className="column11">
											<div className="row-view10">
												<span className="text7" >
													{"Gift Exchange date"}
												</span>
												<span className="text8" >
													{"*"}
												</span>
											</div>
											<div className="row-view11">
												<input
													placeholder={"Select date"}
													value={input2}
													onChange={(event)=>onChangeInput2(event.target.value)}
													className="input"
												/>
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/k23rlgzn_expires_30_days.png"} 
													className="image7"
												/>
											</div>
										</div>
										<div className="column11">
											<div className="row-view10">
												<span className="text7" >
													{"Gift budget"}
												</span>
												<span className="text8" >
													{"*"}
												</span>
											</div>
											<div className="row-view12">
												<div className="view8">
													<span className="text13" >
														{"Type in your budget"}
													</span>
												</div>
												<div className="view9">
													<span className="text7" >
														{"UAH"}
													</span>
												</div>
											</div>
											<div className="view10">
												<span className="text15" >
													{"0 means unlimited budget"}
												</span>
											</div>
										</div>
									</div>
								</div>
								<button className="button"
									onClick={()=>alert("Pressed!")}>
									<span className="text16" >
										{"Continue"}
									</span>
								</button>
							</div>
						</div>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/aya8sehf_expires_30_days.png"} 
						className="absolute-image"
					/>
				</div>
				<div className="view11">
					<div className="row-view7">
						<span className="text17" >
							{"© 2025 EPAM Systems. All rights reserved."}
						</span>
						<div className="row-view13">
							<div className="view12">
								<span className="text18" >
									{"Privacy Policy"}
								</span>
							</div>
							<div className="view13">
								<span className="text18" >
									{"Privacy Notice"}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
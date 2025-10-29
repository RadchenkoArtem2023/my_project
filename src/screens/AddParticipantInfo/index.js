import React, {useState} from "react";
import "./index.css"
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
		<div className="contain">
			<div className="column">
				<div className="column2">
					<div className="column3">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/eq069ud7_expires_30_days.png"} 
							className="image"
						/>
						<div className="view">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/ng6hfthk_expires_30_days.png"} 
								className="image2"
							/>
						</div>
						<div className="view2">
							<div className="row-view">
								<div className="row-view2">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/obdh0atf_expires_30_days.png"} 
										className="image3"
									/>
									<span className="text" >
										{"Create room"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/hz8dg3m9_expires_30_days.png"} 
										className="image4"
									/>
								</div>
								<div className="row-view2">
									<div className="view3">
										<span className="text2" >
											{"2"}
										</span>
									</div>
									<span className="text3" >
										{"Add personal info"}
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/4wfqyk2v_expires_30_days.png"} 
										className="image5"
									/>
								</div>
								<div className="row-view3">
									<div className="view4">
										<span className="text4" >
											{"3"}
										</span>
									</div>
									<span className="text4" >
										{"Add wishlist"}
									</span>
								</div>
							</div>
						</div>
						<div className="view5">
							<div className="column4">
								<div className="row-view4">
									<div className="column5">
										<span className="text5" >
											{"Add Your Details"}
										</span>
										<span className="text6" >
											{"Secret Nick needs to know where to send your present!"}
										</span>
										<div className="row-view5">
											<div className="column6">
												<div className="row-view6">
													<span className="text7" >
														{"First name"}
													</span>
													<span className="text8" >
														{"*"}
													</span>
												</div>
												<input
													placeholder={"e.g. Nickolas"}
													value={input1}
													onChange={(event)=>onChangeInput1(event.target.value)}
													className="input"
												/>
											</div>
											<span className="text7" >
												{"Last name"}
											</span>
										</div>
									</div>
									<span className="text9" >
										{"*"}
									</span>
									<div className="column7">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/b8187kl0_expires_30_days.png"} 
											className="image6"
										/>
										<input
											placeholder={"e.g. Secret"}
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="absolute-input"
										/>
									</div>
								</div>
								<div className="column8">
									<div className="row-view7">
										<span className="text10" >
											{"0"}
										</span>
										<span className="text11" >
											{"/"}
										</span>
										<span className="text4" >
											{"40"}
										</span>
									</div>
									<div className="row-view8">
										<span className="text10" >
											{"0"}
										</span>
										<span className="text11" >
											{"/"}
										</span>
										<span className="text4" >
											{"40"}
										</span>
									</div>
									<div className="row-view9">
										<div className="column9">
											<div className="row-view6">
												<span className="text7" >
													{"Phone number"}
												</span>
												<span className="text8" >
													{"*"}
												</span>
											</div>
											<div className="row-view10">
												<div className="view6">
													<span className="text7" >
														{"+380"}
													</span>
												</div>
												<div className="view7">
													<span className="text12" >
														{"77 777 77 77"}
													</span>
												</div>
											</div>
										</div>
										<div className="column6">
											<div className="view8">
												<span className="text7" >
													{"Email"}
												</span>
											</div>
											<input
												placeholder={"nickolas@example.com"}
												value={input3}
												onChange={(event)=>onChangeInput3(event.target.value)}
												className="input"
											/>
										</div>
									</div>
								</div>
								<div className="column10">
									<div className="row-view11">
										<span className="text13" >
											{"Your delivery address (no North Pole required!)"}
										</span>
										<span className="text14" >
											{"*"}
										</span>
									</div>
									<div className="column11">
										<div className="view9">
											<span className="text12" >
												{"Where should St. Nick deliver your gift?"}
											</span>
										</div>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/vch3oclq_expires_30_days.png"} 
											className="image7"
										/>
									</div>
								</div>
								<div className="row-view12">
									<span className="text10" >
										{"0"}
									</span>
									<span className="text15" >
										{"/"}
									</span>
									<span className="text4" >
										{"500"}
									</span>
								</div>
								<div className="column12">
									<button className="button"
										onClick={()=>alert("Pressed!")}>
										<span className="text16" >
											{"Continue"}
										</span>
									</button>
									<div className="row-view13">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/a0uylpdi_expires_30_days.png"} 
											className="image8"
										/>
										<span className="text17" >
											{"Back to the previous step"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gJ59Nxafgu/v7yflq6k_expires_30_days.png"} 
						className="absolute-image"
					/>
				</div>
				<div className="view10">
					<div className="row-view11">
						<span className="text18" >
							{"© 2025 EPAM Systems. All rights reserved."}
						</span>
						<div className="row-view14">
							<div className="view11">
								<span className="text19" >
									{"Privacy Policy"}
								</span>
							</div>
							<div className="view12">
								<span className="text19" >
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
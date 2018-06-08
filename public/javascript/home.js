
	// the software makes use of unctional Components heavily
	
	

	function home(props) {
		render(props){
			return (
				<div>
					<div className='homepageHeader'>
						<div onClick={props.gotoHomePage}>Home</div>
						<div onClick={props.admissions}>Admissions</div>
						<div onClick={props.tuitionAndFees}>Tuition/Fees</div>
						<div onClick={props.announcement}>Announcement</div>
						<div onClick={props.missionAndVision}>Mission/Vision</div>
						<div onClick={props.events}>Events</div>
						<div onClick={props.contact}>Contact</div>
						<div onClick={props.about}>About</div>
					</div>
					<div className='rows homepageBody'>
					</div>
					<div className='homepageFooter'>
						<div onClick={props.gotoHomePage}>Home</div>
						<div onClick={props.admissions}>Admissions</div>
						<div onClick={props.tuitionAndFees}>Tuition/Fees</div>
						<div onClick={props.announcement}>Announcement</div>
						<div onClick={props.missionAndVision}>Mission/Vision</div>
						<div onClick={props.events}>Events</div>
						<div onClick={props.contact}>Contact</div>
						<div onClick={props.about}>About</div>
					</div>
					<p>{props.copyright}</p>
				</div>
			);
		}
	}
	

	

	
	

	

	
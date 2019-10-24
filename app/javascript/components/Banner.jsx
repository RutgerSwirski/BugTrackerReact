import React from 'react'

import BugImage from '../../assets/images/undraw_bug_fixing_oc7a.svg'

class Banner extends React.Component {
	render() {
		return(
			<section className="banner">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-md-7 col-lg-7 order-md-2 mt-sm-3">
							<img src={ BugImage } width="100%"/>
						</div>
						<div className="col-12 col-md-5 col-lg-5 order-md-1">
							<h1 className="display-3 text-center text-md-left">BugFixers</h1>
							<h2 className="font-weight-light text-center text-md-left text-muted mb-4 mb-lg-8">Fixing all the bugs.</h2>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Banner
import React from 'react';

function MostActiveUsers() {
  return (
    <section className="most-active-users">
		
		<div className="container-fluid">
			<div className="row pb-3">
				<div className="col-12">
					<h3 className="most-active-users-header">Самые активные пользователи</h3>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row">
				
				<div className="col-lg-4 col-md-4 col-12">
					<div className="member-style1 member-light">
						<div className="member-photo">
                            <img src={require("../img/1.jpg")}/>
							<div className="member-icons">
								Активность: 14.537
							</div>
						</div>
						<div className="member-info">
							<h3 className="member-name"><i className="fa fa-user"></i> Mazafaka</h3>
							<span className="member-role">Персонаж: Узумаки Нагато</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-12">
					<div className="member-style1 member-light">
						<div className="member-photo">
                            <img src={require("../img/2.jpg")}/>
							<div className="member-icons">
								Активность: 13.976
							</div>
						</div>
						<div className="member-info">
							<h3 className="member-name"><i className="fa fa-user"></i> Moonshine</h3>
							<span className="member-role">Персонаж: Хошигаке Кисаме</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-12">
					<div className="member-style1 member-light">
						<div className="member-photo">
							<img src={require("../img/3.jpg")}/>
							<div className="member-icons">
								Активность: 13.621
							</div>
						</div>
						<div className="member-info">
							<h3 className="member-name"><i className="fa fa-user"></i> Lira</h3>
							<span className="member-role">Персонаж: Харуно Сакура</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
  );
}

export default MostActiveUsers;

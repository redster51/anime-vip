import React from 'react';

function RolePlayMenu() {
  return (
    <section className="role-items">
		<div className="container">

			<div className="row pb-4">
				<div className="col-12">
					<h3 className="role-items-header">Меню ролевой</h3>
				</div>
			</div>

			<div className="row services-style1">
				
				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="services-item">
						<div className="services-icon">
							<i className="fa fa-flash"></i>
						</div>
						<div className="services-desc">
							<h2 className="services-title">Сражения</h2>
							<p>Описание раздела...</p>
							<a href="/">Перейти <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="services-item">
						<div className="services-icon">
							<i className="fa fa-bandcamp"></i>
						</div>
						<div className="services-desc">
							<h2 className="services-title">Миссии</h2>
							<p>Описание раздела...</p>
							<a href="/">Перейти <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="services-item">
						<div className="services-icon">
							<i className="fa fa-book"></i>
						</div>
						<div className="services-desc">
							<h2 className="services-title">Школа техник</h2>
							<p>Описание раздела...</p>
							<a href="/">Перейти <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="services-item">
						<div className="services-icon">
							<i className="fa fa-list"></i>
						</div>
						<div className="services-desc">
							<h2 className="services-title">Правила</h2>
							<p>Описание раздела...</p>
							<a href="/">Перейти <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
  );
}

export default RolePlayMenu;

import React from 'react';

function Header() {
  return (
    <header id="header">

		<div className="top_line d-none d-xl-flex">

			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<a href ="/" className="user" data-toggle="modal" data-target="#modalLogin"><i className="fa fa-user"></i> Авторизация</a> | <a href ="/" className="user" data-toggle="modal" data-target="#modalSignUp">Регистрация</a>
					</div>
					<div className="col-lg-2">
						<a href="/" className="logo">LOGO</a>	
					</div>
					<div className="col-lg-5">
						<nav className="link-effect2">
							<ul className="menu-ul">
								<li className="active"><a href ="/1">Главная</a></li>
								<li><a href ="/1">Гостевая</a></li>
								<li><a href ="/1">Форум</a></li>
								<li><a href ="/1">Ролевая</a></li>
								<li><a href ="/1">Правила</a></li>
								<li><a href ="/1">Сражения</a></li>
							</ul>
						</nav>		
					</div>
				</div>
			</div>
			
		</div>

		<div className="top_line d-flex d-xl-none">

			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-5">
						<div className="user-menu">
							<i className="fa fa-user"></i> Nickname
						</div>
						<div className="user-menu-active">
							<ul className="list list-background">
								<li><a href ="/"><i className="fa fa-vcard"></i> Профиль</a></li>
								<li><a href ="/"><i className="fa fa-user-circle"></i> Персонаж</a></li>
								<li><a href ="/"><i className="fa fa-envelope"></i> Сообщения</a></li>
								<li><a href ="/"><i className="fa fa-user-plus"></i> Друзья</a></li>
								<li><a href ="/"><i className="fa fa-commenting"></i> Журнал</a></li>
								<li><a href ="/"><i className="fa fa-home"></i> Кабинет</a></li>
								<li><a href ="/"><i className="fa fa-gear"></i> Настройки</a></li>
							</ul>
						</div>
					</div>
					<div className="col-2">
						<a href="/" className="logo">LOGO</a>
					</div>
					<div className="col-5">
						<div className="role-menu">
							<i className="fa fa-bars"></i>
						</div>
						<div className="role-menu-active">
							<ul className="list list-background">
								<li><a href ="/"><i className="fa fa-gamepad"></i> Ролевая</a></li>
								<li><a href ="/"><i className="fa fa-location-arrow"></i> Локации</a></li>
								<li><a href ="/"><i className="fa fa-flash"></i> Сражения</a></li>
								<li><a href ="/"><i className="fa fa-bandcamp"></i> Миссии</a></li>
								<li><a href ="/"><i className="fa fa-book"></i> Техники</a></li>
								<li><a href ="/"><i className="fa fa-shopping-bag"></i> Магазин</a></li>
								<li><a href ="/"><i className="fa fa-list"></i> Правила</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>

        <main className="main">
			
		</main>

	</header>
  );
}

export default Header;

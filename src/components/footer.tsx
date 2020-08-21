import React from 'react';

function Footer() {
  return (
    <footer>
		<div className="main-footer">
			<div className="container-fluid">
				<div className="row">
					
					<div className="col-lg-2 col-md-3 col-6 order-3 order-md-1 mt-3 mt-md-0">
						<h3 className="footer-nav-header">Меню сайта</h3>
						<nav className="main-footer-navmenu">
							<ul className="menu-ul">
								<li><a href="/">Главная</a></li>
								<li><a href="/">Гостевая</a></li>
								<li><a href="/">Форум</a></li>
								<li><a href="/">Администрация</a></li>
								<li><a href="/">Правила сайта</a></li>
								<li><a href="/">Помощь</a></li>
							</ul>
						</nav>
					</div>
			
					<div className="col-lg-2 col-md-3 col-6 order-4 order-md-2 mt-3 mt-md-0">
						<h3 className="footer-nav-header">Меню ролевой</h3>
						<nav className="main-footer-navmenu">
							<ul className="menu-ul">
								<li><a href="/">Ролевая</a></li>
								<li><a href="/">Локации</a></li>
								<li><a href="/">Миссии</a></li>
								<li><a href="/">Школа техники</a></li>
								<li><a href="/">Правила ролевой</a></li>
								<li><a href="/">Магазин артефактов</a></li>
							</ul>
						</nav>
					</div>
			
					<div className="col-lg-2 offset-lg-4 col-md-3 offset-md-0 col-7 order-2 order-md-3">
						<script type="text/javascript" src="https://vk.com/js/api/openapi.js?162"></script>
			
						<div id="vk_groups"></div>
						{/* <script type="text/javascript">
							VK.Widgets.Group("vk_groups", {mode: 3, color1: 'E2E2E2'}, 107121805);
						</script> */}
					</div>
			
					<div className="col-lg-2 col-md-3 col-5 order-2 order-md-4">
						<div className="scroll-top">
							<a href="#header" className="scroll-top-btn"><i className="fa fa-arrow-circle-up"></i></a>
						</div>
			
						<div className="activity">
							Онлайн: <a href="/">34</a> | <a href="/">12</a>
						</div>
					</div>
					
				</div>
			
			</div>
		</div>
		
		<div className="copyright-wrapper">
			<div className="container-fluid">
				
				<div className="row text-center pt-2 pb-2 align-items-end">
					<div className="col-12">
						<span className="copyright">Animevip.ru &copy; Все права защищены</span>
					</div>
				</div>

			</div>
		</div>

	</footer>
  );
}

export default Footer;

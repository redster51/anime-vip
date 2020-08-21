import React from 'react';

function LatestPosts() {
  return (
    <section className="last-posts">
		<div className="container">

			<div className="row pb-4">
				<div className="col-12">
					<h3 className="last-posts-header">Последние посты</h3>
				</div>
			</div>
			
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
					<div className="image-caption4">
						<img src={require("../img/p1.jpg")} alt="img1"/>
						<div className="caption">
							<h3>Лес клана Нара</h3>
							<p>Последний пост: Нара Шикамару</p>
						</div>
						<div className="link-wrap">
							<a href="/"><i className="fa fa-asterisk"></i> 638 сим.</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
					<div className="image-caption4">
						<img src={require("../img/p2.png")} alt="img1"/>
						<div className="caption">
							<h3>Госпиталь Конохи</h3>
							<p>Последний пост: Харуно Сакура</p>
						</div>
						<div className="link-wrap">
							<a href="/"><i className="fa fa-asterisk"></i> 836 сим.</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
					<div className="image-caption4">
						<img src={require("../img/p3.png")} alt="img1"/>
						<div className="caption">
							<h3>Резиденция Райкаге</h3>
							<p>Последний пост: Киллер Би</p>
						</div>
						<div className="link-wrap">
							<a href="/"><i className="fa fa-asterisk"></i> 980 сим.</a>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
					<div className="image-caption4">
						<img src={require("../img/p4.png")} alt="img1"/>
						<div className="caption">
							<h3>Полиция Конохи</h3>
							<p>Последний пост: Учиха Шисуи</p>
						</div>
						<div className="link-wrap">
							<a href="/"><i className="fa fa-asterisk"></i> 532 сим.</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
					<div className="image-caption4">
						<img src={require("../img/p5.png")} alt="img1"/>
						<div className="caption">
							<h3>Могила Хаку и Забузы</h3>
							<p>Последний пост: Хозуки Суйгетсу</p>
						</div>
						<div className="link-wrap">
							<a href="/"><i className="fa fa-asterisk"></i> 978 сим.</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
					<div className="image-caption4">
						<img src={require("../img/p6.png")} alt="img1"/>
						<div className="caption">
							<h3>Ичираку Рамен</h3>
							<p>Последний пост: Узумаки Наруто</p>
						</div>
						<div className="link-wrap">
							<a href="/"><i className="fa fa-asterisk"></i> 560 сим.</a>
						</div>
					</div>
				</div>
			</div>

			<div className="row pt-5 justify-content-center">
				<div className="col-auto col-md-4 col-lg-3">
					<a href="/1" className="tcb-animate-a tcb-default">Перейти в локации</a>
				</div>
			</div>

		</div>
	</section>
  );
}

export default LatestPosts;

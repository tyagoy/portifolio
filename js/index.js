class Index
{
	constructor()
	{
		Index.instance = this;

		document.addEventListener('wheel',Index.HandlerMousewheel);

		this.menu = document.getElementById('menu');
		this.menuBtn = document.getElementById('menu-btn');

		this.menuBtn.addEventListener('click',Index.HandlerClickMenuBtn);
		
		new Home();
		new About();
		new Skills();
		new Contact();		
	}

	hideButton()
	{
		if ( this.currentButton )
		{
			this.currentButton.classList.remove('show-btn');
			this.currentButton.classList.add('hide-btn');
		}
	}

	showButton()
	{
		if ( this.currentButton )
		{
			this.currentButton.classList.remove('hide-btn');
			this.currentButton.classList.add('show-btn');
		}
	}

	setCurrentButton( currentButton )
	{
		this.hideButton();

		this.currentButton = currentButton;

		this.showButton();

		this.hideMenu();
	}

	setCurrentPage( currentPage )
	{
		if ( this.currentPage ) this.currentPage.hide();

		this.currentPage = currentPage;

		if ( this.currentPage ) this.currentPage.show();
	}

	hideMenu()
	{
		if ( Index.instance.menu.classList.contains('show-right') )

		Index.instance.menu.classList.remove('show-right');
	}

	static HandlerMousewheel(e)
	{
		( e.deltaY > 0 ) ? 

		Index.instance.currentPage.container.dispatchEvent( new Event('nextPage') ):

		Index.instance.currentPage.container.dispatchEvent( new Event('backPage') );
	}

	static HandlerClickMenuBtn(e)
	{
		( Index.instance.menu.classList.contains('show-right') ) ?

		Index.instance.menu.classList.remove('show-right'):
		Index.instance.menu.classList.add('show-right');
	}
}

//.................................................................................................

class Page
{	
	hide()
	{
		this.container.classList.remove('show-page');
		this.container.classList.add('hide-page');
	}

	show()
	{
		this.container.classList.remove('hide-page');
		this.container.classList.add('show-page');
	}

	static HandlerBackPage(e)
	{
		if ( !e.currentTarget.previousElementSibling ) return;
		if ( !e.currentTarget.previousElementSibling.engine ) return;

		Index.instance.setCurrentButton( e.currentTarget.previousElementSibling.engine.button );
		Index.instance.setCurrentPage( e.currentTarget.previousElementSibling.engine );
	}

	static HandlerNextPage(e)
	{
		if ( !e.currentTarget.nextElementSibling ) return;
		if ( !e.currentTarget.nextElementSibling.engine ) return;

		Index.instance.setCurrentButton( e.currentTarget.nextElementSibling.engine.button );
		Index.instance.setCurrentPage( e.currentTarget.nextElementSibling.engine );
	}

	static HandlerClickButton(e)
	{
		Index.instance.setCurrentButton( e.currentTarget );
		Index.instance.setCurrentPage( e.currentTarget.engine );
	}
}

//.................................................................................................

class Home extends Page
{
	constructor()
	{
		super();

		Home.instance = this;

		this.container = document.getElementById('home-box');
		this.button = document.getElementById('home-btn');
		this.container.engine = this;
		this.button.engine = this;

		this.container.addEventListener('backPage',Page.HandlerBackPage);
		this.container.addEventListener('nextPage',Page.HandlerNextPage);
		this.button.addEventListener('click',Page.HandlerClickButton);

		Index.instance.setCurrentButton(this.button);
		Index.instance.setCurrentPage(this);
	}

	show()
	{
		document.body.style.backgroundColor = '#d3d3ff';
		document.body.style.transition = '.5s';
		super.show();
	}

	hide()
	{
		super.hide();
	}
}

//.................................................................................................

class About extends Page
{
	constructor()
	{
		super();

		About.instance = this;

		this.container = document.getElementById('about-box');
		this.button = document.getElementById('about-btn');
		this.container.engine = this;
		this.button.engine = this;

		this.container.addEventListener('backPage',Page.HandlerBackPage);
		this.container.addEventListener('nextPage',Page.HandlerNextPage);
		this.button.addEventListener('click',Page.HandlerClickButton);
	}

	show()
	{
		document.body.style.backgroundColor = '#c1f3c3';
		document.body.style.transition = '.5s';
		super.show();
	}

	hide()
	{
		super.hide();
	}
}

//.................................................................................................

class Skills extends Page
{
	constructor()
	{
		super();

		Skills.instance = this;

		this.container = document.getElementById('skills-box');
		this.button = document.getElementById('skills-btn');
		this.container.engine = this;
		this.button.engine = this;

		this.container.addEventListener('backPage',Page.HandlerBackPage);
		this.container.addEventListener('nextPage',Page.HandlerNextPage);
		this.button.addEventListener('click',Page.HandlerClickButton);
	}

	show()
	{
		document.body.style.backgroundColor = '#aeebff';
		document.body.style.transition = '.5s';
		super.show();
	}

	hide()
	{
		super.hide();
	}
}

//.................................................................................................

class Contact extends Page
{
	constructor()
	{
		super();

		Contact.instance = this;

		this.container = document.getElementById('contact-box');
		this.button = document.getElementById('contact-btn');
		this.container.engine = this;
		this.button.engine = this;

		this.container.addEventListener('backPage',Page.HandlerBackPage);
		this.container.addEventListener('nextPage',Page.HandlerNextPage);
		this.button.addEventListener('click',Page.HandlerClickButton);
	}

	show()
	{
		document.body.style.backgroundColor = '#aeffbb';
		document.body.style.transition = '.5s';
		super.show();
	}

	hide()
	{
		super.hide();
	}
}

//..................................................................................................

window.onload = function()
{
	new Index();	

	particlesJS.load('particles-js', 'js/particles.json', function() {
  	console.log('callback - particles.js config loaded');
	});
}
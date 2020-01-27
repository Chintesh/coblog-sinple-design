document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.type', {
        strings: ["Detail-oriented WordPress Developer with extensive experience with WordPress plugins and widgets. Well versed in many other programming languages."],
        stringsElement: null,
		// typing speed
		typeSpeed: 2,
		// time before typing starts
		startDelay: 600,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
      });
  });

window.addEventListener('click', function(e){   
  if (document.getElementById('cpb-menu-side-id').contains(e.target) || document.getElementById('cpb-menu-icon-id').contains(e.target)){
	document.getElementById('cpb-menu-side-id').classList.remove('hide-side-menu');	
	document.getElementById('cpb-menu-side-id').classList.add('show-side-menu');	 
} else{
    document.getElementById('cpb-menu-side-id').classList.remove('show-side-menu');
    document.getElementById('cpb-menu-side-id').classList.add('hide-side-menu');
  }
});
window.addEventListener('click', function(e){   
  if (document.getElementById('cpb-menu-side-id').contains(e.target) || document.getElementById('cpb-menu-icon-id').contains(e.target)){
	document.getElementById('cpb-menu-side-id').classList.remove('hide-side-menu');	
	document.getElementById('cpb-menu-side-id').classList.add('show-side-menu');	 
} else{
    document.getElementById('cpb-menu-side-id').classList.remove('show-side-menu');
    document.getElementById('cpb-menu-side-id').classList.add('hide-side-menu');
  }
});
function generateList(arr) {
	var ul = document.createElement('ul');
	var docFrag = document.createDocumentFragment();
	docFrag.appendChild(ul);
	  
	arr.forEach(function(elem){
	  var li = document.createElement('li');
	  var child;
	  
	  if(Array.isArray(elem)){
	  child = generateList(elem);
	  }else{
	  child = document.createTextNode(elem);
	  }
	  
	  li.appendChild(child);
	  ul.appendChild(li);
	})
	document.body.insertBefore(docFrag, document.body.firstChild)
	return ul;
	
  }
  
  
  generateList([1,2,3])
  generateList([1,2, [1.1,1.2,1.3] ,3]);
function generateList(arr) {
	var ul = document.createElement('ul');
	document.body.appendChild(ul);
   
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

	return ul;
  }


generateList([1,2,3])
generateList([1,2, [1.1,1.2,1.3] ,3]);
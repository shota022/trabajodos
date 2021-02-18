
var vec=["simon","samuel","isabella","lopera"];
console.log(vec);

var si=function()
{
	var i=0;
	var nombre=document.getElementById("nombre").value;
	var ul=vec.length-1; 
	while(i<vec.length)
	{
		if(nombre==vec[i])
		{
			var ult=vec[ul];
			vec[ul]=vec[i];
			vec[i]=ult;
			vec.pop();
			console.log(vec);
			i=vec.length;
			document.getElementById("re").value="Eliminado con éxito";
			document.getElementById("nombre").value="";
		}
		else
		{
			i=i+1;
			if (nombre!=vec[i])
			{
				document.getElementById("re").value=nombre+" no está en el vector";
			}
		}
	}
}

var ing=function()
{
	var nomb=document.getElementById("nomb").value;
	vec.push(nomb);
	console.log(vec);
	document.getElementById("nomb").value="";
}
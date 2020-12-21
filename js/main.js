//Изменение цвета
function changeBackgroundColor(x)
{
	switch(x.style.backgroundColor)
	{
		case 'red':
		x.style.backgroundColor = 'green';
			break;
		case 'green':
		x.style.backgroundColor = 'blue';
			break;
		case 'blue':
		x.style.backgroundColor = 'orange';
			break;
		case 'orange':
		x.style.backgroundColor = 'pink';
			break;
		default:
		x.style.backgroundColor = 'red';
	}
	

}
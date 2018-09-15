window.onload = function() {

	function addZero(i) {
			if (i < 10) { i = "0" + i } return i;
	}

	function time() {
			var timer = document.getElementById('timer');
			var date = new Date();

			var yourDate = new Date("jan,1,2019,00:00:00"); // input Your date

			var subtract = parseInt((yourDate.getTime()-date.getTime())/1000); 
			var days = parseInt(subtract / 60 / 60 / 24);
			var hours = addZero(parseInt((subtract - days * 24 * 60 * 60) / 60 / 60));
			var minutes = addZero(parseInt(((subtract - days * 24 * 60 * 60) - hours * 60 * 60) / 60)); 
			var sec = addZero(parseInt(((subtract - days * 24 * 60 * 60) - hours * 60 * 60) - minutes * 60));

			var total = '<span class=\'days\'>' + days + '</span><span class=\'hours\'>' + hours + '</span><span class=\'minutes\'>' + minutes + '</span><span class=\'sec\'>' + sec + '</span>';

			timer.innerHTML = total;
		}

	time();
	setInterval(time, 1000); 
}

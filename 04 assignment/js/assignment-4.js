
// TASK 4
    var taskFour = document.getElementById('extension').textContent;

    console.log(taskFour);


// TASK 5
   	var taskFive = 'Quicker Viewer';

  	document.getElementById('qv').innerHTML = taskFive;


// TASKS 7 & 8
    var msg = '<h3>&lt;h3&gt;Success!&lt;/h3&gt;</h3>';
    var upperMsg = msg.toUpperCase();
   	var elements = document.getElementsByTagName('h3');

   	if (elements.length > 0) {
   		elements[0].innerHTML = upperMsg;
   		elements[1].innerHTML = upperMsg;
   	}


// // TASK 12

	var fruits = [
       			'apple',
       			'orange',
       			'kiwi',
       			'banana',
       			'mango',
       			'kumquat',
       			'strawberry'
       		];
    var randomValue = fruits[Math.floor(Math.random()*fruits.length)];
    var el = document.getElementById('array');
    el.innerHTML = '<p>Random Fruit: '+randomValue+'</p>';
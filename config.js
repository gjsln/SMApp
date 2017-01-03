/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

  build_dir: 'release',

  app_files: {
    js: [ 'dev/**/*.js', '!dev/assets/**/*.js' ],
    html: [ 'dev/index.html' ],
    less: 'dev/less/style.less'
  },
  vendor_files: {
    js: [
      'release/vendor/jquery/jquery-1.11.2.min.js',
      'release/vendor/angular/angular-1-2.js',
      'release/vendor/bootstrap/js/bootstrap.min.js'
    ],
    css: [
      'release/vendor/bootstrap/css/bootstrap.min.css'
    ],
    assets: [
    ]
  },
};


/******* Reduce data ****/

var textData =
    {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
};

/*
textData = textData.batters.filter(function(textData) {
    return textData; // if truthy then keep item
}).map(function(textData) {
    return textData;
});

console.log(JSON.stringify(textData));

*/

textData = textData.batters.batter.reduce(function(memo, textData) {
    if (textData.id) { // this serves as our `filter`
        memo.push({ // this serves as our `map`
            id: textData.id,
            type: textData.type
        });
    }
    return memo;
}, []);

console.log(JSON.stringify(textData, null, 4));



var monday = [
        {
            'name'     : 'Write a tutorial',
            'duration' : 180
        },
        {
            'name'     : 'Some web development',
            'duration' : 120
        }
    ];
 
var tuesday = [
        {
            'name'     : 'Keep writing that tutorial',
            'duration' : 240
        },
        {
            'name'     : 'Some more web development',
            'duration' : 180
        },
        {
            'name'     : 'A whole lot of nothing',
            'duration'  : 240
        }
    ];
     
var tasks = [monday, tuesday];

var result = tasks.reduce(function (accumulator, current) {
                    // console.log(accumulator.concat(current));
                    return accumulator.concat(current);
                }).map(function (task) {
                    // console.log(task.duration  / 60 );
                    return (task.duration / 60);
                }).filter(function (duration) {
                    // console.log(duration);
                    return duration >= 2;
                }).map(function (duration) {
                    console.log(duration);
                    return duration * 25;
                }).reduce(function (accumulator, current) {
                    console.log((+accumulator) + (+current));
                    return [(+accumulator) + (+current)];
                }).map(function (dollar_amount) {
                    console.log("Dollar Ammount: "+ dollar_amount);
                    return '$' + dollar_amount.toFixed(2);
                }).reduce(function (formatted_dollar_amount) {
                    return formatted_dollar_amount;
                });

console.log("Well Data: "+ result);


// https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

// https://www.sitepoint.com/map-reduce-functional-javascript/

// http://elijahmanor.com/reducing-filter-and-map-down-to-reduce/

// https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter


<script>
var arr2 = [
    [{ id : 1, name: "a" },{ id : 2, name: "b" }],
    [{ id : 3, name: "c" },{ id : 4, name: [{
    	sam:"test",
        data:"test"
    }] }]
] ;

arr2.filter(function( obj ) {
	console.log(obj);
    obj.filter(function(data) { if(data.id){ 
    result = data;}})});
console.log(result.name[0].sam);
</script>

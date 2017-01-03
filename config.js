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

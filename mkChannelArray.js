;(function() {
	var mkChannelArray = function (categories, items) {

		var emptyChannelsArray = [];

		var Channel = function (name, category) {
			this.name = name;
			this.category = category;
			this.instructables = [];
			this.items = 0;
			this.views = 0;
			this.nextLevel = "instructables";
		}

		var setChannels = function (channelArray, categories) {
			for (category in categories) {
				for (var i = 0; i < categories[category].length; i++){
					channelArray.push(new Channel(categories[category][i].title, category));
				}
			}
			return channelArray;
		};

		var populateChannels = function (channelArray, items) {
			for (var i = 0; i < channelArray.length; i++){
				for (item in items){
					if (items[item].channel === channelArray[i].name &&
						items[item].category === channelArray[i].category &&
						items[item].instructableType === "I") 
					{
						channelArray[i].items ++;
						channelArray[i].views += items[item].views;
						channelArray[i].instructables.push(items[item]);
					}
				}
			}
			return channelArray;
		};

		var removeEmpties = function (channelArray) {
			var filteredChannelArray = channelArray.filter(function(channel){
				return channel.items > 0;
			});
			return filteredChannelArray;
		};

		var theChannelArray = 	removeEmpties(
									populateChannels(
										setChannels(emptyChannelsArray, categories), 
									items)
								);

		return theChannelArray;
	};

	exports.mkChannelArray = mkChannelArray;
})();
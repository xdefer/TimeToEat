var PoiRadar = {

	hide: function hideFn() { AR.radar.enabled = false; },

	show: function initFn() {
		AR.radar.container = document.getElementById("radarContainer");
		AR.radar.background = new AR.ImageResource("assets/radar_bg.png");
		AR.radar.northIndicator.image = new AR.ImageResource("assets/radar_north.png");
		AR.radar.centerX = 0.5;
		AR.radar.centerY = 0.5;
		AR.radar.radius = 0.3;
		AR.radar.northIndicator.radius = 0.0;
			AR.radar.enabled = true;
	},

	updatePosition: function updatePositionFn() {
		if (AR.radar.enabled) { AR.radar.notifyUpdateRadarPosition(); }
	},

	setMaxDistance: function setMaxDistanceFn(maxDistanceMeters) {
		AR.radar.maxDistance = maxDistanceMeters;
	}
};
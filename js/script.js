// Map

// Initialize and add the map
function initMap() {
    // Set the coordinates for San Francisco
    var sanFrancisco = {lat: 37.7749, lng: -122.4194};
    
    // Create a new map object centered on San Francisco
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: sanFrancisco
    });
    
    // Add a marker for San Francisco
    var marker = new google.maps.Marker({
      position: sanFrancisco,
      map: map,
      title: 'San Francisco'
    });
  }
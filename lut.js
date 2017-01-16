var style = [];
  style['ag_walk'] = { fillColor: "lightgreen", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['ag_bus'] = { fillColor: "darkgreen", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['he_walk'] = { fillColor: "crimson", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['he_bus'] = { fillColor: "maroon", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['me_walk'] = { fillColor: "steelblue", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['me_bus'] = { fillColor: "midnightblue", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['er_walk'] = { fillColor: "lightskyblue", fillOpacity: 0.3 , weight: 1, color: "#999"};
  style['er_bus'] = { fillColor: "purple", fillOpacity: 0.3 , weight: 1, color: "#999"};

var skoolname = {
    'ag' : "Archer Glen",
	'er' : "Edy Edge",
	'he' : "Hopkins",
	'me' : "Middleton",
	'sms': "Sherwood Middle School",
	'lrms':"Laurel Ridge Middle School",
  };
  
var areadata = {
    'R1': {'es':'er', 'ms': 'lrms', 'esbus':'1'},
    'R2': {'es':'er', 'ms': 'lrms', 'esbus':'1'},
    'R3': {'es':'er', 'ms': 'lrms', 'esbus':'1'},
    'R4': {'es':'me', 'ms': 'lrms', 'esbus':'1'},
    'R7': {'es':'ag', 'ms': 'lrms', 'esbus':'1'},
    'R8': {'es':'ag', 'ms': 'lrms', 'esbus':'1'},
    'R9': {'es':'ag', 'ms': 'lrms', 'esbus':'1'},
    'R10': {'es':'ag', 'ms': 'lrms', 'esbus':'1'},	
    'R12': {'es':'he', 'ms': 'lrms', 'esbus':'1'},	
    'R16': {'es':'he', 'ms': 'lrms', 'esbus':'1'},	
    '1': {'es':'er', 'ms': 'lrms', 'esbus':'0'},
	'2': {'es':'er', 'ms': 'lrms', 'esbus':'1'},
	'3': {'es':'me', 'ms': 'lrms', 'esbus':'1'},  
	'4': {'es':'me', 'ms': 'lrms', 'esbus':'1'},  
	'5': {'es':'er', 'ms': 'lrms', 'esbus':'0'},  
	'6': {'es':'er', 'ms': 'lrms', 'esbus':'6'},  
	'7': {'es':'er', 'ms': 'lrms', 'esbus':'1'},  
	'8': {'es':'er', 'ms': 'lrms', 'esbus':'0'},  
	'9': {'es':'er', 'ms': 'lrms', 'esbus':'2'},  
	'10': {'es':'er', 'ms': 'lrms', 'esbus':'0'},  
	'11': {'es':'er', 'ms': 'lrms', 'esbus':'0'},
	'12': {'es':'er', 'ms': 'lrms', 'esbus':'0'},
	'13': {'es':'he', 'ms': 'lrms', 'esbus':'0'},  
	'14': {'es':'he', 'ms': 'lrms', 'esbus':'0'},  
	'15': {'es':'he', 'ms': 'lrms', 'esbus':'1'},  
	'16': {'es':'he', 'ms': 'lrms', 'esbus':'1'},  
	'17': {'es':'he', 'ms': 'lrms', 'esbus':'1'},  
	'18': {'es':'he', 'ms': 'lrms', 'esbus':'0'},  
	'19': {'es':'he', 'ms': 'lrms', 'esbus':'0'},  
	'20': {'es':'me', 'ms': 'lrms', 'esbus':'0'},  
	'21': {'es':'he', 'ms': 'lrms', 'esbus':'1'},
	'22': {'es':'ag', 'ms': 'lrms', 'esbus':'0'},
	'23': {'es':'ag', 'ms': 'lrms', 'esbus':'0'},  
	'24': {'es':'he', 'ms': 'lrms', 'esbus':'1'},  
	'25': {'es':'ag', 'ms': 'lrms', 'esbus':'0'},  
	'26': {'es':'ag', 'ms': 'sms', 'esbus':'1'},  
	'27': {'es':'ag', 'ms': 'lrms', 'esbus':'0'},  
	'28': {'es':'ag', 'ms': 'lrms', 'esbus':'0'},  
	'29': {'es':'ag', 'ms': 'lrms', 'esbus':'0'},  
	'30': {'es':'me', 'ms': 'lrms', 'esbus':'0'},  
	'31': {'es':'me', 'ms': 'lrms', 'esbus':'0'},  	
    '32': {'es':'me', 'ms': 'lrms', 'esbus':'0'},
	'33': {'es':'me', 'ms': 'sms', 'esbus':'0'},
	'34': {'es':'ag', 'ms': 'sms', 'esbus':'7'},
	'35': {'es':'me', 'ms': 'sms', 'esbus':'0'},
    '36': {'es':'he', 'ms': 'sms', 'esbus':'0'},
  };
// Load in data



var roseRatings = [4,
    3.9,
    3.6,
    3.4,
    4.6,
    4.1,
    3.9,
    3.8,
    3.6,
    3.5,
    3.9,
    3.9,
    3.6,
    3.6,
    3.7,
    3.7,
    3.9,
    3.7,
    3.5,
    3.7,
    3.6,
    3.8,
    3.8,
    3.4,
    3.9,
    4,
    3.5,
    3.3,
    3.7,
    3.4,
    3.1,
    3.9,
    3.8,
    3.4,
    4,
    3.4,
    4.1,
    3.6,
    3.5,
    3.4,
    4,
    3.4,
    3.4,
    3.7,
    3.3,
    4,
    3.7,
    3.2,
    4.5,
    3.6,
    4,
    3.4,
    3.4,
    3.6,
    4.5,
    3.8,
    4.1,
    2.7,
    3.8,
    3.8,
    3.5,
    3.7,
    3.2,
    3.8,
    3.8,
    3.8,
    3.4,
    3.8,
    3.8,
    3.4,
    4.3,
    3.6,
    3.6,
    3.6,
    3.6,
    4.2,
    3.8,
    4.8,
    4.1,
    3.8,
    3.8,
    3.6,
    3.7,
    3.4,
    3.8,
    3.4,
    3.7,
    3.9,
    3.9,
    3.5,
    3.7,
    3.6,
    4,
    3.6,
    3.8,
    4.1,
    4.2,
    3.6,
    3.8,
    3.5,
    4.1,
    3.9,
    3.4,
    3.8,
    3.6,
    3.8,
    3.6,
    3.9,
    4,
    3.8,
    3.6,
    3.3,
    3.9,
    3.7,
    3.4,
    3.8,
    4.1,
    3.4,
    3.6,
    3.8,
    3.7,
    3.3,
    4.1,
    3.5,
    3.9,
    3.8,
    3.7,
    3.6,
    3.8,
    4,
    3.7,
    3.8,
    3.7,
    3.7,
    3.6,
    3.8,
    3.5,
    3.5,
    4.1,
    3.5,
    4.5,
    3.6,
    3.2,
    3.8,
    4,
    3.3,
    3.5,
    3.3,
    3.9,
    3.4,
    4,
    3.8,
    3.2,
    3.9,
    3.7,
    3.4,
    3.9,
    3.6,
    3.2,
    3.6,
    3.9,
    3.3,
    3.6,
    3.7,
    3.3,
    3.7,
    3.3,
    4.1,
    3.2,
    3.7,
    3.7,
    3.1,
    4.4,
    3.4,
    3.3,
    4.1,
    3.8,
    3.7,
    4.2,
    3.4,
    3.6,
    3.9,
    3.7,
    3.6,
    3.4,
    4.1,
    3.7,
    3.5,
    3.6,
    3.6,
    4,
    4.2,
    3.8,
    3.3,
    3.4,
    3.7,
    3.3,
    4,
    4.2,
    3.9,
    3.6,
    3.8,
    3.7,
    3.5,
    3.8,
    4.1,
    3.8,
    3.8,
    3.8,
    3.5,
    3.7,
    3.8,
    3.5,
    3.3,
    3.6,
    3.8,
    3.5,
    3.6,
    3.9,
    3.8,
    3.7,
    4,
    3.9,
    4,
    3.7,
    3.2,
    3.7,
    3.8,
    3.9,
    3.7,
    3.7,
    3.7,
    3.7,
    3.7,
    3.9,
    3.8,
    4.3,
    3.9,
    3.5,
    3.9,
    3.5,
    3.7,
    3.6,
    4,
    3.6,
    4.1,
    3.5,
    4,
    3.8,
    3.7,
    3.6,
    3.5,
    3.7,
    4,
    3.9,
    3.9,
    3.8,
    4.3,
    3.5,
    3.5,
    4,
    3.7,
    3.4,
    4.2,
    3.4,
    3.8,
    3.8,
    3.8,
    4,
    3.9,
    4,
    3.7,
    3.6,
    3.3,
    3.6,
    3.8,
    3.6,
    4,
    3.9,
    3.8,
    3.8,
    3.6,
    3.8,
    3.8,
    4,
    3.8,
    4,
    3.4,
    4.1,
    3.8,
    3.1,
    3.8,
    3.4,
    4,
    4.1,
    4.1,
    4.1,
    4,
    3.7,
    4.1,
    4.1,
    3.6,
    3.9,
    3.9,
    3.8,
    3.8,
    3.3,
    4,
    3.9,
    3.2,
    3.9,
    3.6,
    3.6,
    3.7,
    3.8,
    3.8,
    4.1,
    3.7,
    4,
    3.3,
    3.6,
    3.9,
    3.5,
    3.6,
    3.9,
    3.6,
    4,
    3.8,
    3.7,
    3.9,
    3.5,
    3.8,
    4.1,
    4.2,
    3.6,
    3.8,
    4.3,
    3.7,
    3.9,
    3.6,
    3.7,
    3.5,
    3.8,
    3.9,
    4.1,
    3.8,
    3.7,
    3.7,
    3.6,
    3.8,
    3.3,
    3.3,
    3.6,
    4.1,
    4.1,
    4,
    4,
    3.6,
    3.9,
    3.6,
    4.1,
    4.2,
    3.4,
    3.4,
    3.8,
    3.7,
    4,
    3.6,
    3.6,
    3.6,
    3.7,
    3.6,
    3.4,
    3.8,
    4.2,
    3.6,
    3.9,
    4.2,
    3.6,
    4,
    4,
    4,
    3.9,
    3.9,
    3.5,
    4,
    3.8,
    3.7,
    3.9,
    3.9,
    4,
    4.1,
    3.9,
    4,
    4.2,
    3.5,
    3.6];
var rosePrices = [10.11,
    12.81,
    5.6,
    12.14,
    68.95,
    17.5,
    11.45,
    9.7,
    5.56,
    6.45,
    9.91,
    25.15,
    8.9,
    3.7,
    7.45,
    9.55,
    9.3,
    6.85,
    5.75,
    5.99,
    6.24,
    6.81,
    13.69,
    6.42,
    18.9,
    9.99,
    9.07,
    6.05,
    7.31,
    11.13,
    7.5,
    12.9,
    6.77,
    6.3,
    6.5,
    3.95,
    21.82,
    5.5,
    5.77,
    6.95,
    9.65,
    6.94,
    7.7,
    7.77,
    5.56,
    7.36,
    5.23,
    6.29,
    19.9,
    7.95,
    6.77,
    8.95,
    8.9,
    9.65,
    52.89,
    7.3,
    5.3,
    9.5,
    16.9,
    7.79,
    10.01,
    8.99,
    11.7,
    5.81,
    12.53,
    6.43,
    5.32,
    8.84,
    7.4,
    7.29,
    18.64,
    13.57,
    7.44,
    17.5,
    6.75,
    22.9,
    7.18,
    109,
    15.5,
    7.5,
    12.57,
    10.99,
    6.2,
    6.69,
    9.7,
    7.9,
    6.77,
    8.55,
    10.5,
    8.32,
    12,
    7.81,
    8.29,
    6.29,
    7.95,
    92.15,
    29.15,
    11.02,
    12.81,
    9.9,
    25.21,
    6.78,
    6.7,
    14.73,
    10.24,
    8.95,
    7.75,
    8.6,
    34.9,
    7.9,
    8.95,
    5.45,
    8.98,
    5.5,
    11.15,
    7.95,
    10.65,
    12,
    9.69,
    8.72,
    7.66,
    6.99,
    33.99,
    4.15,
    6.9,
    14.45,
    11,
    7.88,
    26.22,
    13,
    7.27,
    11.8,
    8.75,
    8.45,
    7.3,
    13.48,
    7.7,
    11.8,
    16.55,
    11.99,
    249,
    7.71,
    8.89,
    10.69,
    13,
    8.67,
    5.84,
    5.85,
    12.9,
    5.59,
    12.9,
    11.9,
    5.16,
    8.68,
    8.4,
    6.95,
    8.9,
    9.9,
    5.1,
    6.5,
    8.04,
    5.95,
    8.9,
    13.55,
    11.02,
    11.6,
    5.49,
    12.12,
    7.36,
    35.1,
    9.26,
    4.25,
    54,
    6.55,
    7.31,
    6.16,
    15.5,
    7.96,
    35.9,
    6.21,
    8.56,
    9.95,
    5.76,
    11.82,
    5.9,
    8.72,
    7.89,
    6.86,
    5.95,
    10.99,
    5.79,
    29.15,
    12.19,
    6,
    5.45,
    10.99,
    7.6,
    20.96,
    11.6,
    8.94,
    15.9,
    18.75,
    7.5,
    6.79,
    4.83,
    19.95,
    15.42,
    6.3,
    6.8,
    4.9,
    7.9,
    10.5,
    11.92,
    9.6,
    8.9,
    14.72,
    5.79,
    12.9,
    8.9,
    13.6,
    13.3,
    7.75,
    5.7,
    7.6,
    6.75,
    8.78,
    9.5,
    19.9,
    14.9,
    5.8,
    9.85,
    7.19,
    5.75,
    38.01,
    8.72,
    13.37,
    45,
    8.2,
    6.95,
    9.9,
    7.9,
    9.95,
    8.24,
    6.49,
    7.9,
    18.06,
    8.5,
    25.9,
    4.84,
    7.75,
    6.5,
    7.08,
    7.7,
    11.5,
    12,
    8.33,
    6.69,
    62.54,
    9.12,
    7.88,
    9.49,
    8.49,
    7.9,
    13.3,
    7.66,
    12,
    6.97,
    7.99,
    7.75,
    12.2,
    12.03,
    13.85,
    8.19,
    6.3,
    7,
    14.5,
    7.4,
    9.26,
    8.49,
    8.15,
    16.47,
    7.77,
    10.9,
    89.5,
    18.72,
    7.4,
    22.79,
    7.32,
    4.94,
    11.9,
    5.23,
    14.89,
    13.9,
    39.5,
    11.65,
    9.85,
    19.37,
    16.79,
    7.49,
    12.7,
    13.9,
    7.5,
    10.93,
    11.59,
    4.95,
    13.45,
    7.8,
    7.95,
    13.57,
    4.9,
    13.15,
    5.9,
    13.04,
    9.69,
    17.95,
    6.45,
    9.25,
    8.9,
    8.72,
    9.65,
    15.5,
    19.07,
    10.68,
    7.89,
    6.92,
    10.86,
    15,
    15.55,
    8.11,
    15.5,
    6.31,
    8.68,
    23.9,
    28.9,
    7.9,
    8.75,
    24.85,
    6.53,
    6.2,
    8.45,
    12.9,
    6.86,
    8.99,
    22.9,
    24.9,
    11.9,
    9.99,
    12.9,
    10.69,
    13.4,
    4.99,
    7.5,
    9.5,
    8.6,
    16.9,
    8.72,
    10.31,
    18,
    16.47,
    8.67,
    7.95,
    28.9,
    8.44,
    6.49,
    11.48,
    14.92,
    9.7,
    11.15,
    12.57,
    8.78,
    14.54,
    5.45,
    6.31,
    8.72,
    10.98,
    6.05,
    15.88,
    29.9,
    9.5,
    3.67,
    13.99,
    17.85,
    9.37,
    7.79,
    5.9,
    8.5,
    10.95,
    10.71,
    28.27,
    15.84,
    13.9,
    11.2,
    9.36,
    12.85,
    16.47,
    4.35,
    5.99];


// Create the Trace
var trace3 = {
    x: roseRatings,
    y: rosePrices,
    mode: 'markers',
    type: "scatter"
  };
  
  // Create the data array for our plot
  var dataArray3 = [trace3];
  
  // Define our plot layout
  var layout3 = {
    title: 'Rose Varietal - Price & Rating Comparison',
    xaxis: { title: 'Wine Rating',
      range: [0, 5]
    },
    yaxis: { title: 'Wine Price',
      range: [0, 1500]}
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("scatter", dataArray3, layout3)
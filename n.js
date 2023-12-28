const width = 800;
const height = 600;

const svg = d3.select("body")
 .append("svg")
 .attr("width", width)
 .attr("height", height);

const currencies = ["USD", "GBP", "CAD", "KES", "NZD"];
const colors = ["#f77", "#7f7", "#77f", "#f7f", "#7ff"];

const currencyData = currencies.map(currency => {
 return {
    currency: currency,
    price: Math.random() * 1000 + 500
 };
});

const xScale = d3.scaleBand()
 .domain(currencies)
 .range([0, width])
 .padding(0.2);

const yScale = d3.scaleLinear()
 .domain([0, 1000])
 .range([height, 0]);

const line = d3.line()
 .x(d => xScale(d.currency))
 .y(d => yScale(d.price));

svg.append("path")
 .datum(currencyData)
 .attr("fill", "none")
 .attr("stroke", "steelblue")
 .attr("stroke-width", 1.5)
 .attr("d", line);

svg.selectAll("circle")
 .data(currencyData)
 .enter()
 .append("circle")
 .attr("cx", d => xScale(d.currency))
 .attr("cy", d => yScale(d.price))
 .attr("r", 4)
 .attr("fill", (d, i) => colors[i]);

svg.selectAll("text")
 .data(currencyData)
 .enter()
 .append("text")
 .attr("x", d => xScale(d.currency))
 .attr("y", d => yScale(d.price) - 10)
 .text(d => d.currency)
 .attr("fill", "white")
 .attr("text-anchor", "middle");
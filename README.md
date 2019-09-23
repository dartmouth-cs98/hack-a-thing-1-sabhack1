### README.md
#### d3.js tutorials
*https://www.tutorialsteacher.com/d3js*
*http://learnjsdata.com/read_data.html* (used this to supplement basics, first one was slightly outdated)
*http://maptimeboston.github.io/d3-maptime*
*http://duspviz.mit.edu/d3-workshop/mapping-data-with-d3/*

I chose to do tutorials on d3 because it is a versatile js data visualization library and I would love to incorporate data visualizations into my project.

I worked on a data vis team this summer, specifically building a map component, and chose to use a different framework. My second choice was d3, and so I've wanted to learn it ever since.

The first couple of tutorials were just getting the basics down, so I've left the scripts in this repo but commented out the code in the index as it was cluttering the page -- you can see I was trying a bunch of different basic features of d3. There was also a small chart exercise in the maptime boston demo that is in the script file `charttime.js` but I've commented it out of the `index.html`.

The maptime boston tutorial was a fun way to see how this could be applied to a (sort of) real world situation - I chose to do this because I wanted to see how geoJSON data could be used with d3, and it is actually quite simple. The MIT tutorial of the same rat-map thing was an expansion on the basic map, which was cool to do as it involved more than just static shapes -- added events, and a time slider.

The second tutorial from MIT was a TopoJSON tutorial, which was something I had never heard of before despite working a lot with geoJSON this summer. This tutorial teaches how to make a chloropleth map. I had some trouble figuring out the different functions such as `mesh` and `queue`, but after some side research I was able to understand more of what was going on. I also added my own little interactions to show the county name as well as the unemployment rate on hover (wrote a small script to create a tsv file and then just parsed it to separate out the county name and state abbreviation while processing the file).
**to access the result of this tutorial, run the project locally and go to `localhost:[port]/index2.html`**
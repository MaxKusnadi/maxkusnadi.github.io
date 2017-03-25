// Summary page

se_explanation = function(){
	$('#explanation').css('visibility', 'visible')
	$('#explanation').html(`
		<ul>
		  <li>Web App: <a target="_blank" href="http://flask.pocoo.org/">Flask</a>, <a target="_blank" href="https://www.djangoproject.com/">Django</a>, <a target="_blank" href="https://www.meteor.com/">Meteor</a>, HTML, CSS, JavaScript</li>
		  <li>Database: Designing, <a target="_blank" href="https://www.mongodb.com/">MongoDB</a>, <a target="_blank" href="https://www.postgresql.org/">Postgresql</a></li>
		  <li>RESTful API, unittesting</li>
		  <li>Other languages: Java, Unix, Markdown </li>
		</ul>
        `
    )
}

da_explanation = function(){
	$('#explanation').css('visibility', 'visible')
	$('#explanation').html(`
		<ul>
		  <li>Languages: Python, R</li>
		  <li>Data Visualisation: <a target="_blank" href="https://seaborn.pydata.org/">Seaborn</a>, <a target="_blank" href="http://matplotlib.org/">Matplotlib</a>, <a target="_blank" href="http://ggplot.yhathq.com/">ggplot</a>, <a target="_blank" href="http://bokeh.pydata.org/en/latest/">bokeh</a>, <a target="_blank" href="http://www.highcharts.com/">highcharts</a></li>
		  <li>Machine Learning: <a target="_blank" href="http://scikit-learn.org/stable/">scikit-learn</a></li>
		  <li>Text Analysis</li>
		</ul>
        `
    )
}
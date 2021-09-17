<html>
<head>
    <script src="javascripts/jquery.js"></script>
    <script src="javascripts/controller.js"></script>
    <link rel="stylesheet" href="css/bincomcss.css">
</head>
<body>
<h2>BINCOM TEST</h2>
<div class="card-fluid">
    <span class="span-link"><a href="views/lga.php">View LGA Result</a></span><br>
    <span class="span-link"><a href="views/upload-poll-result.php">Upload Unit Result</a></span><br>
    <h3> Delta States Poll Result</h3>
</div>
<!--<div class="card" id="states">-->
<!--    <h4> Delta States Poll Result</h4>-->
<!--    <ul id = "state-list"</ul>-->
<!--</div>-->
<div class="card" id = "lgas">
    <span>Select LGA >> ward >> unit</span>
    <h3>Local Governments</h3>
    <ul id="lga-list"></ul>
</div>
<div class="card" id = "wards">
    <h4>Wards in </h4>
    <ul id="ward-list"></ul>
</div>
<div class="card" id = "units">
    <h4>Polling Units in </h4>
    <ul id="poll-list"></ul>
</div>
<div class="card-fluid" id = "result">
    <h4>Result For Units in </h4>
    <div id="result-pane">
        <table>
            <thead>
            <th>Party Name</th>
            <th>Score</th>
            </thead>
            <tbody id="result-body">

            </tbody>
        </table>
    </div>
</div>
</body>
</html>
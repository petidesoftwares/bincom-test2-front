
<html>
    <head>
        <script src="../javascripts/jquery.js"></script>
        <script src="../javascripts/question2Controller.js"></script>
        <link rel="stylesheet" href="../css/bincomcss.css">
    </head>
    <body>
        <div class="card-fluid">
            <h3>Total LGA Results</h3>
            <div>
                <div>
                    <select id="lga-by-state" onchange="getResult()">
                        <option>Select LGA</option>
                    </select>
                </div>
            </div>
            <div id="result-table">
                <table>
                    <thead>
                        <th>Party</th>
                        <th>Total Score</th>
                    </thead>
                    <tbody id="lga-result-body">

                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>

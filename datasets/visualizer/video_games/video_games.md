---
permalink: /visualizer/video_games/
style: dataset
extras: visualizer
---

<img class="img-thumbnail float-right"
     src="/images/datasets/video-games-icon.png"
     alt="video games icon"
     role="presentation">

# Video Games Visualizer

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Austin Cory Bart <acbart@vt.edu></span><br>
<span class='text-muted'>Version 2.0.0, created 4/13/2017</span><br>
<span class='text-muted'>Tags: video games, games, publishers, console, gaming</span>

# Overview

<i>This dataset requires special permission to use.</i><br><br>
Originally collected by Dr. Joe Cox, this dataset has information about the sales and playtime of over a thousand video games released between 2004 and 2010. The playtime information was collected from crowd-sourced data on "How Long to Beat".<br><br>
Some more information can be found <a href="https://researchportal.port.ac.uk/portal/en/publications/what-makes-a-blockbuster-video-game(a6d848fe-38ae-4584-8c95-a0f735ec9b4c).html">here</a>.


<Cox, Joe. "What makes a blockbuster video game? An empirical analysis of US sales data." Managerial and Decision Economics 35.3 (2014): 189-198.>




<script>
DATASET_NAME = "video_games";
DATASET_ROW = "video game";
</script>

<div class='containerFluid'>

    <div class="alert hide-on-load alert-warning row" role="alert">
        <p style='padding-bottom:10px'>
            <b>Please Wait!</b> The page is loading; this can take a little while the first time.
        </p>
        <div class="progress" style="width:100%">
            <div class="progress-bar bg-warning
                        progress-bar-striped progress-bar-animated
                        active" role="progressbar"
                 aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                <span class="sr-only">45% Complete</span>
            </div>
        </div>
    </div>

    <div class='modal fade' id="capture-dialog" style='display:none'>
        <div class='modal-dialog' style='width:750px'>
            <div class='modal-content' id='modal-message'>
                <div class='modal-header'>
                    <h4 class='modal-title'>Capture Dialog</h4>
                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
                </div>
                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>
                    Click the image below in order to save it.
                    <a id="download-image" href="" download="" target="_blank">
                        <img/>
                    </a>
                </div>
                <!--<div class='modal-footer'>
                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>
                </div>    -->
            </div>
        </div>
    </div>


    <div class='row'>

        <!-- Dataset selector -->
        <div class='col-md-2' data-bind="visible: structures.length >= 2">
            <div class="form-group">
                <label for="choose-dataset">Dataset: </label>
                <select class="form-control" id="choose-dataset"
                        data-bind="options: structures,
                               value: selected.dataset,
                               optionsText: 'name'">
                </select>
            </div>
        </div>

        <!-- Dataset selector -->
        <div class='col-md-3'>
            <div class="form-group">
                <label for="set-title">Title: </label>
                <input name='set-title' class='form-control' data-bind="textInput: settings.title"/>
            </div>
        </div>
        <!-- Chart Type selector -->
        <div class='col-md-2'>
            <label for="choose-chart">Chart Type: </label>
            <select class="form-control vertically-align" id="choose-chart"
                    data-bind="options: charts,
                           value: selected.chart,
                           optionsText: 'name'">
            </select>
        </div>
        <!-- Sampling selector -->
        <div class='col-md-3' data-bind="visible: selected.chart().id == 'scatter'">
            <div class="form-group">
                <label for="set-sampling">Number of points: </label>
                <span data-bind="text: settings.sampling" class='text-muted'></span>
                <input type="range" name='set-sampling'
                       data-bind="attr: {min: 10, max: mainModel.selected.first().data.length}, value: settings.sampling"/>
            </div>
        </div>
        <!-- Bin selector -->
        <div class='col-md-3' data-bind="visible: selected.chart().id == 'hist'">
            <div class="form-group">
                <label for="set-bins">Bins: </label>
                <input name='set-bins' class='form-control' data-bind="textInput: settings.bins"
                       id="set-bins"/>
            </div>
        </div>
        <!-- Aggregate selector, bar charts -->
        <div class='col-md-3' data-bind="visible: selected.chart().id == 'bar'">
            <label for="choose-third-bar" data-bind="text: selected.chart().third"></label>
            <select class="form-control vertically-align" id="choose-third-bar"
                    data-bind="options: aggregators,
                               value: selected.third,
                               optionsText: 'name'">
            </select>
        </div>
        <!-- Color Scheme selector, bar charts -->
        <div class='col-md-3'>
            <label for="choose-color">Color Scheme:</label>
            <select class="form-control" id="choose-color"
                    data-bind="options: schemes,
                               value: settings.color,
                               optionsText: 'name'">
            </select>
        </div>
    </div>
    <hr>
    <!-- Key selector, all charts -->
    <div class='row'>
        <div class='col-md-6'
             data-bind="visible: selected.chart().id != 'bar' || selected.bar_dataset().data.length > 0">
            <label for="choose-left" data-bind="text: selected.chart().first"></label>
            <select class="form-control vertically-align" id="choose-left"
                    data-bind="options: $root.only_numbers(selected.dataset().data),
                               value: selected.first,
                               optionsText: 'pretty'">
            </select>
            <div data-bind="text: selected.first().comment"></div>
        </div>
        <!-- Secondary Key selector, scatter plots -->
        <div class='col-md-6' data-bind="visible: selected.chart().id == 'scatter'">
            <label for="choose-second-scatter" data-bind="text: selected.chart().second"></label>
            <select class="form-control vertically-align" id="choose-second-scatter"
                    data-bind="options: $root.only_numbers(selected.dataset().data),
                               value: selected.second,
                               optionsText: 'pretty'">
            </select>
            <div data-bind="text: selected.second().comment"></div>
        </div>
    </div>
    <hr>
    <div class='row'>
        <!-- Category selector, other charts -->
        <div class='col-md-6'
             data-bind="visible: (selected.chart().id == 'line' || selected.chart().id == 'hist' || selected.chart().id == 'scatter')  && selected.bar_dataset().data.length > 0">
            <label for="choose-filter-index">Filter</label>
            <select class="form-control vertically-align" id="choose-filter-index"
                    data-bind="value: selected.filter">
                <option value="none">None</option>
                <!-- ko foreach: selected.bar_dataset().data -->
                <option data-bind="attr: { value: name }, text: pretty"></option>
                <!-- /ko -->
            </select>
            <div data-bind="text: bars.length > 0 ? selected.filter().comment : ''"></div>
            <div data-bind="html: selected.row_explanation "></div>
        </div>
        <div class='col-md-6'
             data-bind="visible: (selected.chart().id == 'line' || selected.chart().id == 'hist' || selected.chart().id == 'scatter')  && selected.bar_dataset().data.length > 0 && selected.filter() != 'none'">
            <label for="choose-filter-value">By</label>
            <div data-bind="text: selected.filter_index_data() === null ? '' : selected.filter_index_data().comment"></div>
            <select id='select-filter-value' class='form-control'
                    data-bind="options: selected.filter_index_data() === null ? [] : sorted_indexes(),
                                                    value: selected.filter_value">
            </select>
        </div>
        <!-- Category selector, bar charts -->
        <div class='alert alert-warning col-md-6'
             data-bind="visible: selected.chart().id == 'bar' && selected.bar_dataset().data.length == 0">
            This dataset has no indexes, so you cannot use it in a bar chart.
        </div>
        <div class='col-md-6'
             data-bind="visible: selected.chart().id == 'bar'  && selected.bar_dataset().data.length > 0">
            <label for="choose-second-bar">Group By</label>
            <select class="form-control vertically-align" id="choose-second-bar"
                    data-bind="options: mainModel.selected.bar_dataset().data,
                               value: selected.category,
                               optionsText: 'pretty'">
            </select>
            <div data-bind="text: bars.length > 0 ? selected.category().comment : ''"></div>
            <div data-bind="text: selected.third().comment"></div>
        </div>
        <div class='col-md-6'
             data-bind="visible: selected.chart().id == 'bar'  && selected.bar_dataset().data.length > 0">
            <label for="select-bar-keys">With values:</label>

            <select multiple="multiple" id="select-bar-keys" name="select-bar-keys-named[]">
            </select>

        </div>
    </div>
    <hr>

    <button class='btn btn-info' id='capture-button'>
        <span class="glyphicon glyphicon-picture" aria-hidden="true"></span>
        Download Visualization
    </button>

    <hr>
    <span data-bind=""></span>

    <div class='alert alert-warning col-md-6'
             data-bind="visible: error() !== false, text: error()">
        </div>

    <div class='row' style='height: 400px' id='graph-area'>
        <div id="data-visualization-line" class='data-viz col-md-4'
             data-bind="fadeVisible: selected.chart().id == 'line'"></div>
        <div id="data-visualization-xy" class='data-viz col-md-4'
             data-bind="fadeVisible: selected.chart().id == 'xy'"></div>
        <div id="data-visualization-hist" class='data-viz col-md-4'
             data-bind="fadeVisible: selected.chart().id == 'hist'"></div>
        <div id="data-visualization-scatter" class='data-viz col-md-4'
             data-bind="fadeVisible: selected.chart().id == 'scatter'"></div>
        <div id="data-visualization-bar" class='data-viz col-md-4'
             data-bind="fadeVisible: selected.chart().id == 'bar'"></div>
    </div>

</div>

<script>
$(document).ready(function () {
    makeVisualizer();
});
</script>

<script src='../../datasets/visualizer/video_games/video_games.js'></script>
<script src='../../datasets/visualizer/video_games/video_games_bar.js'></script>
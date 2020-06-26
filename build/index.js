"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
var matchReader = MatchReader_1.MatchReader.matchReader('football.csv');
matchReader.load();
Summary_1.Summary.winsAnalysisWithHtmlReport('Man City').buildAndPrintReport(matchReader.matches);
// const summary = new Summary(new WinsAnalysis('Tottenham'), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);

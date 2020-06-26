import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader.matchReader('football.csv');
matchReader.load();

Summary.winsAnalysisWithHtmlReport('Man City').buildAndPrintReport(
  matchReader.matches
);
// const summary = new Summary(new WinsAnalysis('Tottenham'), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);

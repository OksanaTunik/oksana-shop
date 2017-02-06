import app from '../app';

app.filter('trust', ['$sce', $sce => { return htmlCode => $sce.trustAsHtml(htmlCode) }]);

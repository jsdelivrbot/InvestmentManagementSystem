/**
 * Api custom response.
 */

module.exports.successResponse = function(req, res, data, customMsg) {
	res.setHeader('Content-type', 'application/json; charset=utf-8')
	var result = { 'success': true, 'data': data, 'error': null, 'rcode': null,
		'customMsg': customMsg }
	res.status(200).send(result)
}

module.exports.authResponse = function(req, res, token, customMsg) {
	res.setHeader('Content-type', 'application/json; charset=utf-8')
	var result = { 'success': true, 'token': token, 'error': null, 'rcode': null,
		'customMsg': customMsg }
	res.status(200).send(result)
}

//module.exports.errorResponse = function(req, res, appError, coreException) {
//	res.setHeader('Content-type', 'application/json; charset=utf-8')
//	var result = { 'success': false, 'data': null, 'error': appError.message,
//		'rcode': appError.rcode, 'customMsg': appError.customMsg,
//		coreException': coreException }
//
//	res.status(appError.httpCode).send(result)
//}
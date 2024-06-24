const { generateApi } = require("swagger-typescript-api");
const path = require("node:path");
const fs = require("node:fs");

generateApi({
	name: "DOJO API",
	url: "https://petstore.swagger.io/v2/swagger.json",
	output: path.resolve(process.cwd(), "./src/apis"),
	generateClient: true,
	defaultResponseType: "void",
	extractRequestParams: true,
	extractRequestBody: true,
	extractEnums: true,
	generateUnionEnums: true,
	generateRouteTypes: false,
	generateResponses: true,
	enumNamesAsValues: true,
	addReadonly: true,
	httpClientType: "axios",
	modular: true,
	moduleNameFirstTag: true,
	moduleNameIndex: true,
	singleHttpClient: true,
	typeSuffix: "Type",
	extractingOptions: {
		requestBodySuffix: ["Payload", "Body", "Input"],
		requestParamsSuffix: ["Params"],
		responseBodySuffix: ["Data", "Result", "Output"],
		responseErrorSuffix: [
		"Error",
		"Fail",
		"Fails",
		"ErrorData",
		"HttpError",
		"BadResponse",
		],
	},
})

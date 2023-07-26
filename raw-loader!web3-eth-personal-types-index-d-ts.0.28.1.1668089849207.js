(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 3490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n    This file is part of web3.js.\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.d.ts\n * @author Huan Zhang <huanzhang30@gmail.com>,\n * @author Josh Stevens <joshstevens19@hotmail.co.uk>\n * @date 2018\n */\n\nimport * as net from 'net';\nimport { provider, RLPEncodedTransaction, TransactionConfig, BatchRequest, Providers, Extension } from 'web3-core';\n\nexport class Personal {\n    constructor();\n    constructor(provider: provider);\n    constructor(provider: provider, net: net.Socket);\n\n    readonly givenProvider: any;\n    static readonly givenProvider: any;\n    static readonly providers: Providers;\n    readonly currentProvider: provider;\n    defaultAccount: string | null;\n    defaultBlock: string | number;\n    BatchRequest: new () => BatchRequest;\n\n    setProvider(provider: provider): boolean;\n\n    extend(extension: Extension): any;\n\n    newAccount(\n        password: string,\n        callback?: (error: Error, address: string) => void\n    ): Promise<string>;\n\n    sign(\n        dataToSign: string,\n        address: string,\n        password: string,\n        callback?: (error: Error, signature: string) => void\n    ): Promise<string>;\n\n    ecRecover(\n        dataThatWasSigned: string,\n        signature: string,\n        callback?: (error: Error, address: string) => void\n    ): Promise<string>;\n\n    signTransaction(\n        transactionConfig: TransactionConfig,\n        password: string,\n        callback?: (\n            error: Error,\n            RLPEncodedTransaction: RLPEncodedTransaction\n        ) => void\n    ): Promise<RLPEncodedTransaction>;\n\n    sendTransaction(\n        transactionConfig: TransactionConfig,\n        password: string,\n        callback?: (error: Error, transactionHash: string) => void\n    ): Promise<string>;\n\n    unlockAccount(\n        address: string,\n        password: string,\n        unlockDuration: number,\n        callback?: (error: Error) => void\n    ): Promise<boolean>;\n\n    lockAccount(\n        address: string,\n        callback?: (error: Error, success: boolean) => void\n    ): Promise<boolean>;\n\n    getAccounts(\n        callback?: (error: Error, accounts: string[]) => void\n    ): Promise<string[]>;\n\n    importRawKey(\n        privateKey: string,\n        password: string,\n        callback?: (error: Error, result: string) => void\n    ): Promise<string>;\n}\n");

/***/ })

}]);
//# sourceMappingURL=raw-loader!web3-eth-personal-types-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!web3-eth-personal-types-index-d-ts.0.28.1.1668089849207.js.map
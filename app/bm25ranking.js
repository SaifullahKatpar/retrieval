const chunkFilterStem = require("./lib/NLProc/app/chunk_filter_stem.js");
const bm25 = require("./lib/bm25/app/controller/bm25.js");

titleUrls.map(chunkFilterStem);

/*
* 2. vectorize the NLP/chunked/lemmatized texts to matrix of BM25 weights
*/
var docTermMatr = bm25(titleTokensMatr);// computes the matrix of BM25 weights

import{_ as n,o as s,c as a,b as t}from"./app.d53470c9.js";const p={},o=t(`<p><strong>REST</strong> l\xE0 g\xEC? <strong>REST</strong> \u2013 vi\u1EBFt \u0111\u1EA7y \u0111\u1EE7 l\xE0 <strong>REpresentational State Transfer</strong> \u2013 l\xE0 m\u1ED9t chu\u1EA9n trong l\u1EADp tr\xECnh, n\xF3 \u0111\u1ECBnh ngh\u0129a c\xE1c quy t\u1EAFc \u0111\u1EC3 t\u1EA1o ra c\xE1c web service nh\u1EB1m cung c\u1EA5p c\xE1c ch\u1EE9c n\u0103ng truy xu\u1EA5t, th\xEAm m\u1EDBi, c\u1EADp nh\u1EADt t\xE0i nguy\xEAn t\u1EEB xa qua http. Restful API di\u1EC5n d\u1ECBch l\u1EA1i d\u1EEF li\u1EC7u gi\u1EEFa c\xE1c h\u1EC7 th\u1ED1ng \u1EE9ng d\u1EE5ng v\xE0 m\xE1y t\xEDnh, t\u1EA1o n\xEAn kh\u1EA3 n\u0103ng truy\u1EC1n t\u1EA3i d\u1EEF li\u1EC7u \u0111\u01A1n gi\u1EA3n m\xE0 hi\u1EC7u qu\u1EA3, ph\u1EE5c v\u1EE5 trao \u0111\u1ED5i d\u1EEF li\u1EC7u gi\u1EEFa c\xE1c n\u1EC1n t\u1EA3ng kh\xE1c nhau v\xE0 xa nhau.</p><hr><p>V\u1EDBi Restful, b\u1EA1n s\u1EBD t\u1EA1o n\xEAn kh\u1EA3 n\u0103ng truy c\u1EADp t\xE0i nguy\xEAn cho client th\xF4ng qua c\xE1c URI. D\u1EEF li\u1EC7u tr\u1EA3 v\u1EC1 s\u1EBD trong d\u1EA1ng json, xml, html nh\u01B0ng ch\u1EE7 y\u1EBFu l\xE0 json. Restful s\u1EED d\u1EE5ng HTTP nh\u01B0 c\u1ED7 xe chuy\xEAn ch\u1EDF d\u1EEF li\u1EC7u gi\u1EEFa server v\xE0 client qua c\xE1c method GET, HEAD, POST, PUT, PATCH, DELETE\u2026</p><h2 id="cac-quy-\u0111inh-http-method-trong-restful" tabindex="-1"><a class="header-anchor" href="#cac-quy-\u0111inh-http-method-trong-restful" aria-hidden="true">#</a> C\xE1c quy \u0111\u1ECBnh http method trong restful</h2><table><thead><tr><th>HTTP method</th><th>M\xF4 t\u1EA3</th></tr></thead><tbody><tr><td><strong>GET</strong></td><td>D\xF9ng \u0111\u1EC3 l\u1EA5y m\u1ED9t t\xE0i nguy\xEAn ho\u1EB7c danh s\xE1ch c\xE1c t\xE0i nguy\xEAn t\u1EEB server (\u0111\xE3 representation l\u1EA1i theo d\u1EA1ng json, xml\u2026)</td></tr><tr><td><strong>POST</strong></td><td>G\u1EEDi \u0111\u1EBFn server t\xE0i nguy\xEAn \u0111\u1EC3 x\u1EED l\xFD (th\u01B0\u1EDDng d\xF9ng cho th\xEAm m\u1EDBi record)</td></tr><tr><td><strong>PUT</strong></td><td>\u1EA4n \u0111\u1ECBnh tr\u1EA1ng th\xE1i m\u1EDBi cho t\xE0i nguy\xEAn tr\xEAn server (th\u01B0\u1EDDng d\xF9ng cho update record)</td></tr><tr><td><strong>DELETE</strong></td><td>X\xF3a t\xE0i nguy\xEAn ch\u1EC9 \u0111\u1ECBnh tr\xEAn server</td></tr></tbody></table><h2 id="khi-request-\u0111en-mot-tai-nguyen-cac-status-code-se-tra-ve-client" tabindex="-1"><a class="header-anchor" href="#khi-request-\u0111en-mot-tai-nguyen-cac-status-code-se-tra-ve-client" aria-hidden="true">#</a> Khi request \u0111\u1EBFn m\u1ED9t t\xE0i nguy\xEAn, c\xE1c status code s\u1EBD tr\u1EA3 v\u1EC1 client :</h2><ul><li>200 OK \u2013 Tra v\u1EC1 trong c\xE1c ph\u01B0\u01A1ng th\u1EE9c GET, PUT, PATCH, DELETE.</li><li>201 Created \u2013 Tr\u1EA3 v\u1EC1 khi t\u1EA1o xong t\xE0i nguy\xEAn</li><li>204 No Content \u2013 Tr\u1EA3 v\u1EC1 khi xo\xE1 xong 1 t\xE0i nguy\xEAn</li><li>304 Not Modified \u2013 T\xE0i nguy\xEAn kh\xF4ng c\xF3 thay \u0111\u1ED5i, client c\xF3 th\u1EC3 d\xF9ng cache.</li><li>400 Bad Request \u2013 Request kh\xF4ng h\u1EE3p l\u1EC7</li><li>401 Unauthorized \u2013 Request kh\xF4ng quy\u1EC1n truy c\u1EADp.</li><li>403 Forbidden \u2013 Request b\u1ECB b\u1EBB g\xE3y, t\u1EEB ch\u1ED1i truy c\u1EADp.</li><li>404 Not Found \u2013 Kh\xF4ng t\xECm th\u1EA5y t\xE0i nguy\xEAn trong t\u1EEB URI</li><li>405 Method Not Allowed \u2013 Ph\u01B0\u01A1ng th\u1EE9c kh\xF4ng \u0111\u01B0\u1EE3c ph\xE9p</li><li>410 Gone \u2013 T\xE0i nguy\xEAn kh\xF4ng t\u1ED3n t\u1EA1i</li><li>415 Unsupported Media Type \u2013 Kh\xF4ng h\u1ED7 tr\u1EE3 ki\u1EC3u t\xE0i nguy\xEAn</li><li>422 Unprocessable Entity \u2013 D\u1EEF li\u1EC7u kh\xF4ng \u0111\u01B0\u1EE3c x\u1EED l\xFD</li><li>429 Too Many Requests \u2013 C\xF3 qu\xE1 nhi\u1EC1u request</li></ul><h2 id="thuc-hien-restful-api-trong-nodejs" tabindex="-1"><a class="header-anchor" href="#thuc-hien-restful-api-trong-nodejs" aria-hidden="true">#</a> Th\u1EF1c hi\u1EC7n restful api trong nodejs</h2><h3 id="chuan-bi-database" tabindex="-1"><a class="header-anchor" href="#chuan-bi-database" aria-hidden="true">#</a> Chu\u1EA9n b\u1ECB database</h3><p>T\u1EA1o table t\xEAn sach nh\u01B0 sau: <br><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/image-13.png?raw=true" alt="text"> Nh\u1EADp d\u1EEF li\u1EC7u <img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/image-14.png?raw=true" alt="text"></p><h3 id="cai-module-express-va-express-generator" tabindex="-1"><a class="header-anchor" href="#cai-module-express-va-express-generator" aria-hidden="true">#</a> C\xE0i module express v\xE0 express-generator</h3><p>N\u1EBFu m\xE1y c\u1EE7a b\u1EA1n \u0111\xE3 c\xE0i r\u1ED3i th\xEC th\xF4i b\u1ECF qua, c\xF2n ch\u01B0a th\xEC</p><ol><li>M\u1EDF command line</li><li>G\xF5 l\u1EC7nh npm install -g express</li><li>Ti\u1EBFp theo g\xF5 l\u1EC7nh npm -g install express-generator</li></ol><h3 id="tao-project-\u0111e-thuc-tap" tabindex="-1"><a class="header-anchor" href="#tao-project-\u0111e-thuc-tap" aria-hidden="true">#</a> T\u1EA1o project \u0111\u1EC3 th\u1EF1c t\u1EADp</h3><ol><li>V\xE0o command line r\u1ED3i ch\u1EA1y l\u1EC7nh:</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>express <span class="token operator">--</span><span class="token operator">=</span>ejs RestfulTest
</code></pre></div><ol start="2"><li>Chuy\u1EC3n v\xE0o folder RestfulTest m\u1EDBi t\u1EA1o v\xE0 ch\u1EA1y c\xE1c l\u1EC7nh c\xE0i \u0111\u1EB7t module c\u1EA7n thi\u1EBFt</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>npm install
npm install mysql
</code></pre></div><h3 id="tao-model-ket-noi-db" tabindex="-1"><a class="header-anchor" href="#tao-model-ket-noi-db" aria-hidden="true">#</a> T\u1EA1o model k\u1EBFt n\u1ED1i db</h3><ol><li><p>T\u1EA1o folder models trong project</p></li><li><p>T\u1EA1o file file models/database.js</p></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> 
   <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> 
   <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> 
   <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;labnodejs&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
db<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Da ket noi database !&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db<span class="token punctuation">;</span> 
</code></pre></div><h3 id="tao-route" tabindex="-1"><a class="header-anchor" href="#tao-route" aria-hidden="true">#</a> T\u1EA1o route</h3><ol><li>M\u1EDF file app.js v\xE0 \u0111\u1ECBnh ngh\u0129a route sach d\u1EABn v\xE0o controller routes/sach</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> sachRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/sach&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/sach&#39;</span><span class="token punctuation">,</span> sachRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>T\u1EA1o file routes/sach.js v\xE0 code</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./../models/database&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//ch\u1EE9c n\u0103ng tr\u1EA3 v\u1EC1 danh s\xE1ch c\xE1c record</span>
     <span class="token comment">//ph\u01B0\u01A1ng th\u1EE9c request: get</span>
     <span class="token comment">//l\u1EA5y ra c\xE1c record trong table</span>
     <span class="token comment">//tr\u1EA3 v\u1EC1 danh s\xE1ch s\xE1ch d\u1EA1ng json</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//ch\u1EE9c n\u0103ng th\xEAm m\u1EDBi record v\xE0o table</span>
     <span class="token comment">//ph\u01B0\u01A1ng th\u1EE9c request: post</span>
     <span class="token comment">//ti\u1EBFp nh\u1EADn d\u1EEF li\u1EC7u g\u1EEDi trong body request</span>
     <span class="token comment">//th\u1EF1c hi\u1EC7n ch\xE8n record m\u1EDBi v\xE0o table </span>
     <span class="token comment">//tr\u1EA3 v\u1EC1 th\xF4ng b\xE1o \u0111\xE3 ch\xE8n d\u1EA1ng json </span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//ch\u1EE9c n\u0103ng tr\u1EA3 v\u1EC1 chi ti\u1EBFt 1 record</span>
     <span class="token comment">//ph\u01B0\u01A1ng th\u1EE9c request: get</span>
     <span class="token comment">//ti\u1EBFp nh\u1EADn id c\u1EE7a reord trong url</span>
     <span class="token comment">//l\u1EA5y ra record theo id t\u1EEB table</span>
     <span class="token comment">//tr\u1EA3 v\u1EC1 chi ti\u1EBFt record d\u1EA1ng json</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//ch\u1EE9c n\u0103ng c\u1EADp nh\u1EADt record trong table </span>
     <span class="token comment">//ph\u01B0\u01A1ng th\u1EE9c request: put</span>
     <span class="token comment">//ti\u1EBFp nh\u1EADn d\u1EEF li\u1EC7u g\u1EEDi trong body request</span>
     <span class="token comment">//th\u1EF1c hi\u1EC7n c\u1EADp nh\u1EADt record v\xE0o table </span>
     <span class="token comment">//tr\u1EA3 v\u1EC1 th\xF4ng b\xE1o json \u0111\xE3 c\u1EADp nh\u1EADt</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token comment">//ch\u1EE9c n\u0103ng x\xF3a 1 record trong table</span>
     <span class="token comment">//ph\u01B0\u01A1ng th\u1EE9c request: delete</span>
     <span class="token comment">//ti\u1EBFp nh\u1EADn id trong url</span>
     <span class="token comment">//th\u1EF1c hi\u1EC7n x\xF3a record</span>
     <span class="token comment">//tr\u1EA3 v\u1EC1 th\xF4ng b\xE1o json \u0111\xE3 x\xF3a</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre></div><h3 id="thuc-hien-chuc-nang-danh-sach-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-danh-sach-record" aria-hidden="true">#</a> Th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng danh s\xE1ch record</h3><ol><li>Trong routes/sach.js, code l\u1EA1i ch\u1EE9c n\u0103ng tr\u1EA3 v\u1EC1 danh s\xE1ch c\xE1c record \u0111\u1EC3 \u0111\u01B0\u1EE3c nh\u01B0 sau</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SELECT id, tenSach, moTa, urlHinh FROM sach</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>Test: M\u1EDF Postman \u0111\u1EC3 test Tr\xECnh Postman download t\u1EEB https://www.postman.com/downloads/ , gi\xFAp b\u1EA1n t\u1EA1o c\xE1c lo\u1EA1i request kh\xE1c nhau (get, post, put, delete\u2026) \u0111\u1EBFn server. N\u1EBFu b\u1EA1n ch\u01B0a c\xE0i th\xEC down r\u1ED3i c\xE0i v\xE0o m\xE1y nh\xE9.</li></ol><p>M\u1EDF ch\u01B0\u01A1ng tr\xECnh postman, ch\u1ECDn method GET v\xE0 nh\u1EADp url r\u1ED3i nh\u1EAFp Send nh\u01B0 h\xECnh</p><p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-list.png?raw=true" alt="text"></p><h3 id="thuc-hien-lay-chi-tiet-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-lay-chi-tiet-record" aria-hidden="true">#</a> Th\u1EF1c hi\u1EC7n l\u1EA5y chi ti\u1EBFt record</h3><ol><li>Trong routes/sach.js, code l\u1EA1i ch\u1EE9c n\u0103ng tr\u1EA3 v\u1EC1 chi ti\u1EBFt 1 record \u0111\u1EC3 \u0111\u01B0\u1EE3c nh\u01B0 sau</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id<span class="token operator">=</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>      
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM sach WHERE id = ?&#39;</span>    
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> id<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>Test: M\u1EDF Postman \u0111\u1EC3 test</li></ol><p>Trong tool postman, ch\u1ECDn method GET v\xE0 nh\u1EADp url r\u1ED3i nh\u1EAFp Send nh\u01B0 h\xECnh</p><p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-read.png?raw=true" alt="text"></p><h3 id="thuc-hien-chuc-nang-them-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-them-record" aria-hidden="true">#</a> Th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng th\xEAm record</h3><ol><li>Trong routes/sach.js, code l\u1EA1i ch\u1EE9c n\u0103ng th\xEAm m\u1EDBi record v\xE0o table \u0111\u1EC3 \u0111\u01B0\u1EE3c nh\u01B0 sau:</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>  
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">&#39;INSERT INTO sach SET ?&#39;</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;thongbao&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u0110\xE3 ch\xE8n xong s\xE1ch&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>Test: M\u1EDF Postman \u0111\u1EC3 test</li></ol><p>Trong tool postman, ch\u1ECDn method POST v\xE0 nh\u1EADp url r\u1ED3i nh\u1EAFp Send nh\u01B0 h\xECnh</p><p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-create.png?raw=true" alt="text"></p><h3 id="thuc-hien-chuc-nang-cap-nhat-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-cap-nhat-record" aria-hidden="true">#</a> Th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng c\u1EADp nh\u1EADt record</h3><ol><li>Trong routes/sach.js, code l\u1EA1i ch\u1EE9c n\u0103ng c\u1EADp nh\u1EADt record trong table \u0111\u1EC3 \u0111\u01B0\u1EE3c nh\u01B0 sau:</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">&#39;UPDATE sach SET ? WHERE id = ?&#39;</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;thongbao&quot;</span><span class="token operator">:</span> <span class="token string">&#39;\u0110\xE3 c\u1EADp nh\u1EADt s\xE1ch&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>Test: M\u1EDF Postman \u0111\u1EC3 test</li></ol><p>Trong tool postman, ch\u1ECDn method PUT v\xE0 nh\u1EADp url r\u1ED3i nh\u1EAFp Send nh\u01B0 h\xECnh <img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-update.png?raw=true" alt="text"></p><h3 id="thuc-hien-chuc-nang-xoa-record" tabindex="-1"><a class="header-anchor" href="#thuc-hien-chuc-nang-xoa-record" aria-hidden="true">#</a> Th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng x\xF3a record</h3><ol><li>Trong routes/sach.js, code l\u1EA1i ch\u1EE9c n\u0103ng x\xF3a record trong table \u0111\u1EC3 \u0111\u01B0\u1EE3c nh\u01B0 sau:</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> id <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">&#39;DELETE FROM sach WHERE id = ?&#39;</span>
    db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> id <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;thongbao&quot;</span><span class="token operator">:</span> <span class="token string">&#39;\u0110\xE3 x\xF3a th\xE0nh c\xF4ng&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>Test: M\u1EDF Postman \u0111\u1EC3 test</li></ol><p>Trong tool postman, ch\u1ECDn method DELETE v\xE0 nh\u1EADp url r\u1ED3i nh\u1EAFp Send nh\u01B0 h\xECnh</p><p><img src="https://github.com/Theanishtar/WEB503-NODEJS/blob/main/lab05/imgs/postman-test-delete.png?raw=true" alt="text"></p><p>Tr\xEAn \u0111\xE2y l\xE0 ph\u1EA7n h\u01B0\u1EDBng d\u1EABn RESTful API trong NodeJS, bao g\u1ED3m c\xE1c kh\xE1i ni\u1EC7m, c\xE1ch t\u1EA1o api, c\xE1ch test. C\xE1c v\u1EA5n \u0111\u1EC1 li\xEAn quan v\u1EABn c\xF2n, \u0111\xF3 l\xE0 authentication trong restful, validation, k\u1EBFt h\u1EE3p v\u1EDBi ph\u1EA7n front end\u2026 s\u1EBD \u0111\u01B0\u1EE3c tr\xECnh b\xE0y ti\u1EBFp sau.</p><p>B\xE0i t\u1EADp: m\u1EDDi b\u1EA1n th\u1EF1c hi\u1EC7n t\u1EA1o b\u1ED9 c\xE1c h\xE0m restful api t\u01B0\u01A1ng t\u1EF1 nh\u01B0 tr\xECnh b\xE0y \u1EDF tr\xEAn nh\u01B0ng v\u1EDBi table loai.</p>`,57),e=[o];function c(u,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};

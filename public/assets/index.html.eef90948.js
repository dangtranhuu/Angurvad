import{_ as o,r as e,o as u,c as i,d as a,e as n,a as t,w as p,b as c}from"./app.dc9b24b0.js";const l={},h=a("p",null,[n("Ph\u01B0\u01A1ng th\u1EE9c l\xE0 c\u1EA5u tr\xFAc ch\u01B0\u01A1ng tr\xECnh th\xFA v\u1ECB do ch\xEDnh b\u1EA3n th\xE2n ta c\xF3 th\u1EC3 x\xE2y d\u1EF1ng \u0111\u01B0\u1EE3c. C\xF9ng m\xECnh t\xECm hi\u1EC3u v\u1EC1 "),a("strong",null,"Ph\u01B0\u01A1ng th\u1EE9c"),n(" nh\xE9!!")],-1),r=a("strong",null,"ph\u01B0\u01A1ng th\u1EE9c",-1),k=c(`<h2 id="_1-khai-niem" tabindex="-1"><a class="header-anchor" href="#_1-khai-niem" aria-hidden="true">#</a> 1. Kh\xE1i ni\u1EC7m</h2><p><strong>Methods</strong> (<em>ph\u01B0\u01A1ng th\u1EE9c</em>) : l\xE0 m\u1ED9t t\u1EADp h\u1EE3p c\xE1c c\xE2u l\u1EC7nh \u0111\u1EC3 x\u1EED l\xFD m\u1ED9t s\u1ED1 t\xE1c v\u1EE5 c\u1EE5 th\u1EC3 v\xE0 tr\u1EA3 l\u1EA1i ph\u1EA3n h\u1ED3i cho n\u01A1i \u0111\xE3 g\u1ECDi ph\u01B0\u01A1ng th\u1EE9c. C\xE1c <strong>ph\u01B0\u01A1ng th\u1EE9c</strong> cho ph\xE9p ch\xFAng ta vi\u1EBFt m\xE3 c\xF3 th\u1EC3 t\xE1i s\u1EED d\u1EE5ng v\xE0 chia ch\u01B0\u01A1ng tr\xECnh c\u1EE7a ch\xFAng ta th\xE0nh m\u1ED9t s\u1ED1 \u0111\u01A1n v\u1ECB c\xF4ng vi\u1EC7c nh\u1ECF. Ph\u01B0\u01A1ng th\u1EE9c Java th\xFAc \u0111\u1EA9y m\xE3 s\u1EA1ch v\xE0 d\u1EC5 \u0111\u1ECDc h\u01A1n.</p><blockquote><p>V\u1EDBi c\xE1c ng\xF4n ng\u1EEF l\u1EADp tr\xECnh kh\xE1c nh\u01B0: <strong>C</strong>, <strong>C++</strong>, <strong>JavaScript</strong> th\xEC ph\u01B0\u01A1ng th\u1EE9c c\xF2n \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 <strong>Function</strong> (<em>h\xE0m</em>)</p></blockquote><p>N\xF3i to\xE0n \u0111\u1ECBnh ngh\u0129a th\xEC kh\xF4 khan l\u1EAFm, c\xF9ng m\xECnh t\xECm hi\u1EC3u c\u1EE5 th\u1EC3 qua m\u1ED7i b\xE0i t\u1EADp v\u1EC1 ph\u01B0\u01A1ng th\u1EE9c nh\xE1...</p><h2 id="_2-khai-bao" tabindex="-1"><a class="header-anchor" href="#_2-khai-bao" aria-hidden="true">#</a> 2. Khai b\xE1o</h2><h3 id="phuong-thuc-khong-co-du-lieu-tra-ve" tabindex="-1"><a class="header-anchor" href="#phuong-thuc-khong-co-du-lieu-tra-ve" aria-hidden="true">#</a> Ph\u01B0\u01A1ng th\u1EE9c kh\xF4ng c\xF3 d\u1EEF li\u1EC7u tr\u1EA3 v\u1EC1</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DangHocJava</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Say: &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> hel <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
		<span class="token function">say</span><span class="token punctuation">(</span>hel<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token comment">// Output: Say: Hello </span>
</code></pre></div><p>Nh\u1EEFng ph\u01B0\u01A1ng th\u1EE9c c\xF3 t\u1EEB <strong>void</strong> l\xE0 nh\u1EEFng ph\u01B0\u01A1ng th\u1EE9c kh\xF4ng c\xF3 d\u1EEF li\u1EC7u tr\u1EA3 v\u1EC1.</p><p>B\u1EA1n c\xF3 th\u1EC3 g\u1ECDi c\xE1c ph\u01B0\u01A1ng th\u1EE9c n\xE0y nh\u01B0 m\u1ED9t c\xE2u l\u1EC7nh b\xECnh th\u01B0\u1EDDng.</p><details class="custom-container details"><summary>Bonus</summary><ul><li>Nh\u01B0 c\xE1c b\u1EA1n c\xF3 th\u1EC3 th\u1EA5y, \u1EDF tr\xEAn m\xECnh \u0111\u1EC1 c\u1EADp t\u1EDBi t\u1EEB kh\xF3a <strong>static</strong> ph\xEDa tr\u01B0\u1EDBc t\xEAn ph\u01B0\u01A1ng th\u1EE9c (say). N\xF3i n\xF4m na l\xE0 <strong>static</strong> gi\xFAp cho ta c\xF3 th\u1EC3 g\u1ECDi ph\u01B0\u01A1ng th\u1EE9c \u0111\xF3 trong b\u1EA5t k\xEC ph\u01B0\u01A1ng th\u1EE9c n\xE0o</li></ul></details><h3 id="phuong-thuc-co-du-lieu-tra-ve" tabindex="-1"><a class="header-anchor" href="#phuong-thuc-co-du-lieu-tra-ve" aria-hidden="true">#</a> Ph\u01B0\u01A1ng th\u1EE9c c\xF3 d\u1EEF li\u1EC7u tr\u1EA3 v\u1EC1</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DangHocJava</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Sum: &quot;</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
<span class="token comment">// Output: Sum: 11 </span>
</code></pre></div><p>Nh\u1EEFng ph\u01B0\u01A1ng th\u1EE9c c\xF3 c\xE1c t\u1EEB kh\xF3a bi\u1EC3u th\u1ECB ki\u1EC3u d\u1EEF li\u1EC7u ph\xEDa tr\u01B0\u1EDBc nh\u01B0 <strong>int, float, double, String, char, ...</strong> l\xE0 nh\u1EEFng ph\u01B0\u01A1ng th\u1EE9c c\xF3 d\u1EEF li\u1EC7u tr\u1EA3 v\u1EC1.</p>`,13),d=c(`<h2 id="_3-tham-so-va-\u0111oi-so-trong-phuong-thuc" tabindex="-1"><a class="header-anchor" href="#_3-tham-so-va-\u0111oi-so-trong-phuong-thuc" aria-hidden="true">#</a> 3. Tham s\u1ED1 v\xE0 \u0111\u1ED1i s\u1ED1 trong ph\u01B0\u01A1ng th\u1EE9c</h2><h3 id="tham-so" tabindex="-1"><a class="header-anchor" href="#tham-so" aria-hidden="true">#</a> Tham s\u1ED1</h3><p>Tham s\u1ED1 l\xE0 nh\u1EEFng gi\xE1 tr\u1ECB \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a s\u1EB5ng trong ph\u01B0\u01A1ng th\u1EE9c, n\u1EB1m trong d\u1EA5u <mark>()</mark> v\xE0 c\xE1ch nhau b\u1EDFi d\u1EA5u <mark>,</mark>. Ph\xEDa tr\u01B0\u1EDBc tham s\u1ED1 s\u1EBD ch\u1EE9a ki\u1EC3u d\u1EEF li\u1EC7u.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// C\xE1c tham s\u1ED1 g\u1ED3m: a v\xE0 b \u27F9 (int a, int b)</span>
</code></pre></div><h3 id="\u0111oi-so" tabindex="-1"><a class="header-anchor" href="#\u0111oi-so" aria-hidden="true">#</a> \u0110\u1ED1i s\u1ED1</h3><p>\u0110\u1ED1i s\u1ED1 l\xE0 nh\u1EEFng c\xE2u l\u1EC7nh d\xF9ng truy\u1EC1n d\u1EEF li\u1EC7u v\xE0o ph\u01B0\u01A1ng th\u1EE9c, do ng\u01B0\u1EDDi g\u1ECDi ph\u01B0\u01A1ng th\u1EE9c truy\u1EC1n v\xE0o</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// C\xE1c \u0111\u1ED1i s\u1ED1 g\u1ED3m: 3 v\xE0 3 \u27F9 (3, 5)</span>
</code></pre></div><details class="custom-container details"><summary>Bonus</summary><p>Qu\xE1 tr\xECnh \u0111\u1EB7t c\xE1c \u0111\u1ED1i s\u1ED1 v\xE0o ph\u01B0\u01A1ng th\u1EE9c g\u1ECDi l\xE0 <strong><em>Truy\u1EC1n tham s\u1ED1</em></strong></p></details><h2 id="_4-gia-tri-tra-ve" tabindex="-1"><a class="header-anchor" href="#_4-gia-tri-tra-ve" aria-hidden="true">#</a> 4. Gi\xE1 tr\u1ECB tr\u1EA3 v\u1EC1</h2><p>M\xECnh \u0111\xE3 n\xF3i c\xE1c ph\u01B0\u01A1ng th\u1EE9c c\xF3 d\u1EEF li\u1EC7u tr\u1EA3 v\u1EC1 s\u1EBD mang d\u1EEF li\u1EC7u nh\u01B0 m\u1ED9t bi\u1EBFn. V\u1EADy c\u1EE5 th\u1EC3 gi\xE1 tr\u1ECB \u0111\xF3 \u0111\u01B0\u1EE3c x\xE1c \u0111\u1ECBnh nh\u01B0 l\xE0o ?</p><p>\u0110\u1EC3 bi\u1EBFt ph\u01B0\u01A1ng th\u1EE9c tr\u1EA3 v\u1EC1 gi\xE1 tr\u1ECB g\xEC b\u1EA1n ch\u1EC9 c\u1EA7n xem <em>ki\u1EC3u d\u1EEF li\u1EC7u</em> \u0111\u01B0\u1EE3c khai b\xE1o tr\u01B0\u1EDBc t\xEAn ph\u01B0\u01A1ng th\u1EE9c nha.</p><p>Trong l\xFAc x\xE2y d\u1EF1ng, b\u1EA1n c\xF3 th\u1EC3 tr\u1EA3 v\u1EC1 gi\xE1 tr\u1ECB cho ph\u01B0\u01A1ng th\u1EE9c b\u1EA5t c\u1EE9 l\xFAc n\xE0o b\u1EB1ng l\u1EC7nh <strong><em>&quot;return&quot;</em></strong></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">fullname</span><span class="token punctuation">(</span><span class="token class-name">String</span> firstname<span class="token punctuation">,</span> <span class="token class-name">String</span> lastname<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> firstname <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
	<span class="token function">fullname</span><span class="token punctuation">(</span><span class="token string">&quot;Tran&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Huu Dang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Output: &quot;Tran Huu Dang&quot;</span>
</code></pre></div><p>Ph\u01B0\u01A1ng th\u1EE9c s\u1EBD <strong><em>d\u1EEBng</em></strong> v\xE0 <strong><em>tr\u1EA3 v\u1EC1 gi\xE1 tr\u1ECB</em></strong> ngay l\u1EB7p t\u1EE9c khi th\u1EA5y l\u1EC7nh <mark>return</mark></p><details class="custom-container details"><summary>Bonus</summary><ul><li>C\xE1c l\u1EC7nh sau return l\xE0 v\xF4 ngh\u0129a v\xEC v\u1EADy Java s\u1EBD b\xE1o l\u1ED7i n\u1EBFu sau return l\xE0 m\u1ED9t l\u1EC7nh khi return kh\xF4ng n\u1EB1m trong IF</li><li>C\xE1i n\xE0y b\u1EA1n n\xE0o t\u01B0 duy t\u1ED1t s\u1EBD hi\u1EC3u, c\xF2n kh\xF4ng c\u1EE9 nghi\u1EC1n ng\u1EABm nh\xE1 \u{1F62D}</li></ul></details><h2 id="_5-pham-vi-cua-bien" tabindex="-1"><a class="header-anchor" href="#_5-pham-vi-cua-bien" aria-hidden="true">#</a> 5. Ph\u1EA1m vi c\u1EE7a bi\u1EBFn</h2><p>V\u1EA5n \u0111\u1EC1 n\xE0y l\xE0m nhi\u1EC1u b\u1EA1n s\u1EBD nh\u1EDB. Ch\u1EC9 c\u1EA7n nh\u1EDB ng\u1EAFn g\u1ECDn l\xE0 <em>Bi\u1EBFn n\u1EB1m trong c\u1EB7p d\u1EA5u {} th\xEC ch\u1EC9 d\xF9ng \u0111\u01B0\u1EE3c ph\xEDa trong c\u1EB7p d\u1EA5u \u0111\xF3</em></p><p>Ngo\xE0i ra th\xEC c\xF3 nh\u1EEFng t\u1EEB kh\xF3a nh\u01B0 <em>public</em>, <em>private</em> c\xF3 th\u1EC3 c\u1EA5u h\xECnh \u0111\u01B0\u1EE3c ph\u1EA1m vi c\u1EE7a bi\u1EBFn trong m\u1ED9t <a href="">l\u1EDBp</a> (<em>m\xECnh s\u1EBD gi\u1EDBi thi\u1EC7u trong b\xE0i vi\u1EBFt sau</em>)</p><h2 id="_6-ham-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#_6-ham-\u0111e-quy" aria-hidden="true">#</a> 6. H\xE0m \u0111\u1EC7 quy</h2><p>\u0110\u1EC7 quy l\xE0 m\u1ED9t kh\xE1i ni\u1EC7m v\u1EC1 ng\xF4n ng\u1EEF l\u1EADp tr\xECnh \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng v\xF4 c\xF9ng ph\u1ED5 bi\u1EBFn hi\u1EC7n nay. C\xF3 th\u1EC3 hi\u1EC3u v\u1EC1 \u0111\u1EC7 quy ch\xEDnh l\xE0 h\xE0m t\u1EF1 g\u1ECDi ch\xEDnh n\xF3. Theo \u0111\xF3, c\xE1c \u0111\u1ED1i t\u01B0\u1EE3ng mu\u1ED1n \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 \u0111\u1EC7 quy th\xEC n\xF3 hay m\u1ED9t ph\u1EA7n c\u1EE7a n\xF3 ph\u1EA3i th\xF4ng qua kh\xE1i ni\u1EC7m v\u1EC1 ch\xEDnh n\xF3</p><p><em>Ch\u01B0a hi\u1EC3u h\u1EA3 \u{1F606}\u{1F606}. Xem \u1EA3nh sau v\xE0 suy ng\u1EABm nhen...</em></p><p><img src="https://github.com/dangtranhuu/images/blob/main/angurvad/java-core/session7/01-12-45-30-b29.gif?raw=true" alt="b29.gif"></p><blockquote><p>\u{1F62D} \u0110\u1EC7 quy r\u1EA5t kh\xF3 \u0111\u1EC3 hi\u1EC3u, v\xE0 c\xE1ch duy nh\u1EA5t \u0111\u1EC3 l\xE0m t\u1ED1t n\xF3 l\xE0 <mark>th\u1EF1c h\xE0nh th\u1EADt nhi\u1EC1u v\u1EDBi n\xF3</mark>.</p></blockquote><h3 id="thanh-phan-trong-ham-\u0111e-quy-gom-nhung-gi" tabindex="-1"><a class="header-anchor" href="#thanh-phan-trong-ham-\u0111e-quy-gom-nhung-gi" aria-hidden="true">#</a> Th\xE0nh ph\u1EA7n trong h\xE0m \u0111\u1EC7 quy g\u1ED3m nh\u1EEFng g\xEC?</h3><ul><li><p>\u0110\u1ED1i v\u1EDBi ph\u1EA7n c\u01A1 s\u1EDF: \u0110\xE2y ch\xEDnh l\xE0 \u0111i\u1EC1u ki\u1EC7n \u0111\u1EC3 c\xF3 th\u1EC3 tho\xE1t ph\u1EA7n \u0111\u1EC7 quy. N\u1EBFu nh\u01B0 thi\u1EBFu \u0111i n\xF3 th\xEC h\xE0m \u0111\u1EC7 quy s\u1EBD lu\xF4n g\xE2y ra v\u1EA5n \u0111\u1EC1 tr\xE0n kh\u1ECFi b\u1ED9 nh\u1EDB Stack.</p></li><li><p>\u0110\u1ED1i v\u1EDBi ph\u1EA7n \u0111\u1EC7 quy: \u0110\u1ED1i v\u1EDBi ph\u1EA7n n\xE0y th\xEC \u1EDF th\xE2n h\xE0m s\u1EBD c\xF3 ch\u1EE9a \u0111\u1EC7 quy, n\xF3 \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n \u0111\u1EBFn khi th\u1ECFa m\xE3n \u0111\u01B0\u1EE3c \u0111i\u1EC1u ki\u1EC7n \u1EDF ph\u1EA7n tr\xEAn.</p></li></ul><h3 id="cac-uu-\u0111iem-han-che-va-\u0111ieu-kien-\u0111e-thuc-hien-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#cac-uu-\u0111iem-han-che-va-\u0111ieu-kien-\u0111e-thuc-hien-\u0111e-quy" aria-hidden="true">#</a> C\xE1c \u01B0u \u0111i\u1EC3m, h\u1EA1n ch\u1EBF v\xE0 \u0111i\u1EC1u ki\u1EC7n \u0111\u1EC3 th\u1EF1c hi\u1EC7n \u0111\u1EC7 quy</h3><h4 id="uu-\u0111iem-cua-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#uu-\u0111iem-cua-\u0111e-quy" aria-hidden="true">#</a> \u01AFu \u0111i\u1EC3m c\u1EE7a \u0111\u1EC7 quy</h4><ul><li><p>Ch\u01B0\u01A1ng tr\xECnh \u0111\u1EC7 quy th\u01B0\u1EDDng d\u1EC5 hi\u1EC3u, kh\xF4ng ph\u1EE9c t\u1EA1p</p></li><li><p>Ng\u01B0\u1EDDi d\xF9ng c\xF3 th\u1EC3 l\xE0m \u0111\u01B0\u1EE3c nhi\u1EC1u thao t\xE1c \u0111\u1EC3 t\xEDnh to\xE1n b\u1EB1ng 1 \u0111o\u1EA1n ch\u01B0\u01A1ng tr\xECnh d\u1EC5 hi\u1EC3u</p></li><li><p>C\xF3 th\u1EC3 gi\u1EA3i ngh\u0129a \u0111\u01B0\u1EE3c t\u1EADp h\u1EE3p v\xF4 h\u1EA1n nh\u1EEFng \u0111\u1ED1i t\u01B0\u1EE3ng qua c\xE1c h\u1EEFu h\u1EA1n \u0111\u01B0\u1EE3c ph\xE1t bi\u1EC3u.</p></li></ul><h4 id="ve-nhuoc-\u0111iem-cua-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#ve-nhuoc-\u0111iem-cua-\u0111e-quy" aria-hidden="true">#</a> V\u1EC1 nh\u01B0\u1EE3c \u0111i\u1EC3m c\u1EE7a \u0111\u1EC7 quy</h4><ul><li><p>Ch\u01B0\u01A1ng tr\xECnh n\xE0y b\u1ECB ti\xEAu t\u1ED1n kh\xE1 nhi\u1EC1u dung l\u01B0\u1EE3ng</p></li><li><p>Ho\u1EA1t \u0111\u1ED9ng ch\u1EADm</p></li></ul><h3 id="\u0111e-viet-\u0111uoc-\u0111e-quy-can-\u0111am-bao-yeu-to-gi" tabindex="-1"><a class="header-anchor" href="#\u0111e-viet-\u0111uoc-\u0111e-quy-can-\u0111am-bao-yeu-to-gi" aria-hidden="true">#</a> \u0110\u1EC3 vi\u1EBFt \u0111\u01B0\u1EE3c \u0111\u1EC7 quy c\u1EA7n \u0111\u1EA3m b\u1EA3o y\u1EBFu t\u1ED1 g\xEC?</h3><p>C\xE1c y\u1EBFu t\u1ED1 c\u01A1 b\u1EA3n \u0111\u1EC3 c\xF3 th\u1EC3 vi\u1EBFt \u0111\u1EC7 quy nh\u01B0 sau:</p><ul><li><p>C\xE1c v\u1EA5n \u0111\u1EC1 c\u1EA7n ph\u1EA3i x\u1EED l\xFD \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt b\u1EB1ng \u0111\u1EC7 quy Ng\xF4n ng\u1EEF s\u1EED d\u1EE5ng \u0111\u1EC3 vi\u1EBFt ch\u01B0\u01A1ng tr\xECnh c\u1EA7n ph\u1EA3i c\xF3 s\u1EF1 h\u1ED7 tr\u1EE3 \u0111\u1EC7 quy ( h\u1ED7 tr\u1EE3 h\xE0m)</p></li><li><p>C\u1EA7n h\u1EA1n ch\u1EBF vi\u1EC7c khai b\xE1o bi\u1EBFn, h\xE0ng n\u1EB1m trong h\xE0m \u0111\u1EC7 quy n\u1EBFu nh\u01B0 n\xF3 kh\xF4ng quan tr\u1ECDng.</p></li></ul><h3 id="ung-dung-cu-the-cua-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#ung-dung-cu-the-cua-\u0111e-quy" aria-hidden="true">#</a> \u1EE8ng d\u1EE5ng c\u1EE5 th\u1EC3 c\u1EE7a \u0110\u1EC7 quy</h3><details class="custom-container details"><summary>T\xEDnh t\u1ED5ng t\u1EEB 1 \u0111\u1EBFn n</summary><div class="language-java ext-java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//n\xEAn s\u1EED d\u1EE5ng th\xEAm bi\u1EBFn \u0111\u1EC3 debug t\u1ED1t</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">sum1toN</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//n\xEAn s\u1EED d\u1EE5ng th\xEAm bi\u1EBFn n\xE0y \u0111\u1EC3 debug t\u1ED1t</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// output : 15</span>
</code></pre></div></details><details class="custom-container details"><summary>T\xEDnh giai th\u1EEBa</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai b\xE1o bi\u1EBFn th\xEAm \u0111\u1EC3 d\u1EC5 debug</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai b\xE1o bi\u1EBFn th\xEAm \u0111\u1EC5 d\u1EC5 debug</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//Output : 120</span>
</code></pre></div></details><details class="custom-container details"><summary>T\xEDnh d\xE3y fibonacci</summary><div class="language-java ext-java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai b\xE1o bi\u1EBFn th\xEAm \u0111\u1EC5 d\u1EC5 debug </span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//khai b\xE1o bi\u1EBFn th\xEAm \u0111\u1EC5 d\u1EC5 debug</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Output : 13</span>
</code></pre></div></details>`,37);function g(m,y){const s=e("RouterLink");return u(),i("div",null,[h,a("p",null,[n("Trong c\xE1c b\xE0i h\u1ECDc v\u1EC1 "),t(s,{to:"/post/2023/06/05/java-core-session5/"},{default:p(()=>[n("M\u1EA3ng")]),_:1}),n(" hay "),t(s,{to:"/post/2023/06/05/java-core-session6/"},{default:p(()=>[n("Chu\u1ED7i")]),_:1}),n(" ch\xFAng ta \u0111\xE3 \u0111\u01B0\u1EE3c bi\u1EBFt v\u1EC1 ph\u01B0\u01A1ng th\u1EE9c t\xEDnh \u0111\u1ED9 d\xE0i l\xE0 Length. V\u1EADy "),r,n(" l\xE0 g\xEC v\xE0 ho\u1EA1t \u0111\u1ED9ng nh\u01B0 th\u1EBF n\xE0o ?")]),k,a("p",null,[n("B\u1EA1n c\xF3 th\u1EC3 xem c\xE1c ph\u01B0\u01A1ng th\u1EE9c n\xE0y nh\u01B0 m\u1ED9t "),t(s,{to:"/post/2023/06/02/java-core-session2/#_3-bien"},{default:p(()=>[n("bi\u1EBFn")]),_:1}),n(" l\u01B0u gi\xE1 tr\u1ECB.")]),d])}var b=o(l,[["render",g],["__file","index.html.vue"]]);export{b as default};

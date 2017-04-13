/*!Name: jQuery.qrcode.js
 * Date: 2017-2-14 17:14:18 */
eval(function(a,e,c,b,d,i){if(d=function(a){return(e>a?"":d(parseInt(a/e)))+((a%=e)>35?String.fromCharCode(a+29):a.toString(36))},!"".replace(/^/,String)){for(;c--;)i[d(c)]=b[c]||d(c);b=[function(a){return i[a]}],d=function(){return"\\w+"},c=1}for(;c--;)b[c]&&(a=a.replace(new RegExp("\\b"+d(c)+"\\b","g"),b[c]));return a}("(1c($){'6C 7h';1a 5c=1c(f,g,h,i){1a j=5u(h,g);j.5y(f);j.5v();i=i||0;1a k=j.2h(),4g=j.2h()+2*i,1i=1c(a,b){a-=i;b-=i;1d(a<0||a>=k||b<0||b>=k){1b 2t}1b j.1i(a,b)},2f=1c(l,t,r,b){1a e=1z.1i,1t=1/4g;1z.1i=1c(a,c){1a d=c*1t,4r=a*1t,5M=d+1t,5F=4r+1t;1b e(a,c)&&(l>5M||d>r||t>5F||4r>b)}};1z.2u=f;1z.5V=g;1z.5W=h;1z.1w=4g;1z.1i=1i;1z.2f=2f},4h=(1c(){1a a=4Y.4U('1U');1b!!(a.2C&&a.2C('2d'))}()),4O=6f.6g.3E.6i(6m.6n)!=='[6x 6y]',3i=1c(a,b,c,d,e){c=1r.3H(1,c||1);d=1r.6z(40,d||40);1e(1a f=c;f<=d;f+=1){6A{1b 1h 5c(a,b,f,e)}6B(6D){}}},4S=1c(a,b,c){1a d=c.1o,2I=\"6E \"+(c.2A*d)+\"1R \"+c.5L,3M=$('<1U/>')[0].2C(\"2d\");3M.2I=2I;1a w=3M.6F(c.3w).1L,1S=c.2A,2b=w/d,1M=(1-2b)*c.4l,1E=(1-1S)*c.4m,2R=1M+2b,2z=1E+1S,1v=0.4B;1d(c.1X===1){a.2f(0,1E-1v,d,2z+1v)}1f{a.2f(1M-1v,1E-1v,2R+1v,2z+1v)}b.3L=c.4y;b.2I=2I;b.6k(c.3w,1M*d,1E*d+0.75*c.2A*d)},5K=1c(a,b,c){1a d=c.1o,w=c.2j.7K||1,h=c.2j.7J||1,1S=c.2A,2b=1S*w/h,1M=(1-2b)*c.4l,1E=(1-1S)*c.4m,2R=1M+2b,2z=1E+1S,1v=0.4B;1d(c.1X===3){a.2f(0,1E-1v,d,2z+1v)}1f{a.2f(1M-1v,1E-1v,2R+1v,2z+1v)}b.4p(c.2j,1M*d,1E*d,2b*d,1S*d)},4z=1c(a,b,c){1d($(c.1A).5z('2U')){b.4p(c.1A,0,0,c.1o,c.1o)}1f 1d(c.1A){b.3L=c.1A;b.7I(c.2N,c.2M,c.1o,c.1o)}1a d=c.1X;1d(d===1||d===2){4S(a,b,c)}1f 1d(d===3||d===4){5K(a,b,c)}},5C=1c(a,b,c,d,e,f,g,h){1d(a.1i(g,h)){b.7G(d,e,f,f)}},4u=1c(a,l,t,r,b,c,d,e,f,g){1d(d){a.2y(l+c,t)}1f{a.2y(l,t)}1d(e){a.1p(r-c,t);a.1Q(r,t,r,b,c)}1f{a.1p(r,t)}1d(f){a.1p(r,b-c);a.1Q(r,b,l,b,c)}1f{a.1p(r,b)}1d(g){a.1p(l+c,b);a.1Q(l,b,l,t,c)}1f{a.1p(l,b)}1d(d){a.1p(l,t+c);a.1Q(l,t,r,t,c)}1f{a.1p(l,t)}},5i=1c(a,l,t,r,b,c,d,e,f,g){1d(d){a.2y(l+c,t);a.1p(l,t);a.1p(l,t+c);a.1Q(l,t,l+c,t,c)}1d(e){a.2y(r-c,t);a.1p(r,t);a.1p(r,t+c);a.1Q(r,t,r-c,t,c)}1d(f){a.2y(r-c,b);a.1p(r,b);a.1p(r,b-c);a.1Q(r,b,r-c,b,c)}1d(g){a.2y(l+c,b);a.1p(l,b);a.1p(l,b-c);a.1Q(l,b,l+c,b,c)}},5r=1c(a,b,c,d,e,f,g,h){1a i=a.1i,4o=d+f,4n=e+f,2e=c.2e*f,3u=g-1,3v=g+1,3y=h-1,2Q=h+1,4Z=i(g,h),5d=i(3u,3y),2G=i(3u,h),5o=i(3u,2Q),2F=i(g,2Q),5s=i(3v,2Q),2E=i(3v,h),5B=i(3v,3y),2D=i(g,3y);1d(4Z){4u(b,d,e,4o,4n,2e,!2G&&!2D,!2G&&!2F,!2E&&!2F,!2E&&!2D)}1f{5i(b,d,e,4o,4n,2e,2G&&2D&&5d,2G&&2F&&5o,2E&&2F&&5s,2E&&2D&&5B)}},5D=1c(a,b,c){1a d=a.1w,1t=c.1o/d,3o=5C,1x,1B;1d(4O&&c.2e>0&&c.2e<=0.5){3o=5r}b.7E();1e(1x=0;1x<d;1x+=1){1e(1B=0;1B<d;1B+=1){1a l=c.2N+1B*1t,t=c.2M+1x*1t,w=1t;3o(a,b,c,l,t,w,1x,1B)}}1d($(c.1P).5z('2U')){b.7D='7u(0,0,0,0.5)';b.7t=2;b.7s();1a e=b.4k;b.4k=\"7r-7q\";b.1P();b.4k=e;b.7p();b.4p(c.1P,0,0,c.1o,c.1o);b.7o()}1f{b.3L=c.1P;b.1P()}},4e=1c(a,b){1a c=3i(b.2u,b.3a,b.3b,b.3c,b.3h);1d(!c){1b 1u}1a d=$(a).4c('4x',c),4b=d[0].2C('2d');4z(c,4b,b);5D(c,4b,b);1b d},4a=1c(a){1a b=$('<1U/>').3Z('1L',a.1o).3Z('2s',a.1o);1b 4e(b,a)},4N=1c(a){1b $('<2U/>').3Z('7m',4a(a)[0].7l('2j/7k'))},7j=1c(a){1a b=3i(a.2u,a.3a,a.3b,a.3c,a.3h);1d(!b){1b 1u}1a c=a.1o,3W=a.1A,3D=1r.1F,1w=b.1w,1t=3D(c/1w),3U=3D(0.5*(c-1t*1w)),1x,1B,5j={5m:'7i',2N:0,2M:0,2S:0,2T:0,1L:c,2s:c},5x={5m:'7g',2S:0,2T:0,1L:1t,2s:1t,7f:a.1P},$2q=$('<2q/>').4c('4x',b).1y(5j);1d(3W){$2q.1y('1A-2W',3W)}1e(1x=0;1x<1w;1x+=1){1e(1B=0;1B<1w;1B+=1){1d(b.1i(1x,1B)){$('<2q/>').1y(5x).1y({2N:3U+1B*1t,2M:3U+1x*1t}).3T($2q)}}}1b $2q},5P=1c(a){1a b=3i(a.2u,a.3a,a.3b,a.3c,a.3h);1d(!b){1b 1u}1a c=$('<2Z></2Z>').1y(\"1T\",\"2p\").1y(\"1T-2o\",\"2o\").1y('1A-2W',a.1A);1a d=1r.1F(a.1o/b.1w);c.1y(\"1L\",d*b.1w+\"1R\").1y(\"2s\",d*b.1w+\"1R\");1e(1a e=0;e<b.1w;e++){1a f=$('<3e></3e>').1y('2s',d+\"1R\").3T(c);1e(1a g=0;g<b.1w;g++){$('<3R></3R>').1y('1L',d+\"1R\").1y('1A-2W',b.1i(e,g)?a.1P:a.1A).3T(f)}}1b c},4C=1c(a){1d(!!4Y.4U('1U').2C){1d(4h&&a.3Q==='1U'){1b 4a(a)}1f 1d(4h&&a.3Q==='2j'){1b 4N(a)}}1f{1b 5P(a)}},4Q={3Q:'1U',3b:1,3c:40,3a:'L',2N:0,2M:0,1o:77,1P:'#4W',1A:1u,2u:'4X 2u',2e:0,3h:0,1X:0,2A:0.1,4l:0.5,4m:0.5,3w:'4X 3w',5L:'6Z',4y:'#4W',2j:1u};$.3o.6Y=1c(a){1a b=$.6W({},4Q,a);1b 1z.6V(1c(){1d(1z.6U.6N()==='1U'){4e(1z,b)}1f{$(1z).6L(4C(b))}})};1a 5u=1c(){1a P=1c(s,t){1a u=6K;1a v=6I;1a w=s;1a z=R[t];1a A=1u;1a B=0;1a C=1u;1a D=1h 1l();1a E={};1a F=1c(e,f){B=w*4+17;A=1c(a){1a b=1h 1l(a);1e(1a c=0;c<a;c+=1){b[c]=1h 1l(a);1e(1a d=0;d<a;d+=1){b[c][d]=1u}}1b b}(B);G(0,0);G(B-7,0);G(0,B-7);J();I();L(e,f);1d(w>=7){K(e)}1d(C==1u){C=O(w,z,D)}M(C,f)};1a G=1c(a,b){1e(1a r=-1;r<=7;r+=1){1d(a+r<=-1||B<=a+r)1J;1e(1a c=-1;c<=7;c+=1){1d(b+c<=-1||B<=b+c)1J;1d((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){A[a+r][b+c]=2n}1f{A[a+r][b+c]=2t}}}};1a H=1c(){1a a=0;1a b=0;1e(1a i=0;i<8;i+=1){F(2n,i);1a c=T.4L(E);1d(i==0||a>c){a=c;b=i}}1b b};1a I=1c(){1e(1a r=8;r<B-8;r+=1){1d(A[r][6]!=1u){1J}A[r][6]=(r%2==0)}1e(1a c=8;c<B-8;c+=1){1d(A[6][c]!=1u){1J}A[6][c]=(c%2==0)}};1a J=1c(){1a a=T.4M(w);1e(1a i=0;i<a.1g;i+=1){1e(1a j=0;j<a.1g;j+=1){1a b=a[i];1a d=a[j];1d(A[b][d]!=1u){1J}1e(1a r=-2;r<=2;r+=1){1e(1a c=-2;c<=2;c+=1){1d(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){A[b+r][d+c]=2n}1f{A[b+r][d+c]=2t}}}}}};1a K=1c(a){1a b=T.4P(w);1e(1a i=0;i<18;i+=1){1a c=(!a&&((b>>i)&1)==1);A[1r.1F(i/3)][i%3+B-8-3]=c}1e(1a i=0;i<18;i+=1){1a c=(!a&&((b>>i)&1)==1);A[i%3+B-8-3][1r.1F(i/3)]=c}};1a L=1c(a,b){1a c=(z<<3)|b;1a d=T.4R(c);1e(1a i=0;i<15;i+=1){1a e=(!a&&((d>>i)&1)==1);1d(i<6){A[i][8]=e}1f 1d(i<8){A[i+1][8]=e}1f{A[B-15+i][8]=e}}1e(1a i=0;i<15;i+=1){1a e=(!a&&((d>>i)&1)==1);1d(i<8){A[8][B-i-1]=e}1f 1d(i<9){A[8][15-i-1+1]=e}1f{A[8][15-i-1]=e}}A[B-8][8]=(!a)};1a M=1c(a,b){1a d=-1;1a e=B-1;1a f=7;1a g=0;1a h=T.4T(b);1e(1a i=B-1;i>0;i-=2){1d(i==6)i-=1;1q(2n){1e(1a c=0;c<2;c+=1){1d(A[e][i-c]==1u){1a j=2t;1d(g<a.1g){j=(((a[g]>>>f)&1)==1)}1a k=h(e,i-c);1d(k){j=!j}A[e][i-c]=j;f-=1;1d(f==-1){g+=1;f=7}}}e+=d;1d(e<0||B<=e){e-=d;d=-d;2Y}}}};1a N=1c(a,b){1a c=0;1a d=0;1a e=0;1a f=1h 1l(b.1g);1a g=1h 1l(b.1g);1e(1a r=0;r<b.1g;r+=1){1a h=b[r].3K;1a j=b[r].3J-h;d=1r.3H(d,h);e=1r.3H(e,j);f[r]=1h 1l(h);1e(1a i=0;i<f[r].1g;i+=1){f[r][i]=1C&a.57()[i+c]}c+=h;1a k=T.5a(j);1a l=2l(f[r],k.1s()-1);1a m=l.3I(k);g[r]=1h 1l(k.1s()-1);1e(1a i=0;i<g[r].1g;i+=1){1a n=i+m.1s()-g[r].1g;g[r][i]=(n>=0)?m.1G(n):0}}1a o=0;1e(1a i=0;i<b.1g;i+=1){o+=b[i].3J}1a p=1h 1l(o);1a q=0;1e(1a i=0;i<d;i+=1){1e(1a r=0;r<b.1g;r+=1){1d(i<f[r].1g){p[q]=f[r][i];q+=1}}}1e(1a i=0;i<e;i+=1){1e(1a r=0;r<b.1g;r+=1){1d(i<g[r].1g){p[q]=g[r][i];q+=1}}}1b p};1a O=1c(a,b,c){1a d=V.5l(a,b);1a e=W();1e(1a i=0;i<c.1g;i+=1){1a f=c[i];e.1W(f.3G(),4);e.1W(f.1s(),T.1I(f.3G(),a));f.1H(e)}1a g=0;1e(1a i=0;i<d.1g;i+=1){g+=d[i].3K}1d(e.1I()>g*8){1n 1h 1m('6v 1g 6t. ('+e.1I()+'>'+g*8+')');}1d(e.1I()+4<=g*8){e.1W(0,4)}1q(e.1I()%8!=0){e.3F(2t)}1q(2n){1d(e.1I()>=g*8){2Y}e.1W(u,8);1d(e.1I()>=g*8){2Y}e.1W(v,8)}1b N(e,d)};E.5y=1c(a){1a b=X(a);D.1D(b);C=1u};E.1i=1c(a,b){1d(a<0||B<=a||b<0||B<=b){1n 1h 1m(a+','+b);}1b A[a][b]};E.2h=1c(){1b B};E.5v=1c(){F(2t,H())};E.6s=1c(a,b){a=a||2;b=(2w b=='2x')?a*4:b;1a d='';d+='<2Z 3s=\"';d+=' 1T-1L: 2p; 1T-3s: 5E;';d+=' 1T-2o: 2o;';d+=' 2S: 2p; 2T: '+b+'1R;';d+='\">';d+='<5G>';1e(1a r=0;r<E.2h();r+=1){d+='<3e>';1e(1a c=0;c<E.2h();c+=1){d+='<3R 3s=\"';d+=' 1T-1L: 2p; 1T-3s: 5E;';d+=' 1T-2o: 2o;';d+=' 2S: 2p; 2T: 2p;';d+=' 1L: '+a+'1R;';d+=' 2s: '+a+'1R;';d+=' 1A-2W: ';d+=E.1i(r,c)?'#6r':'#6p';d+=';';d+='\"/>'}d+='</3e>'}d+='</5G>';d+='</2Z>';1b d};E.6o=1c(a,b){a=a||2;b=(2w b=='2x')?a*4:b;1a d=E.2h()*a+b*2;1a e=b;1a f=d-b;1b 5N(d,d,1c(x,y){1d(e<=x&&x<f&&e<=y&&y<f){1a c=1r.1F((x-e)/a);1a r=1r.1F((y-e)/a);1b E.1i(r,c)?0:1}1f{1b 1}})};1b E};P.5Q=1c(s){1a a=1h 1l();1e(1a i=0;i<s.1g;i+=1){1a c=s.2J(i);a.1D(c&1C)}1b a};P.6l=1c(j,l){1a m=1c(){1a a=4v(j);1a c=1c(){1a b=a.3V();1d(b==-1)1n 1h 1m();1b b};1a d=0;1a e={};1q(2n){1a f=a.3V();1d(f==-1)2Y;1a g=c();1a h=c();1a i=c();1a k=2k.2i((f<<8)|g);1a v=(h<<8)|i;e[k]=v;d+=1}1d(d!=l){1n 1h 1m(d+' != '+l);}1b e}();1a n='?'.2J(0);1b 1c(s){1a a=1h 1l();1e(1a i=0;i<s.1g;i+=1){1a c=s.2J(i);1d(c<4w){a.1D(c)}1f{1a b=m[s.4t(i)];1d(2w b=='6j'){1d((b&1C)==b){a.1D(b)}1f{a.1D(b>>>8);a.1D(b&1C)}}1f{a.1D(n)}}}1b a}};1a Q={3z:1<<0,3A:1<<1,2P:1<<2,3B:1<<3};1a R={L:1,M:0,Q:3,H:2};1a S={4D:0,4E:1,4F:2,4G:3,4H:4,4I:5,4J:6,4K:7};1a T=1c(){1a l=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,3N],[6,30,58,1Z],[6,34,62,3O],[6,28,50,72,6e],[6,26,50,74,3j],[6,30,54,78,3g],[6,28,54,3f,3S],[6,32,58,5g,2X],[6,30,58,1Z,2H],[6,34,62,3O,2r],[6,26,50,74,3j,1O],[6,30,54,78,3g,5k],[6,26,52,78,6d,6c],[6,30,56,3N,3t,5n],[6,34,60,1Z,5p,5q],[6,30,58,1Z,2H,3q],[6,34,62,3O,2r,1N],[6,30,54,78,3g,5k,5t],[6,24,50,76,3g,4w,6b],[6,28,54,3f,3S,5w,6a],[6,32,58,5g,2X,4d,5Z],[6,26,54,3N,2X,5q,5Y],[6,30,58,1Z,2H,3q,5X]];1a m=(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0);1a n=(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0);1a o=(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1);1a p={};1a q=1c(a){1a b=0;1q(a!=0){b+=1;a>>>=1}1b b};p.4R=1c(a){1a d=a<<10;1q(q(d)-q(m)>=0){d^=(m<<(q(d)-q(m)))}1b((a<<10)|d)^o};p.4P=1c(a){1a d=a<<12;1q(q(d)-q(n)>=0){d^=(n<<(q(d)-q(n)))}1b(a<<12)|d};p.4M=1c(a){1b l[a-1]};p.4T=1c(a){2L(a){1j S.4D:1b 1c(i,j){1b(i+j)%2==0};1j S.4E:1b 1c(i,j){1b i%2==0};1j S.4F:1b 1c(i,j){1b j%3==0};1j S.4G:1b 1c(i,j){1b(i+j)%3==0};1j S.4H:1b 1c(i,j){1b(1r.1F(i/2)+1r.1F(j/3))%2==0};1j S.4I:1b 1c(i,j){1b(i*j)%2+(i*j)%3==0};1j S.4J:1b 1c(i,j){1b((i*j)%2+(i*j)%3)%2==0};1j S.4K:1b 1c(i,j){1b((i*j)%3+(i+j)%2)%2==0};2B:1n 1h 1m('5H 5U:'+a);}};p.5a=1c(b){1a a=2l([1],0);1e(1a i=0;i<b;i+=1){a=a.5J(2l([1,U.3p(i)],0))}1b a};p.1I=1c(a,b){1d(1<=b&&b<10){2L(a){1j Q.3z:1b 10;1j Q.3A:1b 9;1j Q.2P:1b 8;1j Q.3B:1b 8;2B:1n 1h 1m('1X:'+a);}}1f 1d(b<27){2L(a){1j Q.3z:1b 12;1j Q.3A:1b 11;1j Q.2P:1b 16;1j Q.3B:1b 10;2B:1n 1h 1m('1X:'+a);}}1f 1d(b<41){2L(a){1j Q.3z:1b 14;1j Q.3A:1b 13;1j Q.2P:1b 16;1j Q.3B:1b 12;2B:1n 1h 1m('1X:'+a);}}1f{1n 1h 1m('6T:'+b);}};p.4L=1c(a){1a b=a.2h();1a d=0;1e(1a e=0;e<b;e+=1){1e(1a f=0;f<b;f+=1){1a g=0;1a h=a.1i(e,f);1e(1a r=-1;r<=1;r+=1){1d(e+r<0||b<=e+r){1J}1e(1a c=-1;c<=1;c+=1){1d(f+c<0||b<=f+c){1J}1d(r==0&&c==0){1J}1d(h==a.1i(e+r,f+c)){g+=1}}}1d(g>5){d+=(3+g-5)}}};1e(1a e=0;e<b-1;e+=1){1e(1a f=0;f<b-1;f+=1){1a i=0;1d(a.1i(e,f))i+=1;1d(a.1i(e+1,f))i+=1;1d(a.1i(e,f+1))i+=1;1d(a.1i(e+1,f+1))i+=1;1d(i==0||i==4){d+=3}}}1e(1a e=0;e<b;e+=1){1e(1a f=0;f<b-6;f+=1){1d(a.1i(e,f)&&!a.1i(e,f+1)&&a.1i(e,f+2)&&a.1i(e,f+3)&&a.1i(e,f+4)&&!a.1i(e,f+5)&&a.1i(e,f+6)){d+=40}}}1e(1a f=0;f<b;f+=1){1e(1a e=0;e<b-6;e+=1){1d(a.1i(e,f)&&!a.1i(e+1,f)&&a.1i(e+2,f)&&a.1i(e+3,f)&&a.1i(e+4,f)&&!a.1i(e+5,f)&&a.1i(e+6,f)){d+=40}}}1a j=0;1e(1a f=0;f<b;f+=1){1e(1a e=0;e<b;e+=1){1d(a.1i(e,f)){j+=1}}}1a k=1r.5T(5R*j/b/b-50)/5;d+=k*10;1b d};1b p}();1a U=1c(){1a a=1h 1l(2V);1a b=1h 1l(2V);1e(1a i=0;i<8;i+=1){a[i]=1<<i}1e(1a i=8;i<2V;i+=1){a[i]=a[i-4]^a[i-5]^a[i-6]^a[i-8]}1e(1a i=0;i<2g;i+=1){b[a[i]]=i}1a c={};c.2c=1c(n){1d(n<1){1n 1h 1m('2c('+n+')');}1b b[n]};c.3p=1c(n){1q(n<0){n+=2g}1q(n>=2V){n-=2g}1b a[n]};1b c}();1c 2l(c,d){1d(2w c.1g=='2x'){1n 1h 1m(c.1g+'/'+d);}1a f=1c(){1a a=0;1q(a<c.1g&&c[a]==0){a+=1}1a b=1h 1l(c.1g-a+d);1e(1a i=0;i<c.1g-a;i+=1){b[i]=c[i+a]}1b b}();1a g={};g.1G=1c(a){1b f[a]};g.1s=1c(){1b f.1g};g.5J=1c(e){1a a=1h 1l(g.1s()+e.1s()-1);1e(1a i=0;i<g.1s();i+=1){1e(1a j=0;j<e.1s();j+=1){a[i+j]^=U.3p(U.2c(g.1G(i))+U.2c(e.1G(j)))}}1b 2l(a,0)};g.3I=1c(e){1d(g.1s()-e.1s()<0){1b g}1a a=U.2c(g.1G(0))-U.2c(e.1G(0));1a b=1h 1l(g.1s());1e(1a i=0;i<g.1s();i+=1){b[i]=g.1G(i)}1e(1a i=0;i<e.1s();i+=1){b[i]^=U.3p(U.2c(e.1G(i))+a)}1b 2l(b,0).3I(e)};1b g};1a V=1c(){1a k=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,5R,3f],[2,50,32],[2,50,24],[4,25,9],[1,5n,3t],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,1Z,68],[4,43,27],[4,43,19],[4,43,15],[2,3j,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,2K,6h],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,1N,1K],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,1Z,68,2,5O,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,6q,5I],[1,3f,50,4,5I,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,1K,6u,2,2v,6w],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,5e,3d],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,1V,2a,1,1N,1K],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,6G,5O,1,2X,6H],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,1O,3j,1,3r,6J],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,5h,3d,5,4d,3t],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,5t,6M,1,3n,2K],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,6O,6P,4,3q,2H],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,5h,3d,5,4d,3t],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,6Q,1K,4,1V,2v],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,6R,6S,7,5S,5p],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,3n,2K,5,2m,1O],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,3l,2v,4,3k,2r],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,5w,3S,4,5e,3d],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,3q,2H,2,6X,2a],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,2m,1O,4,3P,3r],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,3l,2v,10,3k,2r],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,1N,1K,7,3l,2v],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,1V,2a,10,1N,1K],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,1V,2a,3,1N,1K],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,1V,2a],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,1V,2a,1,1N,1K],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,1V,2a,6,1N,1K],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,3n,2K,7,2m,1O],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,3n,2K,14,2m,1O],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,2m,1O,4,3P,3r],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,2m,1O,18,3P,3r],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,3l,2v,4,3k,2r],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,3k,2r,6,79,7a],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];1a l=1c(a,b){1a c={};c.3J=a;c.3K=b;1b c};1a m={};1a n=1c(a,b){2L(b){1j R.L:1b k[(a-1)*4+0];1j R.M:1b k[(a-1)*4+1];1j R.Q:1b k[(a-1)*4+2];1j R.H:1b k[(a-1)*4+3];2B:1b 2x}};m.5l=1c(a,b){1a c=n(a,b);1d(2w c=='2x'){1n 1h 1m('5H 7b 7c @ 7d:'+a+'/7e:'+b);}1a d=c.1g/3;1a e=1h 1l();1e(1a i=0;i<d;i+=1){1a f=c[i*3+0];1a g=c[i*3+1];1a h=c[i*3+2];1e(1a j=0;j<f;j+=1){e.1D(l(g,h))}}1b e};1b m}();1a W=1c(){1a c=1h 1l();1a d=0;1a e={};e.57=1c(){1b c};e.1G=1c(a){1a b=1r.1F(a/8);1b((c[b]>>>(7-a%8))&1)==1};e.1W=1c(a,b){1e(1a i=0;i<b;i+=1){e.3F(((a>>>(b-i-1))&1)==1)}};e.1I=1c(){1b d};e.3F=1c(a){1a b=1r.1F(d/8);1d(c.1g<=b){c.1D(0)}1d(a){c[b]|=(5A>>>(d%8))}d+=1};1b e};1a X=1c(b){1a c=Q.2P;1a d=b;1a e=P.5Q(b);1a f={};f.3G=1c(){1b c};f.1s=1c(a){1b e.1g};f.1H=1c(a){1e(1a i=0;i<e.1g;i+=1){a.1W(e[i],8)}};1b f};1a Y=1c(){1a d=1h 1l();1a e={};e.1k=1c(b){d.1D(b&1C)};e.1Y=1c(i){e.1k(i);e.1k(i>>>8)};e.3X=1c(b,a,c){a=a||0;c=c||b.1g;1e(1a i=0;i<c;i+=1){e.1k(b[i+a])}};e.3x=1c(s){1e(1a i=0;i<s.1g;i+=1){e.1k(s.2J(i))}};e.3Y=1c(){1b d};e.3E=1c(){1a s='';s+='[';1e(1a i=0;i<d.1g;i+=1){1d(i>0){s+=','}s+=d[i]}s+=']';1b s};1b e};1a Z=1c(){1a c=0;1a d=0;1a e=0;1a f='';1a g={};1a h=1c(b){f+=2k.2i(j(b&7n))};1a j=1c(n){1d(n<0){}1f 1d(n<26){1b 4f+n}1f 1d(n<52){1b 4i+(n-26)}1f 1d(n<62){1b 4j+(n-52)}1f 1d(n==62){1b 5f}1f 1d(n==63){1b 5b}1n 1h 1m('n:'+n);};g.1k=1c(n){c=(c<<8)|(n&1C);d+=8;e+=1;1q(d>=6){h(c>>>(d-6));d-=6}};g.3C=1c(){1d(d>0){h(c<<(6-d));c=0;d=0}1d(e%3!=0){1a a=3-e%3;1e(1a i=0;i<a;i+=1){f+='='}}};g.3E=1c(){1b f};1b g};1a 4v=1c(a){1a b=a;1a d=0;1a e=0;1a f=0;1a g={};g.3V=1c(){1q(f<8){1d(d>=b.1g){1d(f==0){1b-1}1n 1h 1m('7v 7w 7x 7y./'+f);}1a c=b.4t(d);d+=1;1d(c=='='){f=0;1b-1}1f 1d(c.7z(/^\\s$/)){1J}e=(e<<6)|h(c.2J(0));f+=6}1a n=(e>>>(f-8))&1C;f-=8;1b n};1a h=1c(c){1d(4f<=c&&c<=7A){1b c-4f}1f 1d(4i<=c&&c<=7B){1b c-4i+26}1f 1d(4j<=c&&c<=7C){1b c-4j+52}1f 1d(c==5f){1b 62}1f 1d(c==5b){1b 63}1f{1n 1h 1m('c:'+c);}};1b g};1a 4V=1c(k,l){1a m=k;1a n=l;1a o=1h 1l(k*l);1a p={};p.4A=1c(x,y,a){o[y*m+x]=a};p.1H=1c(a){a.3x('7F');a.1Y(m);a.1Y(n);a.1k(5A);a.1k(0);a.1k(0);a.1k(3m);a.1k(3m);a.1k(3m);a.1k(1C);a.1k(1C);a.1k(1C);a.3x(',');a.1Y(0);a.1Y(0);a.1Y(m);a.1Y(n);a.1k(0);1a b=2;1a c=r(b);a.1k(b);1a d=0;1q(c.1g-d>2g){a.1k(2g);a.3X(c,d,2g);d+=2g}a.1k(c.1g-d);a.3X(c,d,c.1g-d);a.1k(3m);a.3x(';')};1a q=1c(c){1a d=c;1a e=0;1a f=0;1a g={};g.1H=1c(a,b){1d((a>>>b)!=0){1n 1h 1m('1g 7H');}1q(e+b>=8){d.1k(1C&((a<<e)|f));b-=(8-e);a>>>=(8-e);f=0;e=0}f=(a<<e)|f;e=e+b};g.3C=1c(){1d(e>0){d.1k(f)}};1b g};1a r=1c(a){1a b=1<<a;1a d=(1<<a)+1;1a e=a+1;1a f=t();1e(1a i=0;i<b;i+=1){f.2O(2k.2i(i))}f.2O(2k.2i(b));f.2O(2k.2i(d));1a g=Y();1a h=q(g);h.1H(b,e);1a j=0;1a s=2k.2i(o[j]);j+=1;1q(j<o.1g){1a c=2k.2i(o[j]);j+=1;1d(f.4q(s+c)){s=s+c}1f{h.1H(f.4s(s),e);1d(f.1o()<7L){1d(f.1o()==(1<<e)){e+=1}f.2O(s+c)}s=c}}h.1H(f.4s(s),e);h.1H(d,e);h.3C();1b g.3Y()};1a t=1c(){1a b={};1a c=0;1a d={};d.2O=1c(a){1d(d.4q(a)){1n 1h 1m('7M 7N:'+a);}b[a]=c;c+=1};d.1o=1c(){1b c};d.4s=1c(a){1b b[a]};d.4q=1c(a){1b 2w b[a]!='2x'};1b d};1b p};1a 5N=1c(a,c,d,e){1a f=4V(a,c);1e(1a y=0;y<c;y+=1){1e(1a x=0;x<a;x+=1){f.4A(x,y,d(x,y))}}1a b=Y();f.1H(b);1a g=Z();1a h=b.3Y();1e(1a i=0;i<h.1g;i+=1){g.1k(h[i])}g.3C();1a j='';j+='<2U';j+='\\7O=\"';j+='4c:2j/7P;7Q,';j+=g;j+='\"';j+='\\7R=\"';j+=a;j+='\"';j+='\\7S=\"';j+=c;j+='\"';1d(e){j+='\\7T=\"';j+=e;j+='\"'}j+='/>';1b j};1b P}()}(7U));",62,491,"||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||var|return|function|if|for|else|length|new|isDark|case|writeByte|Array|Error|throw|size|lineTo|while|Math|getLength|moduleSize|null|pad|moduleCount|row|css|this|background|col|0xff|push|st|floor|get|write|getLengthInBits|continue|116|width|sl|146|122|fill|arcTo|px|sh|border|canvas|145|put|mode|writeShort|86|||||||||||115|sw|glog||radius|addBlank|255|getModuleCount|fromCharCode|image|String|qrPolynomial|152|true|collapse|0px|div|118|height|false|text|117|typeof|undefined|moveTo|sb|mSize|default|getContext|west|south|east|north|114|font|charCodeAt|121|switch|top|left|add|MODE_8BIT_BYTE|colR|sr|padding|margin|img|256|color|110|break|table|||||||||||ecLevel|minVersion|maxVersion|107|tr|80|102|quiet|createQRCode|98|148|147|0x00|151|fn|gexp|142|123|style|108|rowT|rowB|label|writeString|colL|MODE_NUMBER|MODE_ALPHA_NUM|MODE_KANJI|flush|math_floor|toString|putBit|getMode|max|mod|totalCount|dataCount|fillStyle|ctx|82|90|153|render|td|106|appendTo|offset|read|settings_bgColor|writeBytes|toByteArray|attr|||||||||||createCanvas|context|data|136|drawOnCanvas|0x41|quietModuleCount|canvasAvailable|0x61|0x30|globalCompositeOperation|mPosX|mPosY|bottom|right|drawImage|contains|mt|indexOf|charAt|drawModuleRoundedDark|bf|128|qrcode|fontcolor|drawBackground|setPixel|01|createHTML|PATTERN000|PATTERN001|PATTERN010|PATTERN011|PATTERN100|PATTERN101|PATTERN110|PATTERN111|getLostPoint|getPatternPosition|createImage|arcToAvailable|getBCHTypeNumber|defaults|getBCHTypeInfo|drawBackgroundLabel|getMaskFunction|createElement|bg|000|no|document|center||||||||getBuffer|||getErrorCorrectPolynomial|0x2f|bd|northwest|133|0x2b|84|135|drawModuleRoundendLight|containerCSS|126|getRSBlocks|position|134|northeast|112|138|drawModuleRounded|southeast|150|be|make|132|darkCSS|addData|is|0x80|southwest|drawModuleDefault|drawModules|none|mb|tbody|bad|81|multiply|drawBackgroundImage|fontname|mr|bh|87|createTable|stringToBytes|100|140|abs|maskPattern|level|version|170|166|162|||||||||||158|154|130|104|94|Object|prototype|97|call|number|fillText|createStringToBytes|window|opera|createImgTag|ffffff|101|000000|createTableTag|overflow|92|code|93|object|Opera|min|try|catch|use|err|bold|measureText|109|88|0x11|99|0xEC|append|120|toLowerCase|141|113|144|139|111|type|nodeName|each|extend|143|jdQrcode|sans||||||||200||149|119|rs|block|typeNumber|errorCorrectLevel|backgroundColor|absolute|strict|relative|createDiv|png|toDataURL|src|0x3f|restore|clip|out|destination|stroke|lineWidth|rgba|unexpected|end|of|file|match|0x5a|0x7a|0x39|strokeStyle|beginPath|GIF87a|rect|over|fillRect|naturalHeight|naturalWidth|0xfff|dup|key|u0020src|gif|base64|u0020width|u0020height|u0020alt|jQuery".split("|"),0,{}));
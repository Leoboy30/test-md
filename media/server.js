const _0x1445ad=_0x1f36;(function(_0xc91ae3,_0x200cd3){const _0x4659fd=_0x1f36,_0x3fbafe=_0xc91ae3();while(!![]){try{const _0x321a64=parseInt(_0x4659fd(0x6a))/0x1*(-parseInt(_0x4659fd(0x8a))/0x2)+parseInt(_0x4659fd(0x8d))/0x3*(-parseInt(_0x4659fd(0x84))/0x4)+parseInt(_0x4659fd(0x86))/0x5*(-parseInt(_0x4659fd(0x8c))/0x6)+-parseInt(_0x4659fd(0x7f))/0x7+parseInt(_0x4659fd(0x8f))/0x8+-parseInt(_0x4659fd(0x85))/0x9+parseInt(_0x4659fd(0x78))/0xa*(parseInt(_0x4659fd(0x7b))/0xb);if(_0x321a64===_0x200cd3)break;else _0x3fbafe['push'](_0x3fbafe['shift']());}catch(_0x27a098){_0x3fbafe['push'](_0x3fbafe['shift']());}}}(_0x2559,0xd11d9));const chalk=require(_0x1445ad(0x6c));let fs=require('fs');const {writeFile}=require(_0x1445ad(0x81)),fetch=require(_0x1445ad(0x6b)),server=require('../server'),{MakeSession}=require(_0x1445ad(0x80)),SESSION_ID='ZlBrZWJNRWM=';async function Singmulti(){const _0x46de27=_0x1445ad;if(!fs[_0x46de27(0x7e)](_0x46de27(0x8b))){if(!fs['existsSync'](_0x46de27(0x8b)))!SESSION_ID===![]&&(console['log'](_0x46de27(0x68)),await MakeSession(SESSION_ID,_0x46de27(0x8b)));setTimeout(()=>{},0xbb8);}else dbsearch();}async function dbsearch(){const _0x2b1707=_0x1445ad;if(!fs[_0x2b1707(0x7e)](_0x2b1707(0x77)))try{await fetch(_0x2b1707(0x7d))[_0x2b1707(0x6d)](_0xea8844=>_0xea8844[_0x2b1707(0x83)]())['then'](_0x531eab=>{const _0x5148c2=_0x2b1707;writeFile(_0x5148c2(0x77),JSON['stringify'](_0x531eab));}),console[_0x2b1707(0x73)](_0x2b1707(0x79)),setTimeout(()=>{checkolduser();},0x3e8);}catch(_0x32c213){return _0x32c213[_0x2b1707(0x87)]()[_0x2b1707(0x67)](_0x2b1707(0x70))?console[_0x2b1707(0x73)](chalk[_0x2b1707(0x75)]('Bro\x20You\x20Are\x20Offline')):console[_0x2b1707(0x73)](_0x32c213);}else checkolduser();}async function checkolduser(){const _0x322531=_0x1445ad;if(!fs['existsSync']('./database/settings.json')){if(!fs[_0x322531(0x7e)](_0x322531(0x8b)))return Singmulti();!fs[_0x322531(0x7e)]('./database/temp.json')&&dbsearch();if(fs['existsSync']('./database/temp.json')){let _0x3b54d4=require(_0x322531(0x7a)),_0x2ecac4=await _0x3b54d4[_0x322531(0x6e)]['me']['id'][_0x322531(0x76)](':')[0x0],_0x318394=await _0x3b54d4['creds']['me']['id'][_0x322531(0x76)]('@')[0x1],_0x4c2cac=_0x2ecac4+'@'+_0x318394,_0x379fc0=JSON[_0x322531(0x6f)](fs[_0x322531(0x66)](_0x322531(0x77))),_0x39376f=require(_0x322531(0x69)),_0x74e030=_0x39376f[_0x322531(0x87)]()[_0x322531(0x67)](_0x4c2cac);_0x74e030&&(console[_0x322531(0x73)]('⭕\x20User\x20Fount'),existconf(_0x4c2cac)),!_0x74e030&&(console['log'](_0x322531(0x71)),newconf());}}else server();}function _0x1f36(_0x42733c,_0x4cf8d2){const _0x255949=_0x2559();return _0x1f36=function(_0x1f3614,_0x3b31b6){_0x1f3614=_0x1f3614-0x66;let _0x2469dc=_0x255949[_0x1f3614];return _0x2469dc;},_0x1f36(_0x42733c,_0x4cf8d2);}async function newconf(){const _0x55a32f=_0x1445ad;try{let _0x37570b=require(_0x55a32f(0x7a)),_0x12225e=await _0x37570b[_0x55a32f(0x6e)]['me']['id'][_0x55a32f(0x76)](':')[0x0];await fetch(_0x55a32f(0x90))[_0x55a32f(0x6d)](_0x15df22=>_0x15df22[_0x55a32f(0x83)]())[_0x55a32f(0x6d)](_0x2a2f76=>{const _0x4f86d4=_0x55a32f;_0x2a2f76['config'][_0x4f86d4(0x72)]=_0x12225e,writeFile('./database/settings.json',JSON[_0x4f86d4(0x6f)](_0x2a2f76,null,0x2));}),console[_0x55a32f(0x73)](_0x55a32f(0x82)),server();}catch(_0x392f2e){return _0x392f2e[_0x55a32f(0x87)]()['includes']('ENOTFOUND')?console[_0x55a32f(0x73)](chalk[_0x55a32f(0x75)](_0x55a32f(0x88))):console[_0x55a32f(0x73)](_0x392f2e);}}async function existconf(_0x2be5ee){const _0xe8b70=_0x1445ad;let _0x45701=require(_0xe8b70(0x69));try{for(let _0x213288 of _0x45701){if(_0x213288[_0xe8b70(0x67)](_0x2be5ee)){let _0x394173=await _0x213288['toString']()[_0xe8b70(0x76)](':')[0x1],_0x531ddd=_0xe8b70(0x8e)+_0x394173+_0xe8b70(0x74);await fetch(_0x531ddd)[_0xe8b70(0x6d)](_0x4e042b=>_0x4e042b['json']())[_0xe8b70(0x6d)](_0x2f0d1e=>{const _0x2a9e34=_0xe8b70;writeFile(_0x2a9e34(0x89),JSON[_0x2a9e34(0x6f)](_0x2f0d1e,null,0x2));}),console[_0xe8b70(0x73)](_0xe8b70(0x7c)),server();}}}catch(_0x5e3a8c){return _0x5e3a8c['toString']()[_0xe8b70(0x67)](_0xe8b70(0x70))?console[_0xe8b70(0x73)](chalk[_0xe8b70(0x75)](_0xe8b70(0x88))):console[_0xe8b70(0x73)](_0x5e3a8c);}}function _0x2559(){const _0x15ebe3=['./session.json','12wSwckw','3744VQmrgm','https://gist.github.com/Alien-Alfa/','6639776PsawTZ','https://gist.github.com/Alien-Alfa/0feba1fa2cc26c182a6e56a59ecd84f9/raw','readFileSync','includes','Generating\x20Session','../database/temp.json','653465RuKcbK','node-fetch','chalk','then','creds','stringify','ENOTFOUND','⭕\x20User\x20Not\x20Fount','SUDO','log','/raw','redBright','split','./database/temp.json','11540fJWOYQ','Server\x20Start!','../session.json','25839XzXqIR','Previous\x20Database\x20Generated!','https://gist.github.com/Alien-Alfa/47e35761830a7b1e43087aa7f3ceeaa1/raw','existsSync','5491843HxvAuR','../lib/session','fs/promises','New\x20Database\x20Created!','json','692NaXPVh','6632325RMVaMC','733345uHBzfP','toString','Bro\x20You\x20Are\x20Offline','./database/settings.json','2cOUpGh'];_0x2559=function(){return _0x15ebe3;};return _0x2559();}Singmulti();
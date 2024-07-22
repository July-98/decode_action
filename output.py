#2024-07-22 15:00:38
import requests
import time
import os
code="BNUDOG提现"
ver="1.0"
envname="yuanshen_bnudog"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie)->None:
  cookies=cookie.split("#")
  self.headers={"Host":"qq.ylilp.cn","Connection":"keep-alive","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36","unionid":cookies[0],"token":cookies[1],"Content-Type":"application/json","Accept":"*/*","Origin":"http://qqs.rskjg.cn","X-Requested-With":"mark.via","Referer":"http://qqs.rskjg.cn/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  self.unionid=cookies[0]
 def withdraw(self):
  url="http://qq.ylilp.cn/trade/pushcash"
  data={'unionid':self.unionid,'money':0.2}
  r=requests.post(url,headers=self.headers,json=data).json()
  if r['data']==1:
   print("提现成功")
  else:
   print(f"提现失败:[{r}]")
 def main(self):
  self.withdraw()
if __name__=='__main__':
 env()

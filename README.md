Fighting!

-------------------------------------------------------------------------------------------
환경)

jdk - jdk-8u144-windows-x64

git - Git-2.14.1-64-bit

tomcat - apache-tomcat-8.5.20-windows-x64

mvn - apache-maven-3.5.0-bin

mongo - mongodb-win32-x86_64-2008plus-ssl-3.4.9-signed

node - node-v6.11.3-x64

-------------------------------------------------------------------------------------------
세팅)

받아서 maven project로 import

angular-cli 이걸로 깔고 'npm i -g @angular/cli'

root 에서 'mvn package install'

만약 web에서 오류가 난다면 web root에서 'npm install'

-------------------------------------------------------------------------------------------
실행)

몽고부터 먼저 올리고 'mongod --dbpath <db경로>' 로 키면 댐

실행은 spring은 batch밑의 각각 폴더 안에서 'mvn spring-boot:run'

웹은 angular 폴더 안에서 'npm run dev'

웹이랑 db올리는거 root 폴더하고 웹폴더 밑에 run.bat 있어서 

eclipse 사용한다면 external tools로 등록해서 사용하면 편함

--------------------------------------------------------------------------------------------
추가)

mongo client로는 https://mongobooster.com/ 추천

웹개발할때 eclipse 쓴다면 밑에 2개 플러그인 추천

https://github.com/angelozerr/angularjs-eclipse/releases

https://github.com/angelozerr/typescript.java/releases

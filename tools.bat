ECHO OFF
CLS
:MENU
ECHO.
ECHO ...............................................
ECHO PRESS 1, 2 OR 3 to select your task, or 4 to EXIT.
ECHO ...............................................
ECHO.
ECHO 1 - Reset ADB
ECHO 2 - List Devices
ECHO 3 - Connect Bluestacks
ECHO 4 - Clean Gradle
ECHO 5 - Send Menu to Android
ECHO 6 - Create Release Build
ECHO 7 - EXIT
ECHO.
SET /P M=Select Menu then press ENTER:
IF %M%==1 GOTO RESETADB
IF %M%==2 GOTO LISTDEVICES
IF %M%==3 GOTO CONNECTBLUESTACKS
IF %M%==4 GOTO CLEANGRADLE
IF %M%==5 GOTO SENDMENU
IF %M%==6 GOTO CREATERELEASEBUILD
IF %M%==7 GOTO EOF
:RESETADB
cls
adb kill-server
adb start-server
GOTO MENU
:LISTDEVICES
cls
adb devices
GOTO MENU
:CONNECTBLUESTACKS
cls
adb connect localhost:555
GOTO LISTDEVICES
:CLEANGRADLE
cls
cd .\android\
./gradlew clean
GOTO MENU
:SENDMENU
cls
adb shell input keyevent 82
GOTO MENU
:CREATERELEASEBUILD
cls
cd .\android\
./gradlew assembleRelease
GOTO MENU
:EOF
cls

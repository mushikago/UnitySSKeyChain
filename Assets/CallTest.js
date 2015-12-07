#pragma strict
import System.Runtime.InteropServices;
var _str:String = "shiraishi";
var _text:String = "data";
var LabelStyle:GUIStyle;
var TextFieldStyle:GUIStyle;

function Start () {
	readKayChain();
}

function readKayChain(){
	_str = NativePlugin.hoge();
}

function setKeyChain(){
	Debug.Log("set KeyChain");
	NativePlugin.hogehoge(_text);
}

function OnGUI () {
	GUI.Label(Rect(0, Screen.height / 2, Screen.width, 100), "keychain = " + _str, LabelStyle);
	_text = GUI.TextField(Rect(Screen.width * 1/6,100,Screen.width * 2/3, 60),  _text, TextFieldStyle);
	
	if(GUI.Button(Rect(Screen.width * 1/6,10,Screen.width * 2/3 , 60), "set KeyChain")){
		setKeyChain();
	}
	if(GUI.Button(Rect(Screen.width * 1/6,200,Screen.width * 2/3 , 60), "read KeyChain")){
		readKayChain();
	}
}
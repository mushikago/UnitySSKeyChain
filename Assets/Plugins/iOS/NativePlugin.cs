using UnityEngine;
using System.Runtime.InteropServices;

public class NativePlugin
{
	
	[DllImport("__Internal")]
	private static extern string hoge_ ();
	
	[DllImport ("__Internal")]
	private static extern void hogehoge_ (string info);
	
	public static string hoge ()
	{
		return hoge_ ();
	}
	
	public static void hogehoge (string info)
	{
		// Call plugin only when running on real device
		//if (Application.platform != RuntimePlatform.OSXEditor)
		hogehoge_ (info);
	}
}

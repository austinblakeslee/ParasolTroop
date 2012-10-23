using UnityEngine;
using System.Collections;


public class HexGrid : MonoBehaviour
{
    public int Width = 15;
    public int Height = 10;
 
    public float HexSideLength = 1.0f;
    public GameObject HexTilePrefab = null;
 
    public void GenerateGrid()
    {
        float inradius = (float)(0.5 * Mathf.Sqrt(3) * HexSideLength);
		float spaceBetweenTilesHorizontal = 2.0f * inradius;
		float spaceBetweenTilesVertical = 1.5f * HexSideLength;
	 
		if (HexTilePrefab != null)
	        {
	            for (int x = 0; x < Width; x++)
	            {
	                for (int y = 0; y < Height; y++)
	                {
	                    GameObject tile = (GameObject)Instantiate(HexTilePrefab, Vector3.zero, Quaternion.identity);
	                    tile.transform.parent = gameObject.transform;
						tile.transform.eulerAngles = new Vector3(0,90,0);
	                    tile.transform.localPosition = new Vector3(x * spaceBetweenTilesHorizontal + (y & 1) * inradius, 0, y * spaceBetweenTilesVertical);					
					}
		    	}
	        }
	 
        // Center the Grid
        gameObject.transform.Translate(new Vector3(-spaceBetweenTilesHorizontal * Width / 2.0f + inradius, 0, -spaceBetweenTilesVertical * Height / 2.0f - HexSideLength));
    }

	// Use this for initialization
	void Start () {
		GenerateGrid();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

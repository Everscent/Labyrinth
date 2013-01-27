var speed : float = 2;

var searchTag = "Collide";
var scanFrequency : float = 1.0;
var collideDistance : float = 0;
var minDistance : float = 3;
var NORTH : Vector3 = Vector3(0, 0, 1);
var SOUTH : Vector3 = Vector3(0, 0, -1);
var EAST : Vector3 = Vector3(1, 0, 0);
var WEST : Vector3 = Vector3(-1, 0, 0);
var direction : Vector3;
var collide : Transform;

function Start() {
	direction = new Vector3( 0, 0, 0 );
	InvokeRepeating("scanForTarget", 0, scanFrequency);
	InvokeRepeating("turnIfClose", 0, scanFrequency);
}

function Update () {
	transform.Translate(speed * Vector3.forward * Time.deltaTime);
	
	
	
	
	//if (distance < 1) {
		//Application.LoadLevel(0);
	//} // end if
}

function turnIfClose() {
	if (collideDistance < minDistance) {
	var direction : Vector3 = new Vector3( 0, this.transform.position.y + 110, 0 );
		transform.Rotate(direction);
	}
}

function scanForTarget() {
	collide = getNearestTaggedObject();
	var closestPoint : Vector3 = collide.collider.ClosestPointOnBounds(transform.position);
	collideDistance = Vector3.Distance(closestPoint, transform.position);
}

function getNearestTaggedObject() : Transform {
	var nearestDistanceSqr = Mathf.Infinity;
	var taggedGameObjects = GameObject.FindGameObjectsWithTag(searchTag);
	var nearestObj : Transform = null;
	
	for (var obj : GameObject in taggedGameObjects) {
		var closestPoint : Vector3 = obj.collider.ClosestPointOnBounds(transform.position);
		var distanceSqr : float = Vector3.Distance(closestPoint, transform.position);
		
		if (distanceSqr < nearestDistanceSqr) {
			nearestObj = obj.transform;
			nearestDistanceSqr = distanceSqr;
		}
	}
	return nearestObj;
}

/*
function headWait() {
	while(!chase) {
		yield WaitForSeconds (.05);
		if (!rendererThis.isVisible && distance > minDistance + 15) {
			transform.position = Vector3(Random.Range(-100, 100), 5, Random.Range(-100, 100));
		} else if (!rendererThis.isVisible) {
			chase = true;
		}
	} // end while
}*/
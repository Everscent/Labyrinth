var player : Transform;
var speed : float = 1.5;
var chase : boolean = true;
var minDistance : float = 50;
var distance : float = 0;
var rendererThis : Renderer;

function Update () {
	distance = (transform.position - player.position).sqrMagnitude;
	if (chase) {
		transform.LookAt(player);
		transform.rotation = Quaternion.Slerp(
			transform.rotation,
			Quaternion.LookRotation(player.position - transform.position),
			10 * Time.deltaTime);
		transform.Translate(speed * Vector3.forward * Time.deltaTime);
	} // end if
	
	if (!rendererThis.isVisible) {
		chase = true;
	} else if (distance < minDistance && rendererThis.isVisible) {
		chase = false;
		headWait();
	} // end else if
	
	if (distance < 1) {
		Application.LoadLevel(0);
	} // end if
}

function headWait() {
	while(!chase) {
		yield WaitForSeconds (.05);
		if (!rendererThis.isVisible && distance > minDistance + 15) {
			transform.position = Vector3(Random.Range(-100, 100), 5, Random.Range(-100, 100));
		} else if (!rendererThis.isVisible) {
			chase = true;
		}
	} // end while
}
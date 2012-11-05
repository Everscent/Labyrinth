var head : Transform;
var beat : float = 5;
var distance : float = 0;

while(true) {
	transform.audio.Play();
	yield WaitForSeconds(beat);
	beat = 2 * (distance / 60);
	if (beat < 0.9) { beat = 0.9; }
}

function Update() {
	distance = (transform.position - head.position).magnitude;
}
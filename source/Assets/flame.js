var destination : Transform;

while (true) {
	yield WaitForSeconds (Random.Range(0, .001));
	transform.LookAt(destination);
	transform.particleEmitter.localVelocity.x = transform.particleEmitter.localVelocity.x + Vector3.forward.x;
	transform.particleEmitter.localVelocity.z = transform.particleEmitter.localVelocity.z + Vector3.forward.z;
	
	if (transform.particleEmitter.localVelocity.x > 0.5) { transform.particleEmitter.localVelocity.x = 0.5; }
	if (transform.particleEmitter.localVelocity.x < -0.5) { transform.particleEmitter.localVelocity.x = -0.5; }
	if (transform.particleEmitter.localVelocity.z > 0.5) { transform.particleEmitter.localVelocity.z = 0.5; }
	if (transform.particleEmitter.localVelocity.z < -0.5) { transform.particleEmitter.localVelocity.z = -0.5; }
}
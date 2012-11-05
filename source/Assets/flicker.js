var minFlickerSpeed : float = -0.095;
var maxFlickerSpeed : float = 0.095;
var minLightIntensity : float = 1;
var maxLightIntensity : float = 2.5;
 
while (true)
{
	if (light.intensity < minLightIntensity) {
		light.intensity = light.intensity + Random.Range(0, maxFlickerSpeed);
	} else if (light.intensity > maxLightIntensity) {
		light.intensity = light.intensity + Random.Range(minFlickerSpeed, 0);
	} else {
		light.intensity = light.intensity + Random.Range(minFlickerSpeed, maxFlickerSpeed);
	}
	
	yield WaitForSeconds (Random.Range(0, .001));
	
	if (camera.main.velocity.sqrMagnitude != 0 && light.intensity > 0.2) {
		light.intensity = light.intensity - 0.065;
	}
}
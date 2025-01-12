const fragmentShader = `
uniform float u_intensity;
uniform float u_time;
uniform vec2 u_mouse;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    // Create a swirling pattern for the colors
    float swirl = sin(vUv.x * 10.0 + u_time) * cos(vUv.y * 10.0 - u_time);
    
    // Generate gradient colors
    vec3 baseColor = mix(vec3(0.0), vec3(0.1, 0.1, 0.2), vDisplacement); // Black to dark grey
    vec3 blueTint = vec3(0.0, 0.2, 0.6); // Subtle blue tint
    vec3 highlight = vec3(0.8, 0.9, 1.0); // Bright highlight for specular

    // Blend the gradient colors
    vec3 gradientColor = mix(baseColor, blueTint, swirl * 0.5 + 0.5);
    gradientColor = mix(gradientColor, highlight, smoothstep(0.3, 0.8, swirl));

    // Add refraction-like effects
    float refraction = abs(sin(vUv.x * 10.0 + u_time)) * 0.1;
    vec3 refractedColor = gradientColor + refraction * vec3(0.1, 0.2, 0.3);

    // Simulate specular highlights
    float specular = pow(max(dot(normalize(vec3(0.0, 1.0, 1.0)), vec3(vUv, 1.0)), 0.0), 10.0);
    vec3 specularHighlight = vec3(1.0, 1.0, 1.0) * specular * u_intensity;

    // Combine everything for a glassy effect
    vec3 finalColor = refractedColor + specularHighlight;

    // Adjust transparency for a glassy look
    gl_FragColor = vec4(finalColor, 0.7); // Slight transparency
}
`;

export default fragmentShader;
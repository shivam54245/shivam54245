
import * as Three from "https://unpkg.com/three@0.160.0/build/three.min.js";

const scene = new Three.scene();
const camera = new Three.PerspectiveCamera(80, window.innerWidth / window.innerHeight);
const renderer = new Three.WebGLRenderer({antialiasing : true});

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);      // sad idk

const geometry = new Three.BoxGeometry(1, 2, 3);
const green_material = new Three.MeshBasicMaterial({color : rgba(65, 233, 101, 0.77), wireframe : true});
const cuboid = new Mesh(geometry, green_material);

scene.add(cuboid);








function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    }
    animate();

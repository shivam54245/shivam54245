
import * as Three from "https://unpkg.com/three@0.160.0/build/three.min.js";

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(80, window.innerWidth / window.innerHeight);
const renderer = new Three.WebGLRenderer({antialias : true});

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);      // sad idk

const geometry = new Three.BoxGeometry(1, 2, 3);
const green_material = new Three.MeshBasicMaterial({color : "rgb(97, 233, 126)", wireframe : true});
const cuboid = new Three.Mesh(geometry, green_material);

scene.add(cuboid);








function animate() {
    requestAnimationFrame(animate);

    cuboid.rotation.x += 0.01;
    cuboid.rotation.y += 0.01;

    renderer.render(scene, camera);
    }
    animate();

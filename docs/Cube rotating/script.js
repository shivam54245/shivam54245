
import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer({antialias : true});

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);      // sad idk

const geometry = new THREE.BoxGeometry(1, 1, 1);
const green_material = new THREE.MeshBasicMaterial({color : "rgb(97, 233, 126)", wireframe : true});
const cuboid = new THREE.Mesh(geometry, green_material);

scene.add(cuboid);







animate();

function animate() {
    requestAnimationFrame(animate);

    cuboid.rotation.x += 0.01;
    cuboid.rotation.y += 0.01;

    renderer.render(scene, camera);
    }

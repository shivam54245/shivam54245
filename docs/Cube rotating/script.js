
import * as Three from "https://unpkg.com/three@0.160.0/build/three.min.js";

const scene = new Three.scene();
const camera = new Three.PerspectiveCamera(80, innerWidth / innerHeight);
const renderer = new Three.WebGLRenderer({antialiasing : true});
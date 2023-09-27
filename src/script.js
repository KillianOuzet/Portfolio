import * as THREE from 'https://unpkg.com/three@0.156.1/build/three.module.js'


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const geometry = new THREE.BoxGeometry(1, 1, 1)

const texture = new THREE.TextureLoader().load('../public/diamond.jpg')
const material = new THREE.MeshPhongMaterial({ map:texture })

const mesh = new THREE.Mesh(geometry, material)

const light = new THREE.PointLight(0xeeeeee, 2)

scene.add(light)
scene.add(mesh)

camera.position.set(0, 0, 3)
light.position.set(0, 0, 3)

const renderer = new THREE.WebGLRenderer({ canvas })


loop()

function loop() {
  requestAnimationFrame(loop)
  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.01
  renderer.render(scene, camera)
}
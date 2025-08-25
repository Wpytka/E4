<script lang="ts">
    import MarchingCubes from "$lib/physics/MarchingCubes.svelte";
    import { Color } from "three";
    import { useGltf } from "@threlte/extras";
    import { MarchingCube } from "$lib/physics/MarchingCube";
    import { T, useTask } from "@threlte/core";
    import { base } from "$app/paths";
    import * as THREE from "three";

    let cityColor = ["#FF4D00", "#cfd1d0", "#ffd738"];

    type cityProps = {
        scale?: number[];
        position: number[];
        color: string;
    };

    type SceneProps = {
        ballCount?: number;
        isolation?: number;
        resolution?: number;
    };
    let {
        ballCount = 20,
        isolation = 10,
        resolution = 30,
    }: SceneProps = $props();
    const randomColor = (): Color => {
        return new Color().setRGB(Math.random(), Math.random(), Math.random());
    };

    let city: cityProps[] = $state([]);

    const createBalls = (count: number, scale = 0.5): MarchingCube[] => {
        const balls: MarchingCube[] = [];
        const m = (2 * Math.PI) / count;
        for (let i = 0; i < count; i += 1) {
            const ball = new MarchingCube(randomColor());
            const r = m * i;
            const x = Math.cos(r);
            const y = Math.sin(r);

            ball.position.set(x, 0, y).multiplyScalar(scale);
            balls.push(ball);
        }
        return balls;
    };

    const balls = $derived(createBalls(ballCount));
    let time = 0;

    useTask((delta) => {
        time += delta;
        let i = 0;
        for (const ball of balls) {
            ball.position.setY(0.5 * Math.sin(time + i) - 0.5);
            i += 1;
        }
    });

    const metaMat = new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        transmission: 1.0,
        thickness: 1.0,
        roughness: 0.0,
        metalness: 0.0,
        transparent: true, // debug
        // opacity: 0.8,
    });

    function generateCity(quantity: number) {
        for (let i = 0; i < quantity; i++) {
            let scale = [
                Math.abs(Math.random() * 0.2),
                Math.abs(Math.random() * 0.2),
                Math.abs(Math.random() * 0.2),
            ];
            let position = [
                Math.random() * 2 ,
                scale[1] / 2 ,
                Math.random() * 2 ,
            ];

            let cityP: cityProps = {
                color: cityColor[Math.floor(Math.random() * cityColor.length)],
                position: position,
                scale: scale,
            };
            city.push(cityP);
        }
    }
</script>

<T.PerspectiveCamera makeDefault position.z={3} position.y={0.4}>
</T.PerspectiveCamera>

<T.DirectionalLight position={[10, 10, 10]} castShadow />
<T.DirectionalLight position={[-10, 10, -10]} castShadow />

<MarchingCubes enableColors={true} {resolution} {isolation}>
    <T.Material is={metaMat}></T.Material>
    {#each balls as ball}
        <T is={ball} />
    {/each}
</MarchingCubes>

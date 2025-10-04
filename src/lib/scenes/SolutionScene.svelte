<script>
    import { base } from "$app/paths";
    import { T, useLoader, useTask } from "@threlte/core";
    import { useGltf, Edges, Environment, MeshRefractionMaterial } from "@threlte/extras";
    import * as THREE from "three";
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
    const gltfFactory = useGltf(`${base}/factory.glb`);
    const gltfCog = useGltf(`${base}/cog.glb`);
    const gltfLightining = useGltf(`${base}/lightning.glb`);

    const mat = new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        transmission: 1.0,
        thickness: 1.0,
        roughness: 0.0,
        metalness: 0.0,
        transparent: true, // debug
        // opacity: 0.8,
    });

      const env = useLoader(RGBELoader).load(
    `${base}/studio.hdr`
  )

    let rotation = $state(0);

    useTask((delta) => {
        rotation += delta / 2;
    });
</script>

<T.PerspectiveCamera makeDefault position.z={12}></T.PerspectiveCamera>

<T.DirectionalLight position={[10, 10, 10]} castShadow />
<T.DirectionalLight position={[-10, 10, -10]} castShadow />

<!-- {#if $gltfFactory}
    <T.Mesh
        geometry={$gltfFactory.nodes.Cylinder.geometry}
        scale={0.1}
        rotation.y={rotation}
        position.y={2.2}
        position.x={-1.4}
    >
        <T.Material is={mat}></T.Material>
        <Edges thresholdAngle={2} color="white" scale={1.01} />

    </T.Mesh>
{/if} -->

{#if $gltfCog}
    <T.Mesh
        geometry={$gltfCog.nodes.Cog.geometry}
        position.y={-1}
        position.x={1.4}
        rotation.y={rotation/8+8}
        rotation.z={-rotation}
        scale={0.04}
    >
    {#await env then e}
        <MeshRefractionMaterial
        envMap={e}
        fresnel={2}
        ior={3.0}
        aberrationStrength={0.2}
        bounces={1}
        color={'#e3abff'}
      />
    {/await}
    </T.Mesh>
{/if}

{#if $gltfLightining}
    <T.Mesh
        geometry={$gltfLightining.nodes.Lightning.geometry}
        position.y={2 + (Math.sin(rotation)/4)}
        position.x={-1}
        rotation.z={rotation}
        rotation.x={Math.PI/2} 
        scale={0.6}
    >
        <!-- <T.Material is={mat}></T.Material> -->
        <!-- <Edges thresholdAngle={2} color="white" scale={1.01} /> -->
    {#await env then e}
        <MeshRefractionMaterial
        envMap={e}
        fresnel={2}
        ior={2.75}
        aberrationStrength={0.2}
        bounces={1}
        color={'#ffc800'}
      />
    {/await}
    </T.Mesh>
{/if}

<Environment url={`${base}/studio.hdr`}></Environment>
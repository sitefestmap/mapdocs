```svelte
<script>
    import { Canvas } from '@threlte/core'
</script>
<div class="canvas-wrapper">
    <Canvas>
        <Scene />
    </Canvas>
</div>
<style>
    .canvas-wrapper {
        position: relative;
        /* border: 1px solid black; */
        height: 500px;
    }
</style>
```

Scene.svelte

```svelte
<script>
    import { T } from '@threlte/core'
  //  import { Canvas } from '@threlte/core'
  //  import { UseFrame } from '@threlte/core'
</script>

<!--
<Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>

</Canvas>
-->
<T.PerspectiveCamera
    position={[10, 10, 10]}
    on:create={({ ref }) => {
        ref.lookAt(0, 0, 0)
    }}
/>

<T.Mesh>
    <T.BoxGeometry args={[1, 1, 1]} />
    <T.MeshBasicMaterial color="red" />
</T.Mesh>  
```
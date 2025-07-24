
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/smartSight.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[0.056, 0.025, 0.111]} scale={[0.038, 0.025, 0.049]}>
        <group position={[-0.695, -0.76, -0.603]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={[6.748, 13.489, 8.829]}>
          <mesh geometry={nodes['Unten_pcbV1000-A013'].geometry} material={materials['Schwarz_plastik.001']} />
          <mesh geometry={nodes['Unten_pcbV1000-A013_1'].geometry} material={materials.Stahl} />
          <mesh geometry={nodes['Unten_pcbV1000-A013_2'].geometry} material={materials['Gold.Steel']} />
          <mesh geometry={nodes['Unten_pcbV1000-A013_3'].geometry} material={materials['Blau_plastik.USB']} />
        </group>
        <group position={[-0.433, -0.581, 0.888]} rotation={[-2.514, 0, 0]} scale={[24.326, 32.261, 26.201]}>
          <mesh geometry={nodes.Circle001.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Circle001_1.geometry} material={materials['LIGHT LED']} />
          <mesh geometry={nodes.Circle001_2.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Circle001_3.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.Circle001_4.geometry} material={materials['darkest black']} />
          <mesh geometry={nodes.Circle001_5.geometry} material={materials['Material.012']} />
        </group>
        <group position={[-0.017, -0.098, 0.002]} scale={[26.577, 40.607, 20.314]}>
          <mesh geometry={nodes.Cube012_1.geometry} material={materials['mudrock.001']} />
          <mesh geometry={nodes.Cube012_2.geometry} material={materials['darkest black']} />
        </group>
        <group position={[0.018, -0.497, 0.884]} scale={[25.979, 39.693, 19.857]}>
          <mesh geometry={nodes['Unten_pcbV1000-A011'].geometry} material={materials['Unten_pcbV1000-A']} />
          <mesh geometry={nodes['Unten_pcbV1000-A011_1'].geometry} material={materials['Schwarz_plastik.001']} />
          <mesh geometry={nodes['Unten_pcbV1000-A011_2'].geometry} material={materials.Steel_Gebürsted} />
          <mesh geometry={nodes['Unten_pcbV1000-A011_3'].geometry} material={materials.Stahl} />
          <mesh geometry={nodes['Unten_pcbV1000-A011_4'].geometry} material={materials['Gold.Steel']} />
          <mesh geometry={nodes['Unten_pcbV1000-A011_5'].geometry} material={materials['Blau_plastik.USB']} />
        </group>
        <group position={[0.468, -0.497, 0.884]} scale={[25.979, 39.693, 19.857]}>
          <mesh geometry={nodes['Unten_pcbV1000-A012'].geometry} material={materials['Unten_pcbV1000-A']} />
          <mesh geometry={nodes['Unten_pcbV1000-A012_1'].geometry} material={materials['Schwarz_plastik.001']} />
          <mesh geometry={nodes['Unten_pcbV1000-A012_2'].geometry} material={materials.Steel_Gebürsted} />
          <mesh geometry={nodes['Unten_pcbV1000-A012_3'].geometry} material={materials.Stahl} />
          <mesh geometry={nodes['Unten_pcbV1000-A012_4'].geometry} material={materials['Gold.Steel']} />
          <mesh geometry={nodes['Unten_pcbV1000-A012_5'].geometry} material={materials.Nikon} />
        </group>
        <mesh geometry={nodes.nut1002.geometry} material={materials['darkest black']} position={[0.827, 0.582, 0.921]} rotation={[0, 0, -0.574]} scale={[17.914, 21.327, 11.658]} />
        <mesh geometry={nodes.nut2002.geometry} material={materials['darkest black']} position={[-0.642, 0.582, 0.921]} rotation={[0, 0, -0.574]} scale={[17.914, 21.327, 11.658]} />
        <mesh geometry={nodes.Text002.geometry} material={materials['gloss black']} position={[-0.361, 0.729, 0.854]} rotation={[0, 1.571, 0]} scale={[0.226, 0.452, 0.296]} />
      </group>
      <group position={[0.03, 0.006, 0.091]} scale={[0.002, 0.001, 0.002]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Stahl} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Schwarz_plastik.001']} />
      </group>
      <group position={[0.03, 0.006, 0.1]} scale={[0.002, 0.001, 0.002]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.Stahl} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['Schwarz_plastik.001']} />
      </group>
      <mesh geometry={nodes.bool_cutout008.geometry} material={nodes.bool_cutout008.material} position={[0.039, 0.026, 0.156]} rotation={[-Math.PI, 0, 0]} scale={[0.006, 0.004, 0.002]} />
      <mesh geometry={nodes.bool_cutout009.geometry} material={nodes.bool_cutout009.material} position={[0.056, 0.026, 0.156]} scale={[0.007, 0.004, 0.002]} />
      <mesh geometry={nodes.bool_cutout010.geometry} material={nodes.bool_cutout010.material} position={[0.073, 0.026, 0.156]} scale={[0.007, 0.004, 0.002]} />
      <mesh geometry={nodes.bool_cylinder010.geometry} material={nodes.bool_cylinder010.material} position={[0.089, 0.034, 0.142]} rotation={[0, 0, -Math.PI / 2]} scale={[0.004, 0.001, 0.004]} />
      <mesh geometry={nodes.bool_cylinder011.geometry} material={nodes.bool_cylinder011.material} position={[0.089, 0.034, 0.081]} rotation={[0, 0, -Math.PI / 2]} scale={[0.004, 0.001, 0.004]} />
      <mesh geometry={nodes.bool_cylinder012.geometry} material={nodes.bool_cylinder012.material} position={[0.03, 0.034, 0.142]} rotation={[0, 0, -Math.PI / 2]} scale={[0.004, 0.001, 0.004]} />
      <mesh geometry={nodes.bool_cylinder013.geometry} material={nodes.bool_cylinder013.material} position={[0.03, 0.034, 0.081]} rotation={[0, 0, -Math.PI / 2]} scale={[0.004, 0.001, 0.004]} />
      <mesh geometry={nodes.bool_cutout011.geometry} material={nodes.bool_cutout011.material} position={[0.03, 0.026, 0.096]} rotation={[0, Math.PI / 2, 0]} scale={[0.007, 0.004, 0.002]} />
      <mesh geometry={nodes.bool_cylinder014.geometry} material={nodes.bool_cylinder014.material} position={[0.073, 0.033, 0.068]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.003, 0.001, 0.003]} />
      <mesh geometry={nodes.bool_cylinder015.geometry} material={nodes.bool_cylinder015.material} position={[0.045, 0.033, 0.068]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.003, 0.001, 0.003]} />
      <mesh geometry={nodes.Cube009.geometry} material={nodes.Cube009.material} position={[0.076, 0.026, 0.068]} scale={[0.003, 0.001, 0.002]} />
      <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} position={[0.076, 0.022, 0.068]} scale={[0.003, 0.001, 0.002]} />
      <mesh geometry={nodes.Cube012.geometry} material={nodes.Cube012.material} position={[0.076, 0.015, 0.068]} scale={[0.003, 0.001, 0.002]} />
      <mesh geometry={nodes.Cube013.geometry} material={nodes.Cube013.material} position={[0.076, 0.011, 0.068]} scale={[0.003, 0.001, 0.002]} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[0.028, 0.02, 0.092]} rotation={[0, Math.PI / 2, 0]} scale={[0.003, 0.001, 0.002]} />
      <mesh geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} position={[0.028, 0.014, 0.098]} rotation={[0, Math.PI / 2, 0]} scale={[0.003, 0, 0.002]} />
      <mesh geometry={nodes.bool_usb1.geometry} material={nodes.bool_usb1.material} position={[0.03, 0.006, 0.1]} scale={[0.001, 0.001, 0.002]} />
      <mesh geometry={nodes.bool_usb2.geometry} material={nodes.bool_usb2.material} position={[0.03, 0.006, 0.091]} scale={[0.001, 0.001, 0.002]} />
    </group>
  )
}

useGLTF.preload('/models/smartSight.glb')

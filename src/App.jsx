import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Suspense } from "react"
import Model from "./components/SmartSight"
import "./App.css"

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <Html fullscreen>
          <div className="container">
            <div className="header">
              <p className="subtitle">THE FUTURE OF ON-SITE AI SURVEILLANCE</p>
              <h1 className="main-title">
                MandlacX Edge <span className="italic">Processor</span>         
              </h1>
            </div>

            <div className="info-box top-left">
              <div className="box-header">
                <div className="accent-line"></div>
                <h3>MandlacX Edge Processor</h3>
              </div>
              <p>A multi-domain, first-generation AI-powered device designed for real-time threat detection.</p>
              <div className="connector-line top-left-line"></div>
              <div className="connector-dot top-left-dot"></div>
            </div>

            <div className="info-box top-right">
              <div className="box-header">
                <div className="accent-line"></div>
                <h3>Key Specifications</h3>
              </div>
              <ul>
                <li>USB 3.0 Support</li>
                <li>16 GB RAM</li>
                <li>A7 Cortex Processor</li>
                <li>Three multi-axis surveillance lenses</li>
              </ul>
              <div className="connector-line top-right-line"></div>
              <div className="connector-dot top-right-dot"></div>
            </div>

            <div className="info-box bottom-left">
              <div className="box-header">
              <div className="accent-line"></div>
                <h3>Real-Time Threat Detection</h3>
              </div>
              <p className="detects-label">Detects</p>
              <ul>
                <li>Intrusions</li>
                <li>Firearms & Sharp Objects</li>
                <li>Human Falls</li>
                <li>Unusual or Aggressive Motion</li>
              </ul>
              <div className="connector-line bottom-left-line"></div>
              <div className="connector-dot bottom-left-dot"></div>
            </div>

            <div className="info-box bottom-right">
              <div className="box-header">
                <div className="accent-line"></div>
                <h3>On-Device Intelligence</h3>
              </div>
              <p>
                Engineered to deliver intelligent surveillance without relying on the cloud. It gives you control,
                speed, and reliability right where you need it.
              </p>
              <div className="connector-line bottom-right-line"></div>
              <div className="connector-dot bottom-right-dot"></div>
            </div>
          </div>
        </Html>

        <Suspense fallback={null}>
          <ambientLight intensity={0.3}/>
          <directionalLight position={[10, 10, 5]} intensity={1}/>
          <Model scale={[20, 20, 20]} rotation={[0.02,-0.1 ,0]} position={[-0.3,0.1,-1.2]}/>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.8}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
            rotateSpeed={0.3}
            enableDamping={true}
            dampingFactor={0.1}
            />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </>
  )
}

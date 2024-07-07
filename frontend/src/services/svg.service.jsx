import * as React from "react"

// const ArrowRight = ({ color = "white", ...props }) => (
const Button = ({ top_color = "#c33737", round_color = "#e15b64", ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={200}
      height={200}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "initial",
        display: "block",
        shapeRendering: "auto",
        background: "#000",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <g
        className="ldl-scale"
        style={{
          transformOrigin: "50% 50%",
          transform: "rotate(0deg) scale(.8,.8)",
        }}
      >
        <g className="ldl-ani">
          <g className="ldl-layer">
            <g className="ldl-ani">
              <g
                className="ldl-layer"
                style={{
                  opacity: 1,
                  transformOrigin: "50px 50px",
                  transform: "matrix3d(.91,0,0,0,0,.91,0,0,0,0,.91,0,0,0,0,1)",
                  animation:
                    "1s linear -.625s infinite normal forwards running animate",
                  transformBox: "view-box",
                }}
              >
                <path
                  fill="#E0E0E0"
                  d="M90 61.087v-8.494c0-15.013-80-15.013-80 0v8.5c0 11.394 17.909 20.63 40 20.63s40-9.237 40-20.631v-.005z"
                  className="ldl-ani"
                  style={{
                    strokeWidth: 1,
                  }}
                />
              </g>
              <g
                className="ldl-layer"
                style={{
                  opacity: 1,
                  transformOrigin: "50px 50px",
                  transform: "matrix3d(.91,0,0,0,0,.91,0,0,0,0,.91,0,0,0,0,1)",
                  animation:
                    "1s linear -.75s infinite normal forwards running animate",
                  transformBox: "view-box",
                }}
              >
                <ellipse
                  cx={50}
                  cy={52.593}
                  fill="#666"
                  className="ldl-ani"
                  rx={40}
                  ry={20.631}
                  style={{
                    strokeWidth: 1,
                  }}
                />
              </g>
            </g>
          </g>
          <g className="ldl-layer">
            <g className="ldl-ani">
              <g
                className="ldl-layer"
                style={{
                  opacity: 1,
                  transformOrigin: "50px 50px",
                  transform: "matrix3d(.91,0,0,0,0,.91,0,0,0,0,.91,0,0,0,0,1)",
                  animation:
                    "1s linear -.875s infinite normal forwards running animate",
                  transformBox: "view-box",
                }}
              >
                <path
                  fill={round_color}
                  d="M81.5 49.242V35.859c0-14.034-62.999-14.034-62.999 0v13.387c0 8.973 14.103 16.246 31.5 16.246s31.5-7.274 31.5-16.247l-.001-.003z"
                  className="ldl-ani"
                  style={{
                    strokeWidth: 1,
                  }}
                />
              </g>
              <g
                className="ldl-layer"
                style={{
                  opacity: 1,
                  transformOrigin: "50px 50px",
                  transform: "matrix3d(.91,0,0,0,0,.91,0,0,0,0,.91,0,0,0,0,1)",
                  animation:
                    "1s linear -1s infinite normal forwards running animate",
                  transformBox: "view-box",
                }}
              >
                <ellipse
                  cx={50}
                  cy={35.859}
                  fill={top_color}
                  className="ldl-ani"
                  rx={31.5}
                  ry={16.247}
                  style={{
                    strokeWidth: 1,
                  }}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )

export const svgSvc = {
  Button,
}
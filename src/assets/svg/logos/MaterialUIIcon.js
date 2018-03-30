import React from 'react'
import SvgIcon from 'material-ui/SvgIcon'

const MaterialUIIcon = props => {
  return (
    <SvgIcon
      {...props}
      viewBox={'0 0 256 208'}
      style={{ fill: `${props.fill}` || '#D6D6D6' }}
    >
      <g>
        <path
          d="M15.624 35.012v87.53l15.058-8.471V43.482l-15.058-8.47z"
          style={{ fill: `${props.fill}` || '#949494' }}
        />
        <path
          d="M.565 114.07V8.66l89.411 50.823v17.883L15.624 35.012v87.53L.564 114.07z"
          style={{ fill: `${props.fill}` || '#EFEFEF' }}
        />
        <path
          d="M181.27 8.659V114.07l-60.235 33.882-15.059-9.412 60.236-33.882V34.07L89.976 77.365V59.482L181.271 8.66z"
          style={{ fill: `${props.fill}` || '#949494' }}
        />
        <path
          d="M166.212.188L90.918 42.541 15.624.188.564 8.658l89.412 50.824L181.271 8.66 166.21.189z"
          style={{ fill: `${props.fill}` || '#D6D6D6' }}
        />
        <path
          d="M151.153 42.541v53.647l15.059 8.47V34.072l-15.06 8.47z"
          style={{ fill: `${props.fill}` || '#EFEFEF' }}
        />
        <path
          d="M75.859 138.541l75.294-42.353 15.059 8.47-60.236 33.883 59.295 33.883 60.235-33.883 15.059 8.47-75.294 42.354-89.412-50.824z"
          style={{ fill: `${props.fill}` || '#D6D6D6' }}
        />
        <path
          d="M75.859 138.541v17.883l89.412 50.823v-17.882L75.859 138.54zM240.565 147.012V94.306l-15.06-8.47v52.705l15.06 8.47z"
          style={{ fill: `${props.fill}` || '#EFEFEF' }}
        />
        <path
          d="M165.27 189.365l75.295-42.353V94.306l15.059-8.47v70.588l-90.353 50.823v-17.882z"
          style={{ fill: `${props.fill}` || '#949494' }}
        />
        <path
          d="M255.624 85.835l-15.06 8.47-15.058-8.47 15.059-8.47 15.059 8.47z"
          style={{ fill: `${props.fill}` || '#D6D6D6' }}
        />
        <path
          d="M240.565 77.365V59.482l15.059-8.47v17.882l-15.06 8.47z"
          style={{ fill: `${props.fill}` || '#949494' }}
        />
        <path
          d="M240.565 59.482v17.883l-15.06-8.47V51.011l15.06 8.47z"
          style={{ fill: `${props.fill}` || '#EFEFEF' }}
        />
        <path d="M255.624 51.012l-15.06 8.47-15.058-8.47 15.059-8.47 15.059 8.47z" />
      </g>
    </SvgIcon>
  )
}

export default MaterialUIIcon

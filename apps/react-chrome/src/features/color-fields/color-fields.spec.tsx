import { render } from '@testing-library/react'
import { useColor } from 'react-color-palette'

import { ColorFields } from '.'

const ColorFieldsWithState = () => {
    const [color, setColor] = useColor('#000000FF')
    return <ColorFields color={color} onChange={setColor} hideInput={[]} />
}

test('renders ColorFields component', () => {
    render(<ColorFieldsWithState />)
})

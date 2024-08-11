import { render } from '@testing-library/react'

import { FormulaInput } from '.'

test('renders FormulaInput component', () => {
    render(<FormulaInput inline={false} />)
})

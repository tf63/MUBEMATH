'use client'

import { Dropdown } from '@/features/dropdown'

type FontSizeSliderProps = {
    fontSize: number
    setFontSize: (fontSize: number) => void
}

export const FontSizeSlider = ({ fontSize, setFontSize }: FontSizeSliderProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(Number.parseInt(e.target.value, 10))
    }

    return (
        <Dropdown summary={`FontSize ${fontSize}`}>
            <input className="range" type="range" min="0" max="100" value={fontSize} onChange={handleChange} />
        </Dropdown>
    )
}

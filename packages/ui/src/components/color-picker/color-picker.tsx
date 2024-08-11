import type { Dispatch, SetStateAction } from 'react'
import { Alpha, Hue, Saturation, type IColor } from 'react-color-palette'

import { Dropdown } from '@ui/components/dropdown'

import 'react-color-palette/css'

type ColorPickerProps = {
    color: IColor
    setColor: Dispatch<SetStateAction<IColor>>
}

export const ColorPicker = ({ color, setColor }: ColorPickerProps) => (
    <Dropdown summary={`Text ${color.hex}`}>
        <div className="w-[175px] space-y-5 [&_.rcp-saturation]:rounded-md">
            <Saturation height={175} color={color} onChange={setColor} />
            <Hue color={color} onChange={setColor} />
            <Alpha color={color} onChange={setColor} />
        </div>
    </Dropdown>
)

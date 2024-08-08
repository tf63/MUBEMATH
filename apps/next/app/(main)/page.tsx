import { FormulaInput } from '@/features/formula-input'

export default function Home() {
    return (
        <div className="w-full">
            <div className="card flex items-center">
                <h1 className="w-fit text-2xl font-bold">MUBEMATH</h1>
            </div>

            <FormulaInput inline={false} />
        </div>
    )
}

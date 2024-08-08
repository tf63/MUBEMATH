type ButtonToastProps = { text: string; onClick: () => void }

export const ButtonToast = ({ text, onClick }: ButtonToastProps) => (
    <button type="button" className="btn btn-secondary shadow-secondary" onClick={onClick}>
        {text}
    </button>
)

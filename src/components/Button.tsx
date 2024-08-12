type ButtonProps = {
    text: string
  }
  
  export default function Button({ text }: ButtonProps) {
    return (
      <button style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px' }}>
        {text}
      </button>
    )
  }
  
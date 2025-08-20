export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-5 py-4 border-top">
      <div className="container small text-muted d-flex justify-content-between align-items-center">
        <span>© {year} MySite</span>
        <span>Built with React & Bootstrap</span>
      </div>
    </footer>
  )
}

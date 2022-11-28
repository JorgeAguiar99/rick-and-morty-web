export const Footer = () => {
    return (
        <>
            <div style={{ position: 'absolute', width: '100vw', bottom: '0px' }}>
                <nav className="navbar sticky-bottom" style={{ backgroundColor: '#356f72', paddingBottom: 15, paddingTop: 15, marginTop: 15 }}>
                    <p className='text-center' style={{ marginLeft: 'auto', marginRight: 'auto', color: '#fff' }} >
                        Hackathon Project By <br /> Jorge Aguiar & Marco Antonio
                    </p>
                </nav>
            </div>
        </>
    )
}
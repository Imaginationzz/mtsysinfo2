import React from 'react'

export default function Footer() {
    const mainFooter = {
        background: "rgb(2,24,46)",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px",
    }
    return (
        <div>
            <footer style={mainFooter}>
                <p>footer goes here</p>
            </footer>
        </div>
    )
}

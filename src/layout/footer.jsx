
function Footer(){
    return <footer className="page-footer blue accent-1">
        <div className="footer-copyright">
            <div className="container">
            ©{new Date().getFullYear()}
            Еремеева ТКБО-03-22
            <a href="#!" className="grey-text text-lighten-4 right">
                Repository
            </a>

            </div>
        </div>
    </footer>
}
export{Footer};
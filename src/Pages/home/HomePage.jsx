const HomePage = () => {
    return (
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid">
          <h1 className="display-5 fw-bold">Kenapa Kami harus menguji ini?</h1>
          <p className="col-md-8 fs-4">
              Untuk menjamin kualitas kode kami. Dan untuk menunjukkan kepada orang-orang bahwa kita juga
              peduli dan ingin memberikan sesuatu yang sudah terbukti, setidaknya
              oleh diri kita sendiri.
          </p>
          <a href="/comments">
            <button type="button" className="btn btn-primary mt-2">
              Daftar Komentar
            </button>
          </a>
        </div>
      </div>
    );
  };
  
  export default HomePage;
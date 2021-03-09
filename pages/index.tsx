export default function Home() {
  return (
    <div className="container mt-4 border">
      <div className="row">
        <div className="col-md-6">
          <figure>
            <blockquote className="blockquote">
              <p className="h1">Todofuken</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Opensourced Japan Zipcode-Address API
            </figcaption>
          </figure>
          <a href="https://github.com/TERADA-DANTE/todofuken" className="link-primary">
            View the project on Github
          </a>
          <p>
            <small className="text-muted">TERADA-DANTE/todofuken</small>
          </p>
        </div>
        <div className="col-md-6">
          <p className="h1">Reference</p>
          <span className="badge bg-primary">Endpoint</span>
          <br />
          <code>https://www.test.com/v2/api/todofuken</code>
          <hr />
          <p className="h3">Basic usage</p>
          <p className="h6">1. Get a address from a zipcode</p>
          You can get a single address by querying with a zipcode
          <br />
          <span className="badge bg-primary">Get</span>
          <br />
          <code>{'https://www.test.com/v2/api/todofuken/zipcode={zipcode}'}</code>
        </div>
      </div>
    </div>
  )
}

import { Container, Row, Col } from "react-bootstrap";

export default function ProcessSection() {
  return (
    <div className="section bg-light" id="process">
      <Container>
        
        <Row className="justify-content-center text-center">
          <Col md={10} className="mb-4">
            <span className="badge bg-primary-2 text-primary-1-1 px-3 py-2 rounded-pill mb-3 d-inline-flex align-items-center">
              <i className="fa-brands fa-think-peaks me-2"></i> Our Process
            </span>

            <h2 className="display-5 fw-bold mb-3 text-dark">
              A Process You Can <span className="text-primary-1">Trust</span>
            </h2>

            <p className="lead text-muted mb-0">
              Revamping a space means blending essential design principles to
              craft an environment that feels balanced, purposeful, and
              effortlessly inviting.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col lg={5} className="mb-4">
            <img src="processimg.png" alt="" className="img-fluid" />
          </Col>

          <Col lg={6} className="offset-lg-1 mb-4">
            
            <div className="d-flex align-items-center bg-dark-1 border border-dark-1 rounded-2 p-4 mb-4">
              <div className="bg-dark-1 avatar avatar-md rounded-circle me-3 process-num">
                <span className="text-dark opacity-50 fw-medium">01</span>
              </div>
              <div>
                <h4 className="mb-2 text-dark">Vision Discovery</h4>
                <p className="mb-0 text-muted fs-18">
                  We start by chatting with you to uncover your style, needs,
                  and what you truly want.
                </p>
              </div>
            </div>

            
            <div className="d-flex align-items-center bg-primary-1 border border-primary-1 rounded-2 p-4 mb-4">
              <div>
                <h4 className="mb-2 text-primary-1-1">Design & Visualization</h4>
                <p className="mb-0 text-muted fs-18">
                  Next, we turn ideas into visuals—creating mood boards,
                  sketches, and 3D designs.
                </p>
              </div>
              <div className="bg-primary-1 avatar avatar-md rounded-circle ms-3 process-num">
                <span className="text-primary-1-1 opacity-50 fw-medium">02</span>
              </div>
            </div>

            
            <div className="d-flex align-items-center bg-dark-1 border border-dark-1 rounded-2 p-4 mb-4">
              <div className="bg-dark-1 avatar avatar-md rounded-circle me-3 process-num">
                <span className="text-dark opacity-50 fw-medium">03</span>
              </div>
              <div>
                <h4 className="mb-2 text-dark">Execution & Transformation</h4>
                <p className="mb-0 text-muted fs-18">
                  While you relax, we turn your design into a real space that
                  feels, looks, and lives exactly the way you imagined.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} className="text-center">
            <a href="#contact" className="btn btn-primary">
              Get in Touch <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import {Row, Col} from 'react-bootstrap'
import { instructorProfile, instructorProfileImgName } from '../helpers';


export default function CourseStaff() {
    return (
        <>
        <Row>
            <Col><b>Instructor</b></Col>
            <Col><b>Teaching Assistant</b></Col>
        </Row>
        <br></br>
        <Row>
            <Col style={{maxWidth: '40%'}}>
                <Row>
                        {instructorProfile(
                            "Rahul Krishnan", 
                            "images/rahul.png",
                            "http://www.cs.toronto.edu/~rahulgk",
                            "cs.toronto.edu",
                            "rahulgk")}
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col>
                {instructorProfile(
                        "Sujay Nagaraj", 
                        "images/Nagaraj,Sujay.jpg",
                         "https://scholar.google.com/citations?user=8YrBnPsAAAAJ&hl=en",
                        "mail.utoronto.ca",
                        "s.nagaraj")}
                    </Col>
                </Row>
            </Col>
        </Row>

        </>
    );

}

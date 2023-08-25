import {Row, Col} from 'react-bootstrap'
import { instructorProfile, instructorProfileImgName } from '../helpers';


export default function CourseStaff() {
    return (
        <>
        <Row>
            <Col><b>Instructor</b></Col>
            <Col><b>Teaching Assistants</b></Col>
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
                        //"https://michaeljohncooper.com",
                        "mail.utoronto.ca",
                        "s.nagaraj")}
                    </Col>
                </Row>
            </Col>
        </Row>

        </>
    );

}

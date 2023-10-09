import Head from 'next/head'
import Page from '../components/page'
import { Table } from 'react-bootstrap'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { leftTooltip } from '../helpers'
import { Col } from 'react-bootstrap'

function makeLink(
  type,
  dest,
  text
) {
  if (type === "mandatory") {
    return (
    <Col className='d-flex justify-content-center pl-3 pr-3' key={dest}>
    {leftTooltip(<a href={dest} target="_blank" key={dest} id="mandatory">
    <FontAwesomeIcon 
        icon={faFilePdf} 
        size="lg"
        key={dest}/>
    </a>, text)}
    </Col>
    );
  }
  if (type === "optional") {
    return (
    <Col className='d-flex justify-content-center pl-3 pr-3' key={dest}>
    {leftTooltip(<a href={dest} target="_blank" key={dest} id="optional">
    <FontAwesomeIcon 
        icon={faFilePdf} 
        size="lg"
        key={dest}/>
    </a>, text)}
    </Col>
    );
  }
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2023)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <h2>Schedule</h2>
          <p>In the below schedule, blue PDF icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="mandatoryNoHover"/>}) represent required readings for the week. Highlighted cells indicate that a course deliverable is due on that date.</p>
          <p>Lecture slides can be found linked below; lecture recordings can be found on Quercus.</p>
          <Table id="tabular">
          <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* WEEK 1 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 1: Introduction</b></td>
              </tr>
              <tr>
                <td>09/14/2023 (Thursday)</td>
                <td>Lecture: <a href="/lectures/lecture1-intro_to_ml.pdf" target="_blank">Introduction and Course Details</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41586-023-05881-4?utm_medium=Social&utm_campaign=nature&utm_source=Twitter#Echobox=1681386702", 
                  "Foundation Models for Generalist AI.. (Moor et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1806.00388.pdf", 
                  "A Review of Challenges and Opportunities... (Ghassemi et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/1606.00931", 
                  "DeepSurv: Personalized Treatment... (Katzman et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://ojs.aaai.org/index.php/AAAI/article/view/11842", 
                  "DeepHit (Li et al.)")}
                  <br></br>
                </td>
              </tr>
              {/* WEEK 2 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 2: Supervised Learning and Survival Analysis</b></td>
              </tr>
              <tr>
                <td>09/21/2023 (Thursday)</td>
                <td>Lecture: <a href="/lectures/lecture2-sup_surv_analysis.pdf" target="_blank">Supervised Learning and Survival Analysis</a> <i>(Rahul Krishnan)</i></td>
                {/* <td rowSpan="1" style={{verticalAlign: "middle"}}> */}
                <td rowSpan="1">
                  {makeLink("mandatory", 
                  "https://www.liebertpub.com/doi/pdfplus/10.1089/big.2015.0020", 
                  "Population-Level Prediction of Type 2... (Razavian et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006076", 
                  "CoxNNET - Survival analysis from omics... (Ching et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41746-018-0029-1.pdf", 
                  "DeepLearning with EHR (Rajkomar et al.)")}
                </td>
              </tr>
              {/* <tr>
                <td>09/15/2021 (Wednesday)</td>
                <td>Lecture: <a href="/lectures/csc2541_lecture3-sup_learning2.pdf" target="_blank">Supervised Learning in Healthcare II</a> <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td>09/17/2021 (Friday)</td>
                <td>Project Planning Session I</td>
              </tr> */}
              {/* WEEK 3 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 3: In-person Project Planning</b></td>
              </tr>
              <tr>
                {/* <td>09/28/2023 (Thursday)</td> */}
                {/* <td>Lecture: <a>Time Series Modeling in Healthcare I</a> <i>(Rahul Krishnan)</i></td> */}
                {/* <td rowSpan="1">
                {makeLink("mandatory", 
                  "https://static1.squarespace.com/static/59d5ac1780bd5ef9c396eda6/t/5b7372dc1ae6cf102e27b7e7/1534292701747/13.pdf", 
                  "Disease-Atlas: Navigating Disease Trajectories... (Lim et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.aaai.org/ocs/index.php/AAAI/AAAI15/paper/view/10015/9966", 
                  "Clustering Longitudinal Clinical Marker... (Schulam et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/1609.09869", 
                  "Structured Inference Networks for Nonlinear... (Krishnan et al.)")}
                  <br></br>
                  {makeLink("optional",
                  "https://arxiv.org/pdf/1909.07782.pdf",
                  "Interpolation-Prediction Networks for Irregularly... (Shukla et al.)")}
                  <br></br>
                  {makeLink("optional",
                  "http://www.marzyehghassemi.com//wp-content/uploads/2016/10/JAMIA_2016_Ghassemi_Wu_Understanding_vasopressor_interventions.pdf",
                  "Understanding vasopressor intervention and... (Wu, Ghassemi et al.)")}
                </td> */}
              </tr>
              <tr>
                <td>09/28/2023 (Thursday)</td>
                <td>Lecture: <a href="lectures/lecture3.pdf" target="_blank">Project Planning Session</a> <i>(Rahul Krishnan & Sujay Nagaraj)</i></td>
              </tr>
              {/* <tr>
                <td>09/24/2021 (Friday)</td>
                <td>Project Planning Session II</td>
              </tr> */}
              {/* WEEK 4 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 4: Time-Series Modelling / Disease Progression</b></td>
              </tr>
              <tr>
                <td>10/05/2023 (Thursday)</td>
                <td>Lecture: <a href="/lectures/lecture4-ts_learning1.pdf" target="_blank">Time-Series Data in Healthcare</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41598-018-24271-9", 
                  "Recurrent Neural Networks for Multivariate Time Series... (Che et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41562-020-01046-9", 
                  "Daily, weekly, seasonal cycles in mood, behaviour and vital signs (Pierson et al.)")}
                </td>
              </tr>
              <tr>
                <td>10/05/2023 (Thursday)</td>
                <td>Guest Lecture: <a>Representation Learning in Healthcare Time-Series</a> <i> (Sana Tonekaboni)</i></td>
              </tr>
              <tr>
                <td id="deadlineTableRow">10/05/2023 (Thursday)</td>
                <td id="deadlineTableRow">
                <td></td>
                  <br></br>
                  <b>Project Proposal Due</b>
                </td>
                <td id="deadlineTableRow"></td>
              </tr>
              {/* WEEK 5 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 5: Clinical NLP and LLMs</b></td>
              </tr>
              <tr>
                <td>10/12/2023 (Thursday)</td>
                <td>Lecture: <a> Clinical Natural Language Processing</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                {makeLink("mandatory", 
                  "https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000198&fbclid=IwAR3U9R0A5QwAVMACFfgA79EFYWu32uFE8upittW5ZEb9qaNSZyWXpxdnJU4", 
                  "CHAT GPT for USMLE")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/2005.14165", 
                  "GPT-3 Paper")}
                </td>
              </tr>
              <tr>
                <td>10/12/2023 (Thursday)</td>
                <td>Guest Lecture: <a>Clinical Deployment</a> <i> (Sujay Nagaraj)</i></td>
              </tr>
              {/* <tr>
                <td>10/06/2021 (Wednesday)</td>
                <td>
                  Student Paper Presentation: <a href="paper_presentations/CSC2541_CaitHarrigan_PaperPresentation.pdf" target="_blank">Clustering Longitudinal Clinical Marker Trajectories from Electronic Health Data: Applications to Phenotyping and Endotype Discovery</a> <i>(Cait Harrigan)</i>
                  <br></br>
                  <br></br>
                  Student Paper Presentation: <a href="paper_presentations/CSC2541_YangQu_QingyangYu_PaperPresentation.pdf" target="_blank">Disease-Atlas: Navigating Disease Trajectories using Deep Learning</a> <i>(Yang Qu, Qingyang Yu)</i>
                </td>
              </tr>
              <tr>
                <td>10/08/2021 (Friday)</td>
                <td>Guest Lecture: <a href="talks/csc2541_guest_lecture2_Monica.pdf" target="_blank">Clinical Natural Language Processing</a> <i>(Monica Agrawal)</i></td>
              </tr> */}
              {/* WEEK 6 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 6: Medical Imaging and Self-Supervised Learning</b></td>
              </tr>
              <tr>
                <td>10/19/2023 (Thursday)</td>
                <td>Lecture: <a> Medical Imaging and SSL</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41551-022-00914-1", 
                  "SSL in Healthcare (Krishnan et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/1711.05225", 
                  "CHEXNET (Rajpurkar et al.)")}
                </td>
              </tr>
              <tr>
                <td>10/19/2023 (Thursday)</td>
                <td>Guest Lecture: Medical Imaging<a></a> <i> (Richard Chen)</i></td>
              </tr>
             {/*  <tr>
                <td>10/13/2021 (Wednesday)</td>
                <td>Lecture: <a href="lectures/csc2541_lecture8-imaging.pdf" target="_blank"> Medical Imaging</a> <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td>10/15/2021 (Friday)</td>
                <td>Guest Lecture: <a href="talks/csc2541_guest_lecture3_Liao.pdf" target="_blank">Multimodal Representation Learning for Medical Image Analysis</a> <i>(Ruizhi Liao)</i></td>
              </tr> */}
              {/* WEEK 7 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 7: Clinical Deployment</b></td>
              </tr>
              <tr>
                <td>10/26/2023 (Thursday)</td>
                <td>Lecture: <a>Clinical Deployment</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41591-022-01895-z", 
                  "Factors Driving adoption of TREWS (Henry et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://proceedings.mlr.press/v106/tonekaboni19a.html", 
                  "What clinicians want (Tonekaboni et al.)")}
                </td>
              </tr>
              <tr>
                <td>10/26/2023 (Thursday)</td>
                <td>Guest Lecture: Clinical LLMs<a></a> <i> (Monica Agarwal)</i></td>
              </tr>
              {/* <tr>
                <td>10/20/2021 (Wednesday)</td>
                <td>Lecture: <a href="talks/csc2541_guest_lecture4_Fralick.pdf" target="_blank">Deployment of Clinical ML Systems</a> <i>(Michael Fralick)</i></td>
              </tr>
              <tr>
                <td>10/22/2021 (Friday)</td>
                <td>
                  Student Paper Presentation: <a href="paper_presentations/CSC2541_BeiqinZeng_ZhongkangGuo_PaperPresentation.pdf" target="_blank">Uncovering the Heterogeneity and Temporal Complexity of Neurodegenerative Diseases with Subtype and Stage Inference</a> <i>(Beiqin Zeng, Zhongkang Guo)</i>
                  <br></br>
                  <br></br>
                  Student Paper Presentation: <a href="paper_presentations/CSC2541_WeimingRen_TianshuZhu_PaperPresentation.pdf" target="_blank">Machine Learning for Comprehensive Forecasting of Alzheimer’s Disease Progression</a> <i>(Weiming Ren, Tianshu Zhu)</i>
                </td>
              </tr> */}
              {/* WEEK 8 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 8: Fairness</b></td>
              </tr>
              <tr>
                <td>11/02/2023 (Thursday)</td>
                <td>Lecture: <a>Fairness in ML4H</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                {makeLink("mandatory", 
                  "https://www.annualreviews.org/doi/abs/10.1146/annurev-biodatasci-092820-114757", 
                  "Ethical Machine Learning in HC (Chen et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.science.org/doi/abs/10.1126/science.aax2342", 
                  "Dissecting racial bias (Obermeyer et al.)")}
                </td>
              </tr>
              <tr>
                <td>11/02/2023 (Thursday)</td>
                <td>Guest Lecture: Fairness<a></a> <i> (Haoran Zhang)</i></td>
              </tr>
              {/* <tr>
                <td>10/27/2021 (Wednesday)</td>
                <td>
                  Student Paper Presentation: <a href="paper_presentations/CSC2541_TongziWu_RuijingZeng_PaperPresentation.pdf" target="_blank">Attention Is All You Need</a> <i>(Ruijing Zeng, Tongzi Wu)</i>
                  <br></br>
                  <br></br>
                  Student Paper Presentation: <a href="paper_presentations/CSC2541_ZixuanPan_ZitongLi_PaperPresentation.pdf" target="_blank">BioBERT: A Pre-Trained Biomedical Language Representation Model for Biomedical Text Mining</a> <i>(Zixuan Pan, Zitong Li)</i>
                </td>
              </tr> */}
              <tr>
                <td id="deadlineTableRow">11/02/2023 (Thursday)</td>
                <td id="deadlineTableRow">
                <td></td>
                  <br></br>
                  <b>Paper Summary Assignment Due</b>
                </td>
                <td id="deadlineTableRow"></td>
              </tr>
              
              {/* WEEK 9 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 9: Reading Week (No Classes)</b></td>
              </tr>
              <tr>
                <td colSpan="3" align="center"></td>
              </tr>
              {/* WEEK 10 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 10: Causality</b></td>
              </tr>
              <tr>
                <td>11/16/2023 (Thursday)</td>
                <td>Lecture: <a>Causality</a> <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td colSpan="3" align="center"><b>Week 11: Student Presentations</b></td>
              </tr>
              <tr>
                <td>11/23/2023 (Thursday)</td>
                <td>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                </td>
                <td></td>
              </tr>

              {/* WEEK 11 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 11: Student Presentations</b></td>
              </tr>
              <tr>
                <td>11/23/2023 (Thursday)</td>
                <td>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                </td>
                <td></td>
              </tr>
              {/* <tr>
                <td>12/01/2021 (Wednesday)</td>
                <td>
                  Student Project Presentation: <a href="project_presentations/CSC2541_DiannaKan_YangQu_QingyangYu_ShujunYan_ProjectPresentation.pdf" target="_blank">Time Series Analysis of Biomarkers For Multiple Myeloma</a> (Dianna Kan, Yang Qu, Qingyang Yu, Shujun Yan)
                  <br></br>
                  <br></br>
                  Student Project Presentation: <a href="project_presentations/CSC2541_YuyiDing_YuxiaoSun_ShreyanshBanthia_SantoshKolagati_ProjectPresentation.pdf" target="_blank">A Multimodal Approach to Autism Spectrum Disorder Subtyping</a> (Yuyi Ding, Yuxiao Sun, Shreyansh Banthia, Santosh Kolagati)
                </td>
                <td></td>
              </tr>
              <tr>
                <td>12/03/2021 (Friday)</td>
                <td>
                  Student Project Presentation: <a href="project_presentations/CSC2541_AsleshaPokhrel_SujayNagaraj_CaitHarrigan_ProjectPresentation.pdf" target="_blank">TAGS: Time-Adaptive Global State Modeling of Hierarchically Clustered Time Series Data</a> (Aslesha Pokhrel, Sujay Nagaraj, Cait Harrigan)
                  <br></br>
                  <br></br>
                  Student Project Presentation: <a href="project_presentations/CSC2541_NikhilVerma_OmkarDige_DeepkamalGill_ProjectPresentation.pdf" target="_blank">Transfer Learning for ECG Classification Using PTB-XL</a> (Nikhil Verma, Omkar Dige, Deepkamal Gill)
                </td>
                <td></td>
              </tr> */}
            {/* WEEK 12 */}
            <tr>
                <td colSpan="3" align="center"><b>Week 12: Student Presentations</b></td>
              </tr>
              <tr>
                <td>11/30/2023 (Thursday)</td>
                <td>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations: TBD</td>
                </td>
                <td></td>
                <td></td>
              </tr>
              {/* <tr>
                <td id="deadlineTableRow">12/07/2021 (Wednesday)</td>
                <td id="deadlineTableRow">
                <td>
                  Student Project Presentation: <a href="project_presentations/CSC2541_VahidBalazadeh_TomGinsberg_KorbinianKoch_VasudevSharma_ProjectPresentation.pdf" target="_blank">DisCeRn: Disease-Contrastive Representations from Multi-Modal Medical Data</a> (Vahid Balazadeh, Tom Ginsberg, Korbinian Koch, Vasudev Sharma)
                  <br></br>
                  <br></br>
                  Student Project Presentation: <a href="project_presentations/CSC2541_RuijingZeng_TongziWu_WeimingRen_TianshuZhu_ProjectPresentation.pdf" target="_blank">Towards Transformer-Based Automated ICD Coding: Challenges, Pitfalls and Solutions</a> (Ruijing Zeng, Tongzi Wu, Weiming Ren, Tianshu Zhu)
                </td>
                <td></td>
                  <br></br>
                  <b>Project Final Report Due</b>
                </td>
                <td id="deadlineTableRow"></td>
              </tr> */}

            {/* WEEK 13 */}
            <tr>
                <td colSpan="3" align="center"><b>Week 13: Student Presentations</b></td>
              </tr>
              <tr>
                <td>12/07/2023 (Thursday)</td>
                <td>
                <td>Student Project Presentations:</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations:</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations:</td>
                <br></br>
                <br></br>
                <td>Student Project Presentations:</td>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="deadlineTableRow">12/07/2023 (Thursday)</td>
                <td id="deadlineTableRow">
                {/* <td>
                  Student Project Presentation: <a href="project_presentations/CSC2541_VahidBalazadeh_TomGinsberg_KorbinianKoch_VasudevSharma_ProjectPresentation.pdf" target="_blank">DisCeRn: Disease-Contrastive Representations from Multi-Modal Medical Data</a> (Vahid Balazadeh, Tom Ginsberg, Korbinian Koch, Vasudev Sharma)
                  <br></br>
                  <br></br>
                  Student Project Presentation: <a href="project_presentations/CSC2541_RuijingZeng_TongziWu_WeimingRen_TianshuZhu_ProjectPresentation.pdf" target="_blank">Towards Transformer-Based Automated ICD Coding: Challenges, Pitfalls and Solutions</a> (Ruijing Zeng, Tongzi Wu, Weiming Ren, Tianshu Zhu)
                </td> */}
                <td></td>
                  <br></br>
                  <b>Project Final Report Due</b>
                </td>
                <td id="deadlineTableRow"></td>
              </tr>
            </tbody>
          </Table>
        </Page>
    </div>
  )
}

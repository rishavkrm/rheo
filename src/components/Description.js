// import "";
export default function Description(props) {
  const styleSpeakers = {
    flex: 1,
    maxWidth: 'calc(33.33% - 20px)',
    margin: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  }
  if (props.url === "desc") {
    return (
      <div class="container py-5">
        <p style={{ fontSize: '1.5rem' }}>
          Embark on a captivating journey into the world of Rheology, inspired
          by the age-old concept of "Panta Rei," signifying that with time,
          everything flows. Delve into the science of studying material flow and
          deformation, gaining insights into the behavior of various substances,
          from soft matter to engineering materials. Explore the cutting-edge
          Anton Paar Rheometer 702e, a state-of-the-art instrument recently
          established in our institute, revolutionizing research in material
          science and characterizing a diverse range of materials. This workshop
          offers a unique opportunity to engage with both internal and external
          experts from both industry and academia, learn about the latest
          advancements, and witness the powerful impact of Rheology on
          scientific innovation.
        </p>
        <h4>Event details </h4>
        <li style={{ fontSize: '1.3rem' }}>
          Venue :<a href="https://iitpkd.ac.in/nila-campus"> Nila Campus, IIT Palakkad</a>

        </li>
        <h4>Important dates</h4>
        <li style={{ fontSize: '1.3rem' }}>
          Application Deadline : 15th November 2023
        </li>
        <li style={{ fontSize: '1.3rem' }}>
          Announcement of selected participants : 20th November 2023
        </li>
        <li style={{ fontSize: '1.3rem' }}>
          Registration fee deadline (for selected parcticipants) : on or before 25th November 2023
        </li>
        {/* <li style={{fontSize:'1.5 rem'}}>
          Poster abs deadline : 15th November
        </li> */}
        <h4>Coordinators</h4>
        <ul>
          <li style={{ fontSize: '1.3rem' }}>Dr. Veena Venudharan, Department of Civil Engineering</li>
          <li style={{ fontSize: '1.3rem' }}>Dr. Vishwas V, Department of Physics</li>
        </ul>
      </div>
    );
  } else if (props.url === "part") {
    return (
      <div class="container py-5">
        <h4>Academia Speakers</h4>
        <ul style={{ listStyleType: 'none' }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: 'wrap'
            }}
          >
            <div>

            </div>
            <li style={styleSpeakers}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="https://che.iitm.ac.in/wp-content/uploads/2021/07/Dr.-Abhijit-P.-Deshpande.jpg"
                  height="200"
                  alt=""
                ></img>
                <br />
                <h6>Prof. Abhijit P. Deshpande</h6>
                <h6>IIT Madras</h6>
                <a href="https://che.iitm.ac.in/abhijit/">Click here</a>
              </div>

            </li>
            <li style={styleSpeakers}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <img
                  src="https://civil.iitm.ac.in/faculty/jmk/admin/download/Murali_Krishnan31.jpg"
                  height="200"
                  alt=""
                ></img>
                <br />
                <h6>Prof. Murali Krishnan J.</h6>
                <h6>IIT Madras</h6>
                <a href="https://civil.iitm.ac.in/faculty/jmk/">Click here</a>

              </div>


            </li>
            <li style={styleSpeakers}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <img
                  src="https://media.licdn.com/dms/image/C5103AQGTcYFLD-3SoQ/profile-displayphoto-shrink_800_800/0/1579113104112?e=2147483647&v=beta&t=uRtGPh95uB2aLi_I2HHrJmD_uFIS0YTNBNPtk9VlGSE"
                  height="200"
                  alt="https://www.iittp.ac.in/dr-a-v-rahul"
                ></img><br></br>
                <h6>Dr. Rahul A. V.</h6> <h6>IIT Tirupati</h6>
                <a href="">Click here</a>
              </div>


            </li>
            <li style={styleSpeakers}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <img
                  src="https://www.rri.res.in/sites/default/files/2022-05/HSC_0022.jpg"
                  height="200"
                  alt=""
                ></img><br></br>
                <h6>Dr. Sayantan Majumdar</h6>
                <h6>RRI Bengaluru</h6>
                <a href="https://www.rri.res.in/people/faculty/sayantan-majumdar">Click here</a>

              </div>


            </li>
          </div>
        </ul>
        <h4>Industry Speakers</h4>
        <ul>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: 'wrap'
            }}
          >
            <div>

            </div>
            <li style={styleSpeakers}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                  height="200"
                  alt=""
                ></img>
                <br />
                <h6>Dr. Athira P.K.</h6>
                <h6>Application scientist for rheology</h6>
                <h6>Anton Paar,Mumbai </h6>
                <a href="https://in.linkedin.com/in/athira-perilakalathil-ph-d-62b16856?trk=public_profile_like_view_actor-name">Click here</a>
              </div>

            </li>
            <li style={styleSpeakers}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                  height="200"
                  alt=""
                ></img>
                <br />
                <h6>Industry speaker 2</h6>
                <h6>TBA</h6>

              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  } else if (props.url === "program") {
    return (
      <div class="container py-5">
        {/* <div>
          <h4 class="extra-program">All listed times are in IST</h4>
        </div> */}

        <div>
          {/* <h2>25th November, 2023, Nila Campus</h2>

          <h4>Morning session</h4>
          <ul>
            <li>
              09:15 to 09:45 - Commencement and Inauguration of the facility{" "}
            </li>
            <li>10:00 to 10:30 - Prof - Title </li>
            <li>10:30 to 11:00 - Prof - Title</li>
            <li>
              <b>Discussion and Q&A</b>
            </li>
            <li>11:30 to 12:00 - Prof - Title </li>
            <li>12:00 to 12:30 - Prof - Title</li>
            <li>
              <b>Discussion and Q&A</b>
            </li>
          </ul> */}

          {/* <h4>Lunch and Poster Session - 13:00 to 14:00</h4>

          <h4>Afternoon session</h4>
          <ul>
            <li>14:00 to 14:30 - Industry Speaker - Title </li>
            <li>14:30 to 15:00 - Industry Speaker - Title</li>
            <li>
              <b>Discussion and Q&A</b>
            </li>
          </ul> */}

          {/* <h4>Lab Visit and Demonstration - 15:30 to 17:30</h4> */}
        </div>

        <h4>To be announced soon</h4>
      </div>
    );
  } else if (props.url === "abstract") {
    return (
      <div class="container py-5">
        <h4>To be announced soon</h4>
        {/* <ul>
          <li>
            XX/11/2023
            <ul>
              <li>
                <b>TITLE</b>
              </li>
              <li>by Prof. , Department of XXX, XXXX University</li>
            </ul>
          </li>

          <li>
            XX/11/2023
            <ul>
              <li>
                <b>TITLE</b>
              </li>
              <li>by Prof. , Department of XXX, XXXX University</li>
            </ul>
          </li>

          <li>
            XX/11/2023
            <ul>
              <li>
                <b>TITLE</b>
              </li>
              <li>by Prof. , Department of XXX, XXXX University</li>
            </ul>
          </li>
        </ul> */}
      </div>
    );
  } else if (props.url === "doc") {
    return (
      <div class="container py-5">
        <div>
          <h4>Shortlisted posters will be announced by 20th November 2023</h4>

          {/* <ul>
            <li>1-Presenter-Poster Title</li>
            <li>2-Presenter-Poster Title</li>
            <li>3-Presenter-Poster Title</li>
            <li>4-Presenter-Poster Title</li>
            <li>5-Presenter-Poster Title</li>
            <li>6-Presenter-Poster Title</li>
            <li>7-Presenter-Poster Title</li>
            <li>8-Presenter-Poster Title</li>
            <li>9-Presenter-Poster Title</li>
          </ul> */}
        </div>
      </div>
    );
  }
  else if (props.url === "participants") {
    return (
      <div class="container py-5">
        <div>
          <h4>Participants list will be announced by 20th November 2023</h4>
          {/* <ul>
            <li>Partipant - 1</li>
            <li>Partipant - 2</li>
            <li>Partipant - 3</li>
            <li>Partipant - 4</li>
            <li>Partipant - 5</li>
            <li>Partipant - 6</li>
            <li>Partipant - 7</li>
            <li>Partipant - 8</li>
            <li>Partipant - 9</li>
          </ul> */}
        </div>
      </div>
    );
  }
}

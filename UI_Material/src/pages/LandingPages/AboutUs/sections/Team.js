// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/webdevImages/images/BELLO.jpeg";
import team2 from "assets/webdevImages/images/Bayat.jpeg";
import team3 from "assets/webdevImages/images/you3.jpg";
import team4 from "assets/webdevImages/images/Endy.jpeg";
import team5 from "assets/webdevImages/images/Ishaq.jpeg";
import team6 from "assets/webdevImages/images/James.jpeg";
import team7 from "assets/webdevImages/images/sekyi.jpeg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The WEBDEV Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {/* There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill. */}
              Our dedicated web development team is the backbone of Do4me. Comprising talented
              professionals with a passion for innovation, they work tirelessly to create a seamless
              and user-friendly platform.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Bello Adbul Sammid"
                position={{ color: "info", label: "Frontend Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Bayat Osman "
                position={{ color: "info", label: "Full stack Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Derrick Boateng"
                position={{ color: "info", label: "Web Developer and UI/IX Designer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Endurance Offeibea"
                position={{ color: "info", label: "UI/UX Designer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5}
                name="Otabil Ishaq"
                position={{ color: "info", label: "Frontend Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team6}
                name="James Bentil"
                position={{ color: "info", label: "Backend Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team7}
                name="Sekyi Ken Appiah "
                position={{ color: "info", label: "Frontend Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;

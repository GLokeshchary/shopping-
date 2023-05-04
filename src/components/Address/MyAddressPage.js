import { Button, Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./MyAddressPage.css";
import AddIcon from "@mui/icons-material/Add";
function MyAddressPage() {
  return (
    <div className="address">
      <div className="icon">
        <ArrowBackIosIcon />
        <span>Back to My Account</span>
      </div>
      <div className="address-heading">
        <h2>My Address</h2>
      </div>
      <div className="wrapper">
        <div className="address-container">
          <div className="address-list">
            <Card sx={{ maxWidth: 380 }}>
              <CardContent>
                <span>HOME</span>
                <span>
                  <h4>Gattoji Lokesh Chary</h4>
                </span>
                <span>
                  <p>
                    15-21-178 flat no G3 balaji towers,balaji nagar kukatpally
                    MJ colony Dear Dargah
                  </p>
                </span>
                <span>Hyderabad, 500072 </span>
                <span>Contact Number: 123456789</span>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "rgb(255, 210, 50)" }}>
                  <EditIcon />
                </Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="new-address">
            <Button
              fullWidth
              disableRipple
              disableElevation
              disableFocusRipple
              disableTouchRipple
            >
              <Card sx={{ maxWidth: 380 }}>
                <CardContent>
                  <div>
                    <div className="add-icon">
                      <AddIcon />
                    </div>
                    ADD NEW ADDRESS
                  </div>
                </CardContent>
              </Card>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAddressPage;

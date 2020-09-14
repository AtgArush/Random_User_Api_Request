import React, {useState} from "react"
import {Card, CardBody, CardTitle, CardText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import {FaEnvelopeOpen, FaMapMarkedAlt, FaPhoneSquare} from "react-icons/fa"

const MyCard = ({details}) => {
    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
    return (
        <Card>
            <CardBody className="text-center">
                <img  height="150" width="150"
                className = "rounded-circle img-thumbnail border-danger"
                src = {details.picture?.large} alt = ""
                />
                <CardTitle className = "text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>

        <CardText width = "150px">
            
            <h5> <FaMapMarkedAlt /> {details.location?.city}</h5>
            <h6> <FaPhoneSquare></FaPhoneSquare> {details.phone}</h6>
        </CardText>
        <CardText>
            <h4>{details.gender} </h4>
        </CardText>
        

        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret color="success">
        Details
      </DropdownToggle>
      <DropdownMenu >
        <DropdownItem header>Age</DropdownItem>
        <DropdownItem className = "float-right"> {details.dob?.age} </DropdownItem>
        <DropdownItem divider />
        <DropdownItem></DropdownItem>
        <DropdownItem header>Birth Date</DropdownItem>
        <DropdownItem className = "float-right"> {details.dob?.date} </DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem header>Email</DropdownItem>
        <DropdownItem className = "float-right"> <FaEnvelopeOpen></FaEnvelopeOpen> {details.email} </DropdownItem>
        <DropdownItem divider />
        <DropdownItem></DropdownItem>
        <DropdownItem header>UserName</DropdownItem>
        <DropdownItem className = "float-right"> {details.login?.username} </DropdownItem>
        
        </DropdownMenu>
    </ButtonDropdown>



            </CardBody>
        </Card>
    )

}

export default MyCard;

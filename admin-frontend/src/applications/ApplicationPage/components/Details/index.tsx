import React from 'react'
import Table from 'react-bootstrap/Table'
import { GetApplication_application } from 'applications/ApplicationPage/graphql/GetApplication'

type DetailsProps = {
  application: GetApplication_application
}

function Details({ application }: DetailsProps) {
  return (
    <div className='Details'>
      <h4 className="mt-4">Application</h4>
      <Table bordered hover striped>
        <tbody>
          <tr>
            <td style={{ width: '25%' }}><b>Full Name</b></td>
            <td>{application.name}</td>
          </tr>
          <tr>
            <td><b>Age</b></td>
            <td>{application.age}</td>
          </tr>
          <tr>
            <td><b>Home Address</b></td>
            <td>{application.street}</td>
          </tr>
          <tr>
            <td><b>City</b></td>
            <td>{application.city}</td>
          </tr>
          <tr>
            <td><b>State</b></td>
            <td>{application.state}</td>
          </tr>
          <tr>
            <td><b>Zip Code</b></td>
            <td>{application.zipCode}</td>
          </tr>
          <tr>
            <td><b>How long at this location?</b></td>
            <td>{application.timeAtAddress}</td>
          </tr>
          <tr>
            <td><b>Primary Phone</b></td>
            <td>{application.phonePrimary}</td>
          </tr>
          <tr>
            <td><b>Secondary Phone</b></td>
            <td>{application.phoneSecondary}</td>
          </tr>
          <tr>
            <td><b>Email</b></td>
            <td>{application.email}</td>
          </tr>
          <tr>
            <td><b>How many people live at this house (or visit frequently such as grandchildren/stepchildren) and what are their ages?</b></td>
            <td>{application.peopleAtAddress}</td>
          </tr>
          <tr>
            <td><b>What type of home is this?</b></td>
            <td>{application.homeType}</td>
          </tr>
          <tr>
            <td><b>Do you own this home?</b></td>
            <td>{application.ownHome ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>If renting, please provide name, address, and phone number of landlord.</b></td>
            <td>{application.landlordInfo}</td>
          </tr>
          <tr>
            <td><b>Is this a smoker's home?</b></td>
            <td>{application.smoker ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>Are ferrets legal where you live?</b></td>
            <td>{application.legalToOwn ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>Have you owned ferrets before?</b></td>
            <td>{application.ownedBefore ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>If yes, please give details. When and how many? Do you still have them? If not, where are they now?</b></td>
            <td>{application.ownedDetails}</td>
          </tr>
          <tr>
            <td><b>What animals/pets do you currently own?</b></td>
            <td>{application.otherAnimals}</td>
          </tr>
          <tr>
            <td><b>Are these pets current on their vaccinations?</b></td>
            <td>{application.vaccinesCurrent ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>Please provide your veterinarian's name and address?</b></td>
            <td>{application.vetInfo}</td>
          </tr>
          <tr>
            <td><b>Have you ever surrendered a pet to a shelter?</b></td>
            <td>{application.surrendered ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>If yes, please give details. When? Why?</b></td>
            <td>{application.surrenderedDetails}</td>
          </tr>
          <tr>
            <td><b>What should a ferret eat and drink? How often? What treats are OK and not OK?</b></td>
            <td>{application.eatInfo}</td>
          </tr>
          <tr>
            <td><b>Where should a ferret be kept and why? In the house? Garage? Backyard?</b></td>
            <td>{application.keptInfo}</td>
          </tr>
          <tr>
            <td><b>What is ferret proofing and how do you do it?</b></td>
            <td>{application.proofingInfo}</td>
          </tr>
          <tr>
            <td><b>What is a good number of ferrets to have and why?</b></td>
            <td>{application.numFerretsInfo}</td>
          </tr>
          <tr>
            <td><b>When should a ferret be in a cage?</b></td>
            <td>{application.cageInfo}</td>
          </tr>
          <tr>
            <td><b>How often should a ferret be allowed out of his cage? Where should he play and with whom?</b></td>
            <td>{application.playInfo}</td>
          </tr>
          <tr>
            <td><b>What should a ferret be allowed to play with? Give examples of right toys and wrong toys?</b></td>
            <td>{application.toyInfo}</td>
          </tr>
          <tr>
            <td><b>What diseases do ferrets get and what is the treatment?</b></td>
            <td>{application.diseasesInfo}</td>
          </tr>
          <tr>
            <td><b>Can ferrets get heartworms?</b></td>
            <td>{application.heartworms ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>Is there a treatment to get rid of heartworms in ferrets?</b></td>
            <td>{application.heartwormTreat ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td><b>How do you prevent heartworms in ferrets?</b></td>
            <td>{application.heartwormPrevent}</td>
          </tr>
          <tr>
            <td><b>Under what conditions would you move to a place which would not accept ferrets? What would you do with yours?</b></td>
            <td>{application.moveInfo}</td>
          </tr>
          <tr>
            <td><b>What does FOREVER HOME mean to you?</b></td>
            <td>{application.foreverHome}</td>
          </tr>
          <tr>
            <td><b>Notes, anything else you think we need to know, or questions you may have for us:</b></td>
            <td>{application.notes}</td>
          </tr>
          <tr>
            <td><b>Are you interested in fostering ferrets?</b></td>
            <td>{application.fostering ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Details

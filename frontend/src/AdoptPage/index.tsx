import React, { useState } from 'react'
import ContentBox from 'ContentBox'
import { Alert, Button } from 'react-bootstrap'
import TextInput from './components/TextInput'
import TextField from './components/TextField'
import QuestionField from './components/QuestionField'
import SelectField from './components/SelectField'
import Checkbox from './components/Checkbox'
import { gql, useMutation } from '@apollo/client'
import { useHistory } from "react-router-dom"

export const CREATE_APPLICATION = gql`
mutation CreateApplication($age: Int! $cageInfo: String! $city: String! $diseasesInfo: String! $eatInfo: String! $email: String! $foreverHome: String! $fostering: Boolean! $heartwormPrevent: String! $heartworms: Boolean! $heartwormTreat: Boolean! $homeType: String! $keptInfo: String! $landlordInfo: String $legalToOwn: Boolean! $moveInfo: String! $name: String! $notes: String $numFerretsInfo: String! $otherAnimals: String! $ownedBefore: Boolean! $ownedDetails: String $ownHome: Boolean! $peopleAtAddress: String! $phonePrimary: String! $phoneSecondary: String $playInfo: String! $proofingInfo: String! $smoker: Boolean! $state: String! $street: String! $surrendered: Boolean! $surrenderedDetails: String $timeAtAddress: String! $toyInfo: String! $vaccinesCurrent: Boolean! $vetInfo: String! $zipCode: Int!) {
  createApplication(age: $age cageInfo: $cageInfo city: $city diseasesInfo: $diseasesInfo eatInfo: $eatInfo email: $email foreverHome: $foreverHome fostering: $fostering heartwormPrevent: $heartwormPrevent heartworms: $heartworms heartwormTreat: $heartwormTreat homeType: $homeType keptInfo: $keptInfo landlordInfo: $landlordInfo legalToOwn: $legalToOwn moveInfo: $moveInfo name: $name notes: $notes numFerretsInfo: $numFerretsInfo otherAnimals: $otherAnimals ownedBefore: $ownedBefore ownedDetails: $ownedDetails ownHome: $ownHome peopleAtAddress: $peopleAtAddress phonePrimary: $phonePrimary phoneSecondary: $phoneSecondary playInfo: $playInfo proofingInfo: $proofingInfo smoker: $smoker state: $state street: $street surrendered: $surrendered surrenderedDetails: $surrenderedDetails timeAtAddress: $timeAtAddress toyInfo: $toyInfo vaccinesCurrent: $vaccinesCurrent vetInfo: $vetInfo zipCode: $zipCode) {
    id
  }
}
`

const acceptTermsLabel = `
By selecting this box and clicking the submit button below I am confirming that 
I understand ferrets are not caged animals, they are not like hamsters and mice, 
that they must have time out of a cage daily for their well being both physically 
and mentally and that they do need human interaction with their play. I am ready 
to commit to giving the proper time and care to the ferret and I realize they 
depend completely on my schedule to determine when they will play, sleep and eat. 
Furthermore, I submit that my answers to the questions above are truthful and 
accurate to the best of my ability.
`

export function AdoptPage() {
  const [showError, setShowError] = useState(false)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [timeAtAddress, setTimeAtAddress] = useState('')
  const [phonePrimary, setPhonePrimary] = useState('')
  const [phoneSecondary, setPhoneSecondary] = useState('')
  const [email, setEmail] = useState('')
  const [peopleAtAddress, setPeopleAtAddress] = useState('')
  const [homeType, setHomeType] = useState('House')
  const [ownHome, setOwnHome] = useState<boolean>()
  const [landlordInfo, setLandlordInfo] = useState('')
  const [smoker, setSmoker] = useState<boolean>()
  const [legalToOwn, setLegalToOwn] = useState<boolean>()
  const [ownedBefore, setOwnedBefore] = useState<boolean>()
  const [ownedDetails, setOwnedDetails] = useState('')
  const [otherAnimals, setOtherAnimals] = useState('')
  const [vaccinesCurrent, setVaccinesCurrent] = useState<boolean>()
  const [vetInfo, setVetInfo] = useState('')
  const [surrendered, setSurrendered] = useState<boolean>()
  const [surrenderedDetails, setSurrenderedDetails] = useState('')
  const [eatInfo, setEatInfo] = useState('')
  const [keptInfo, setKeptInfo] = useState('')
  const [proofingInfo, setProofingInfo] = useState('')
  const [numFerretsInfo, setNumFerretsInfo] = useState('')
  const [cageInfo, setCageInfo] = useState('')
  const [playInfo, setPlayInfo] = useState('')
  const [toyInfo, setToyInfo] = useState('')
  const [diseasesInfo, setDiseasesInfo] = useState('')
  const [heartworms, setHeartworms] = useState<boolean>()
  const [heartwormTreat, setHeartwormTreat] = useState<boolean>()
  const [heartwormPrevent, setHeartwormPrevent] = useState('')
  const [moveInfo, setMoveInfo] = useState('')
  const [foreverHome, setForeverHome] = useState('')
  const [notes, setNotes] = useState('')
  const [fostering, setFostering] = useState<boolean>()
  const [acceptTerms, setAcceptTerms] = useState(false)

  let history = useHistory()
  const [createApplication, { loading }] = useMutation(CREATE_APPLICATION, {
    variables: {
      name: name,
      age: parseInt(age),
      street: street,
      city: city,
      state: state,
      zipCode: parseInt(zipCode),
      timeAtAddress: timeAtAddress,
      phonePrimary: phonePrimary,
      phoneSecondary: phoneSecondary,
      email: email,
      peopleAtAddress: peopleAtAddress,
      homeType: homeType,
      ownHome: ownHome,
      landlordInfo: landlordInfo,
      smoker: smoker,
      legalToOwn: legalToOwn,
      ownedBefore: ownedBefore,
      ownedDetails: ownedDetails,
      otherAnimals: otherAnimals,
      vaccinesCurrent: vaccinesCurrent,
      vetInfo: vetInfo,
      surrendered: surrendered,
      surrenderedDetails: surrenderedDetails,
      eatInfo: eatInfo,
      keptInfo: keptInfo,
      proofingInfo: proofingInfo,
      numFerretsInfo: numFerretsInfo,
      cageInfo: cageInfo,
      playInfo: playInfo,
      toyInfo: toyInfo,
      diseasesInfo: diseasesInfo,
      heartworms: heartworms,
      heartwormTreat: heartwormTreat,
      heartwormPrevent: heartwormPrevent,
      moveInfo: moveInfo,
      foreverHome: foreverHome,
      notes: notes,
      fostering: fostering
    },
    onCompleted: () => history.push("/"),
    onError: () => setShowError(true)
  })

  return (
    <div className="AdoptPage">
      <h3>Apply for Adoption</h3>

      <ContentBox>
        <p>
          Thank you for your interest in adopting from the Texas Ferret Lovers Rescue. By filling out this application
          you are not committing to adopt a pet, but supplying information the Texas Ferret Lovers Rescue needs to
          evaluate you as a prospective adoptor and to help find your perfect pet. You will be contacted by one of our
          volunteers to discuss your application and to tell you more about the adoption process.
        </p>

        <p>
          We are a volunteer organization. Your application should take a few days to process but may take several days 
          depending on how quickly your references return our calls and on the volunteer's schedules. If you have any 
          questions or wish to check on the status of your application please 
          email <a href={`mailto:txflrapplications@gmail.com`}>txflrapplications@gmail.com</a>.
        </p>

        <p>
          <b>We do not adopt to anyone less than 18 years of age.</b> If you are less than 18, a parent must fill out
            this form and be the responsible party.
        </p>

        <h3>Personal Information</h3>

        <TextInput label="Full Name" value={name} setValue={setName} />
        <TextInput label="Age" value={age} setValue={setAge} required={true} isInvalid={(parseInt(age) || 0) < 18} />
        <TextInput label="Home Address" value={street} setValue={setStreet} />
        <TextInput label="City" value={city} setValue={setCity} />
        <TextInput label="State" value={state} setValue={setState} />
        <TextInput label="Zip Code" value={zipCode} setValue={setZipCode} required={true} isInvalid={(parseInt(zipCode) || 0) < 9999} />
        <TextInput label="How long at this address?" value={timeAtAddress} setValue={setTimeAtAddress} />
        <TextInput label="Primary Phone" value={phonePrimary} setValue={setPhonePrimary} />
        <TextInput label="Secondary Phone" value={phoneSecondary} setValue={setPhoneSecondary} required={false} />
        <TextInput label="Email" value={email} setValue={setEmail} />
        <TextField label="How many people live at this house (or visit frequently such as grandchildren/stepchildren) and what are their ages?" value={peopleAtAddress} setValue={setPeopleAtAddress} />
        <SelectField label="What type of home is this?" value={homeType} setValue={setHomeType} possibleValues={['House', 'Apartment', 'Trailer', 'Other (explain in notes)']} />
        <QuestionField label="Do you own this home?" value={ownHome} setValue={setOwnHome} testId='own-home' />
        {ownHome === false && (
          <TextField label="Please provide name, address, and phone number of your landlord." value={landlordInfo} setValue={setLandlordInfo} />
        )}
        <QuestionField label="Is this a smoker's home?" value={smoker} setValue={setSmoker} />
        <QuestionField label="Are ferrets legal where you live?" value={legalToOwn} setValue={setLegalToOwn} />
        <QuestionField label="Have you owned ferrets before?" value={ownedBefore} setValue={setOwnedBefore} testId='owned-before' />
        {ownedBefore === true && (
          <TextField label="When and how many? Do you still have them? If not, where are they now?" value={ownedDetails} setValue={setOwnedDetails} />
        )}
        <TextField label="What animals/pets do you currently own?" value={otherAnimals} setValue={setOtherAnimals} />
        <QuestionField label="Are these pets current on their vaccinations?" value={vaccinesCurrent} setValue={setVaccinesCurrent} />
        <TextField label="Please provide your veterinarian's name and address?" value={vetInfo} setValue={setVetInfo} />
        <QuestionField label="Have you ever surrendered a pet to a shelter?" value={surrendered} setValue={setSurrendered} testId='surrendered' />
        {surrendered === true && (
          <TextField label="Please give details. When? Why?" value={surrenderedDetails} setValue={setSurrenderedDetails} />
        )}

        <h3>How much do you know about ferrets?</h3>

        <TextField label="What should a ferret eat and drink? How often? What treats are OK and not OK?" value={eatInfo} setValue={setEatInfo} />
        <TextField label="Where should a ferret be kept and why? In the house? Garage? Backyard?" value={keptInfo} setValue={setKeptInfo} />
        <TextField label="What is ferret proofing and how do you do it?" value={proofingInfo} setValue={setProofingInfo} />
        <TextField label="What is a good number of ferrets to have and why?" value={numFerretsInfo} setValue={setNumFerretsInfo} />
        <TextField label="When should a ferret be in a cage?" value={cageInfo} setValue={setCageInfo} />
        <TextField label="How often should a ferret be allowed out of his cage? Where should he play and with whom?" value={playInfo} setValue={setPlayInfo} />
        <TextField label="What should a ferret be allowed to play with? Give examples of right toys and wrong toys?" value={toyInfo} setValue={setToyInfo} />
        <TextField label="What diseases do ferrets get and what is the treatment?" value={diseasesInfo} setValue={setDiseasesInfo} />
        <QuestionField label="Can ferrets get heartworms?" value={heartworms} setValue={setHeartworms} />
        <QuestionField label="Is there a treatment to get rid of heartworms in ferrets?" value={heartwormTreat} setValue={setHeartwormTreat} />
        <TextField label="How do you prevent heartworms in ferrets?" value={heartwormPrevent} setValue={setHeartwormPrevent} />
        <TextField label="Under what conditions would you move to a place which would not accept ferrets? What would you do with yours?" value={moveInfo} setValue={setMoveInfo} />
        <TextField label="What does FOREVER HOME mean to you?" value={foreverHome} setValue={setForeverHome} />
        <TextField label="Notes, anything else you think we need to know, or questions you may have for us:" value={notes} setValue={setNotes} required={false} />

        <QuestionField label="Are you interested in fostering ferrets?" value={fostering} setValue={setFostering} />

        <Checkbox label={acceptTermsLabel} value={acceptTerms} setValue={setAcceptTerms} testId="accept-terms" />

        {showError && (
          <Alert variant="danger">
            You must fill out all required fields.
          </Alert>
        )}

        <Button
          className="btn-success"
          disabled={!acceptTerms || loading}
          onClick={() => createApplication()}
          data-testid='submit-button'
        >
          Submit
        </Button>
      </ContentBox>
    </div>
  )
}

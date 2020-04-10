import React, { useState } from 'react';
import ContentBox from 'ContentBox'
import { Form, Button } from 'react-bootstrap'

const acceptTermsLabel = `
By selecting this box and clicking the 'Submit' button below I am confirming that 
I understand ferrets are not caged animals, they are not like hamsters and mice, 
that they must have time out of a cage daily for their well being both physically 
and mentally and that they do need human interaction with their play. I am ready 
to commit to giving the proper time and care to the ferret and I realize they 
depend completely on my schedule to determine when they will play, sleep and eat. 
Furthermore, I submit that my answers to the questions above are truthful and 
accurate to the best of my ability.
`

export function AdoptPage() {
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [name, setName] = useState('')
  const [age, setAge] = useState<number>()
  const [street, setStreet] = useState('')

  const [eatInfo, setEatInfo] = useState('')

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
          Your application should only take about 5 hours to process but may take several days.
          If you have any questions or wish to check on the status of your application
          please email <a href={`mailto:txflrapplications@gmail.com`}>txflrapplications@gmail.com</a>.
        </p>

        <p>
          <b>We do not adopt to anyone less than 18 years of age.</b> If you are less than 18, a parent must fill out
            this form and be the responsible party.
        </p>

        <h3>Personal Information</h3>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            isInvalid={name.length === 0}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value || '0'))}
            isInvalid={age === undefined || age < 18}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Home Address</Form.Label>
          <Form.Control
            type="text"
            value={street}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStreet(event.target.value)}
            isInvalid={street.length === 0}
          />
        </Form.Group>

        <h3>How much do you know about ferrets?</h3>
        <Form.Group>
          <Form.Label>What should a ferret eat and drink? How often? What treats are OK and not OK?</Form.Label>
          <Form.Control 
            as="textarea" 
            rows="5"
            value={eatInfo}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEatInfo(event.target.value)} 
            isInvalid={eatInfo.length === 0}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label={acceptTermsLabel}
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
        </Form.Group>

        <Button
          className="btn-success"
          disabled={!acceptTerms}
        >
          Submit
        </Button>
      </ContentBox>
    </div>
  );
}

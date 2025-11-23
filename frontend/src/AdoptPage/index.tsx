import React from 'react'
import ContentBox from 'ContentBox'
import { Button } from 'react-bootstrap'

export function AdoptPage() {
  return (
    <div className="AdoptPage">
      <h3>Apply for Adoption</h3>

      <ContentBox>
        <p>
          <b>Adoptions are done by appointment only.</b>
        </p>

        <p>
          Thank you for your interest in adopting from the Texas Ferret Lover’s Rescue. Please click the button to begin the adoption application.
        </p>

        <p>
          Applications are NOT ferret specific. We cannot guarantee availability of ferrets that are on our website.
        </p>

        <p>
          We are a volunteer organization. Your application should only take a few days to process but may take several days
          depending on how quickly your references return our calls and on the volunteer's schedules. If you have any
          questions or wish to check on the status of your application please
          email <a href={`mailto:txflrapplications@gmail.com`}>txflrapplications@gmail.com</a>.
        </p>

        <p>
          <b>We do not adopt to anyone less than 18 years of age.</b> If you are less than 18, a parent must fill out
          this form and be the responsible party.
        </p>

        <a href="https://tinyurl.com/TXFLRApplication">
          <Button className="btn-success">Start Application</Button>
        </a>
      </ContentBox>
    </div>
  )
}

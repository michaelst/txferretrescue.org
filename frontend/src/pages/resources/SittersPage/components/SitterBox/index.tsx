import React from 'react'
import { ListSitters_sitters } from '../../graphql/ListSitters'
import ContentBox from '../../../../../ContentBox'

type SitterBoxProps = {
  sitter: ListSitters_sitters
}

function SitterBox({ sitter }: SitterBoxProps) {
  return (
    <div className="SitterBox" data-testid="SitterBox">
      <ContentBox>
        <div className="row">
          <div className="col-8">
            {sitter.name}
          </div>
          <div className="col-4 text-right">
            {sitter.phone && (
              <span><a href={`tel:${sitter.phone}`}>{sitter.phone}</a></span>
            )}
          </div>
        </div>
        <a href={`mailto:${sitter.email}`}>{sitter.email}</a>
        <div className="mt-2">
          <b>Info:</b><br />
          {sitter.notes}
        </div>
      </ContentBox>
    </div>
  )
}

export default SitterBox

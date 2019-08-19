import React from 'react'
import { Card, CardContent, CardHeader } from 'semantic-ui-react'

export default function LocationCard(props) {
  console.log('props', props)
  return (
    <Card>
      <CardContent>
        <CardHeader>{props.location.name}</CardHeader>
        <Card.Meta>Planet {props.location.dimension}</Card.Meta>
      </CardContent>
      <CardContent extra>
        {props.location.residents.length} Residents
      </CardContent>
    </Card>
  )
}

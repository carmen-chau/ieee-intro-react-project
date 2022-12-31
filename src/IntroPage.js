import React from 'react';
import { Link} from 'react-router-dom';

export default function IntroPage() {
  const name = "Carmen"
  const yearOfStudy = "1st"
  return(
      <div>
        <h3>Hey, this is "my introduction" page!</h3>
        <p>Hello, my name is {name} and I am a {yearOfStudy} year student at the University of Toronto.</p>
        <h2>Introduction Video:</h2>
        <iframe
        width = "500"
        height = "400"
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/XGOxPlV2m4w?autoplay=0`}>
        </iframe>
        <Link to="/"><h3>back</h3></Link>
      </div>
  )
}

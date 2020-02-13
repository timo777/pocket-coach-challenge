import React, { Fragment } from 'react'
import useOffers from "hooks/useOffers"

const App = () => {
     const { offers } = useOffers()
     return <Fragment>
          <table>  
          <thead>
               <tr>
                    <th>bids</th>
                    <th>dates</th>
                    <th>amounts</th>
               </tr>
          </thead> 
          <tbody>
               {offers.map(offer => Object.keys(offer).map(o => <tr key={offer[o].bid}>
                    <td>{offer[o].bid}</td>
                    <td>{offer[o].date.toString()}</td>
                    <td>{offer[o].amount}</td>
               </tr>))}
          </tbody>
          </table>
     </Fragment>} 

export default App
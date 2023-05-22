import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import Personalnfo from './Personalnfo'
function Profile() {
  return (
    <div>
        <Name name="Ali" />
        <Email email="ali.celt@bk.ru" />
        <Address adre
        s="Xirdalan" />
        <Personalnfo info="14 years old" />
    </div>
  )
}

export default Profile
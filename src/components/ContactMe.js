import React from 'react'

import { Fixed, Modal, Heading } from 'rebass'

import { withState } from 'recompose'

const withModal = withState('isModalVisible', 'toggleModal', false)

export default () => (
  <div>
    <Fixed top={0} right={0} bottom={0} left={0} />
    <Modal width={256}>
      <Heading>Hello</Heading>
    </Modal>
  </div>
)

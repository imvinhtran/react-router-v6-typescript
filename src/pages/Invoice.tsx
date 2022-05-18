import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { invoices } from '../data/invoices'

const Invoice = () => {
  const params = useParams<{ invoiceId: string }>()
  const navigate = useNavigate()

  const invoice = invoices.find(
    invoice => invoice.id.toString() === params.invoiceId
  )

  useEffect(() => {
    // Push user to /invoices, one level up
    if (!invoice) navigate('..')
  }, [invoice])

  return (
    <h2 style={{ padding: '1rem' }}>
      Invoice #{invoice?.id} for {invoice?.name}
    </h2>
  )
}

export default Invoice

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import FormProduto from '../formproduto/FormProduto'

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-slate-800">
            Novo Produto
          </button>
        }
        modal
        contentStyle={{
          background: '#111122',
          border: '1px solid rgba(0, 243, 255, 0.55)',
          borderRadius: '1rem',
          paddingBottom: '2rem',
          boxShadow:
            '0 0 20px rgba(0, 243, 255, 0.35), 0 0 45px rgba(176, 38, 255, 0.32)'
        }}
      >
        <FormProduto />
      </Popup>
    </>
  )
}

export default ModalProduto
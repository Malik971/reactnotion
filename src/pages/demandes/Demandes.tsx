function Demandes() {
  return (
    <section>
      <div className="flex bg-gray-200 justify-end items-center p-4 my-2 text-sm rounded-lg shadow-md gap-2">
        <span>Trier par</span>
        <button type="button" className="bg-blue-500 text-white px-3 py-1 rounded">
          Date
        </button>
        <button type="button" className="bg-blue-500 text-white px-3 py-1 rounded">
          Statut
        </button>
      </div>
      <div className="p-4">
        {/* Placeholder for Demandes content */}
        <p>Aucune demande à afficher pour le moment.</p>
      </div>
    </section>
  )
}

export default Demandes
// import { useState } from "react";


// import "./PerfilEmbarcacao.css"

// const PerfilEmbarcacao = () => {

//   const [usernome, setUserNome] = useState("");
//   const [usermodelo, setUserModelo] = useState("");
//   const [userano, setUserAno] = useState("");
//   const [usercapacidade, setUserCapacidade] = useState("");
//   const [useranimaispermitidos, setUserAnimaisPermitidos] = useState("");
//   const [userlocalizacao, setUserLocallizacao] = useState("");
//   const [userroteiros, setUserRoteiros] = useState("");
//   const handleSubmit = (event) => {

//     event.preventDefault();



//   };

//   return (
//     <div>

//       <div className="container-perfil-embarcacao" >
//         <div className="titulo-cadastro">
//           <h2>Seu Barco </h2>
//           <hr className="linhaHr" />
//         </div>

//         <div className="icones-embarcacao">
//           <button type="button" className="btn-icone">
//             <img
//               className="icon-svg"
//               src="./images/Drag Boat.png"
//               alt="Icone Jet-ski"
//             />
//           </button>
//           <button className="btn-icone">
//             <img
//               className="icon-svg"
//               src="./images/Yacht.png"
//               alt="Icone Iate"
//             />
//           </button>
//           <button className="btn-icone">
//             <img
//               className="icon-svg"
//               src="./images/Boat Launch.png"
//               alt="Icone Lancha"
//             />
//           </button>
//           <button className="btn-icone">
//             <img
//               className="icon-svg"
//               src="./images/Sailboat.png"
//               alt="Icone Veleiro"
//             />
//           </button>
//         </div>

//         <div className="container-embarcacao">

//           <form onSubmit={handleSubmit}>
//             <h1 className="titulo-embarcacao">Perfil Embarcação</h1>
//             <div className="form-section-embarcacao">
//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Nome"
//                   required
//                   value={usernome}
//                   onChange={(e) => setUserNome(e.target.value)}
//                 />


//               </div>
//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Modelo"
//                   required
//                   value={usermodelo}
//                   onChange={(e) => setUserModelo(e.target.value)}
//                 />

//               </div>

//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Ano"
//                   required
//                   value={userano}
//                   onChange={(e) => setUserAno(e.target.value)}
//                 />

//               </div>
//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Capacidade"
//                   required
//                   value={usercapacidade}
//                   onChange={(e) => setUserCapacidade(e.target.value)}
//                 />

//               </div>
//             </div>

//             <div className="form-section-embarcacao">

//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Animais Permitidos"
//                   required
//                   value={useranimaispermitidos}
//                   onChange={(e) => setUserAnimaisPermitidos(e.target.value)}
//                 />

//               </div>
//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Localização"
//                   required
//                   value={userlocalizacao}
//                   onChange={(e) => setUserLocallizacao(e.target.value)}
//                 />

//               </div>
//               <div className="input-embarcacao">
//                 <input
//                   type="text"
//                   placeholder="Roteiros"
//                   required
//                   value={userroteiros}
//                   onChange={(e) => setUserRoteiros(e.target.value)}
//                 />

//               </div>
//             </div>




//           </form>

//           <div>
//             <button className="btn-salvar-embarcacao">
//               Salvar
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerfilEmbarcacao;
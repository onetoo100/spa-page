import { scheduleData } from "../data/data";

const Schedule = () => {
  return (
    <section className="horario">
      <div className="horario__grid contenedor">
        <div className="horario__contenido">
          <h3 className="horario__heading">Horarios</h3>
          <p className="horario__texto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            optio, maxime, deleniti aperiam atque in praesentium suscipit autem
            minus aliquam molestias eos, adipisci vero id enim doloribus ex rem
            delectus.
          </p>

          <table className="tabla">
            <thead className="tabla__thead">
              <tr>
                <th className="tabla__th">Día</th>
                <th className="tabla__th">De</th>
                <th className="tabla__th">Hasta</th>
              </tr>
            </thead>

            {scheduleData.map((e, index) => (
              <tbody key={index} className="tabla__tbody">
                <tr>
                  <td className="tabla__td">{e.dia}</td>
                  {e.dia !== "Domingo" ? (
                    <>
                      <td className="tabla__td">{e.start}</td>
                      <td className="tabla__td">{e.end}</td>
                    </>
                  ) : (
                    <td className="tabla__td" colSpan={2}>
                      Cerrado
                    </td>
                  )}
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

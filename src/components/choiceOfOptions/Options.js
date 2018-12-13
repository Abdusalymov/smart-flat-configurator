import React from 'react';

const Options = ({getOptions, componentName})=>
    <form>
        <fieldset className="form-group">

            <h6>Управление температурным режимом:</h6>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" 
                value="option1" 
                onChange={(e)=>getOptions(e, componentName, "control_temp")} 
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Теплый пол</label>
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"
                onChange={(e)=>getOptions(e,componentName, "control_temp2")} 
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">Отопление</label>
            </div>

        </fieldset>
        <h6>Прочие опции:</h6>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" 
            onChange={(e)=>getOptions(e, componentName, "management_light")} 
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
            Управление освещением
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" 
            onChange={(e)=>getOptions(e,componentName, "management_socket")} 
            />
            <label className="form-check-label" htmlFor="defaultCheck2">
            Управление розетками
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" 
            onChange={(e)=>getOptions(e,componentName, "management_curtain")} 
            />
            <label className="form-check-label" htmlFor="defaultCheck3">
            Управление занавесками
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" 
            onChange={(e)=>getOptions(e,componentName, "control_multi")} 
            />
            <label className="form-check-label" htmlFor="defaultCheck4">
            Мониторинг температуры/движения/влажности
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" 
            onChange={(e)=>getOptions(e,componentName, "control_air")} 
                />
            <label className="form-check-label" htmlFor="defaultCheck5">
            Мониторинг качества воздуха
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck6" 
            onChange={(e)=>getOptions(e,componentName, "management_water")} 
            />
            <label className="form-check-label" htmlFor="defaultCheck6">
            Управление водой(перекрытие  в  лучае аварии)
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck7" 
            onChange={(e)=>getOptions(e,componentName, "control_water")} 
            />
            <label className="form-check-label" htmlFor="defaultCheck7">
            Контроль протечки
            </label>
        </div>
        
    </form>
  


export default Options;  
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Alert from './Alert';
import './InscricaoModal.css';

interface InscricaoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InscricaoModal: React.FC<InscricaoModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        codigoPais: '+351',
        telefone: '',
        numeroParticipantes: '',
        modalidade: 'presencial'
    });

    const [alert, setAlert] = useState<{
        show: boolean;
        type: 'success' | 'error';
        message: string;
    }>({
        show: false,
        type: 'success',
        message: ''
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Aqui você pode adicionar a lógica para enviar os dados para o servidor
            // Por enquanto, vamos simular um envio bem-sucedido
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setAlert({
                show: true,
                type: 'success',
                message: 'Inscrição realizada com sucesso!'
            });
            
            // Fechar o modal após 1 segundo
            setTimeout(() => {
                onClose();
            }, 1000);
        } catch (error) {
            setAlert({
                show: true,
                type: 'error',
                message: 'Erro ao realizar inscrição. Por favor, tente novamente.'
            });
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleCloseAlert = () => {
        setAlert(prev => ({ ...prev, show: false }));
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={handleOverlayClick}>
                <div className="modal-content">
                    <button className="close-modal" onClick={onClose}>
                        <FaTimes />
                    </button>
                    
                    <div className="modal-grid">
                        <div className="info-section">
                            <h2>INSCREVA-SE</h2>
                            <p>Valor da inscrição: 75€</p>
                            <p>O pagamento será realizado após a confirmação da inscrição.</p>
                        </div>
                        
                        <div className="form-section">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="sobrenome">Sobrenome</label>
                                    <input
                                        type="text"
                                        id="sobrenome"
                                        name="sobrenome"
                                        value={formData.sobrenome}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="codigoPais">Código do País</label>
                                    <select
                                        id="codigoPais"
                                        name="codigoPais"
                                        value={formData.codigoPais}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="+93">AF +93</option> {/* Afghanistan */}
                                        <option value="+355">AL +355</option> {/* Albania */}
                                        <option value="+213">DZ +213</option> {/* Algeria */}
                                        <option value="+376">AD +376</option> {/* Andorra */}
                                        <option value="+244">AO +244</option> {/* Angola */}
                                        <option value="+54">AR +54</option> {/* Argentina */}
                                        <option value="+374">AM +374</option> {/* Armenia */}
                                        <option value="+61">AU +61</option> {/* Australia */}
                                        <option value="+43">AT +43</option> {/* Austria */}
                                        <option value="+994">AZ +994</option> {/* Azerbaijan */}
                                        <option value="+973">BH +973</option> {/* Bahrain */}
                                        <option value="+880">BD +880</option> {/* Bangladesh */}
                                        <option value="+375">BY +375</option> {/* Belarus */}
                                        <option value="+32">BE +32</option> {/* Belgium */}
                                        <option value="+501">BZ +501</option> {/* Belize */}
                                        <option value="+229">BJ +229</option> {/* Benin */}
                                        <option value="+975">BT +975</option> {/* Bhutan */}
                                        <option value="+591">BO +591</option> {/* Bolivia */}
                                        <option value="+387">BA +387</option> {/* Bosnia and Herzegovina */}
                                        <option value="+267">BW +267</option> {/* Botswana */}
                                        <option value="+55">BR +55</option> {/* Brazil */}
                                        <option value="+673">BN +673</option> {/* Brunei */}
                                        <option value="+359">BG +359</option> {/* Bulgaria */}
                                        <option value="+226">BF +226</option> {/* Burkina Faso */}
                                        <option value="+257">BI +257</option> {/* Burundi */}
                                        <option value="+855">KH +855</option> {/* Cambodia */}
                                        <option value="+237">CM +237</option> {/* Cameroon */}
                                        <option value="+1">CA +1</option> {/* Canada */}
                                        <option value="+238">CV +238</option> {/* Cape Verde */}
                                        <option value="+236">CF +236</option> {/* Central African Republic */}
                                        <option value="+235">TD +235</option> {/* Chad */}
                                        <option value="+56">CL +56</option> {/* Chile */}
                                        <option value="+86">CN +86</option> {/* China */}
                                        <option value="+57">CO +57</option> {/* Colombia */}
                                        <option value="+269">KM +269</option> {/* Comoros */}
                                        <option value="+242">CG +242</option> {/* Congo */}
                                        <option value="+243">CD +243</option> {/* Congo, Dem. Rep. */}
                                        <option value="+506">CR +506</option> {/* Costa Rica */}
                                        <option value="+225">CI +225</option> {/* Côte d'Ivoire */}
                                        <option value="+385">HR +385</option> {/* Croatia */}
                                        <option value="+53">CU +53</option> {/* Cuba */}
                                        <option value="+357">CY +357</option> {/* Cyprus */}
                                        <option value="+420">CZ +420</option> {/* Czech Republic */}
                                        <option value="+45">DK +45</option> {/* Denmark */}
                                        <option value="+253">DJ +253</option> {/* Djibouti */}
                                        <option value="+1 767">DM +1 767</option> {/* Dominica */}
                                        <option value="+1 809">DO +1 809</option> {/* Dominican Republic */}
                                        <option value="+593">EC +593</option> {/* Ecuador */}
                                        <option value="+20">EG +20</option> {/* Egypt */}
                                        <option value="+503">SV +503</option> {/* El Salvador */}
                                        <option value="+240">GQ +240</option> {/* Equatorial Guinea */}
                                        <option value="+291">ER +291</option> {/* Eritrea */}
                                        <option value="+372">EE +372</option> {/* Estonia */}
                                        <option value="+251">ET +251</option> {/* Ethiopia */}
                                        <option value="+679">FJ +679</option> {/* Fiji */}
                                        <option value="+358">FI +358</option> {/* Finland */}
                                        <option value="+33">FR +33</option> {/* France */}
                                        <option value="+241">GA +241</option> {/* Gabon */}
                                        <option value="+220">GM +220</option> {/* Gambia */}
                                        <option value="+995">GE +995</option> {/* Georgia */}
                                        <option value="+233">GH +233</option> {/* Ghana */}
                                        <option value="+30">GR +30</option> {/* Greece */}
                                        <option value="+299">GL +299</option> {/* Greenland */}
                                        <option value="+502">GT +502</option> {/* Guatemala */}
                                        <option value="+224">GN +224</option> {/* Guinea */}
                                        <option value="+245">GW +245</option> {/* Guinea-Bissau */}
                                        <option value="+592">GY +592</option> {/* Guyana */}
                                        <option value="+509">HT +509</option> {/* Haiti */}
                                        <option value="+504">HN +504</option> {/* Honduras */}
                                        <option value="+852">HK +852</option> {/* Hong Kong SAR China */}
                                        <option value="+36">HU +36</option> {/* Hungary */}
                                        <option value="+354">IS +354</option> {/* Iceland */}
                                        <option value="+91">IN +91</option> {/* India */}
                                        <option value="+62">ID +62</option> {/* Indonesia */}
                                        <option value="+98">IR +98</option> {/* Iran */}
                                        <option value="+964">IQ +964</option> {/* Iraq */}
                                        <option value="+353">IE +353</option> {/* Ireland */}
                                        <option value="+44">UK +44</option> {/* United Kingdom */}
                                        <option value="+972">IL +972</option> {/* Israel */}
                                        <option value="+39">IT +39</option> {/* Italy */}
                                        <option value="+225">CI +225</option> {/* Ivory Coast */}
                                        <option value="+1 876">JM +1 876</option> {/* Jamaica */}
                                        <option value="+81">JP +81</option> {/* Japan */}
                                        <option value="+962">JO +962</option> {/* Jordan */}
                                        <option value="+7">KZ +7</option> {/* Kazakhstan */}
                                        <option value="+254">KE +254</option> {/* Kenya */}
                                        <option value="+686">KI +686</option> {/* Kiribati */}
                                        <option value="+965">KW +965</option> {/* Kuwait */}
                                        <option value="+996">KG +996</option> {/* Kyrgyzstan */}
                                        <option value="+856">LA +856</option> {/* Laos */}
                                        <option value="+371">LV +371</option> {/* Latvia */}
                                        <option value="+961">LB +961</option> {/* Lebanon */}
                                        <option value="+266">LS +266</option> {/* Lesotho */}
                                        <option value="+231">LR +231</option> {/* Liberia */}
                                        <option value="+218">LY +218</option> {/* Libya */}
                                        <option value="+423">LI +423</option> {/* Liechtenstein */}
                                        <option value="+370">LT +370</option> {/* Lithuania */}
                                        <option value="+352">LU +352</option> {/* Luxembourg */}
                                        <option value="+853">MO +853</option> {/* Macau SAR China */}
                                        <option value="+389">MK +389</option> {/* Macedonia */}
                                        <option value="+261">MG +261</option> {/* Madagascar */}
                                        <option value="+265">MW +265</option> {/* Malawi */}
                                        <option value="+60">MY +60</option> {/* Malaysia */}
                                        <option value="+960">MV +960</option> {/* Maldives */}
                                        <option value="+223">ML +223</option> {/* Mali */}
                                        <option value="+356">MT +356</option> {/* Malta */}
                                        <option value="+692">MH +692</option> {/* Marshall Islands */}
                                        <option value="+222">MR +222</option> {/* Mauritania */}
                                        <option value="+230">MU +230</option> {/* Mauritius */}
                                        <option value="+52">MX +52</option> {/* Mexico */}
                                        <option value="+691">FM +691</option> {/* Micronesia */}
                                        <option value="+373">MD +373</option> {/* Moldova */}
                                        <option value="+377">MC +377</option> {/* Monaco */}
                                        <option value="+976">MN +976</option> {/* Mongolia */}
                                        <option value="+382">ME +382</option> {/* Montenegro */}
                                        <option value="+212">MA +212</option> {/* Morocco */}
                                        <option value="+258">MZ +258</option> {/* Mozambique */}
                                        <option value="+264">NA +264</option> {/* Namibia */}
                                        <option value="+674">NR +674</option> {/* Nauru */}
                                        <option value="+977">NP +977</option> {/* Nepal */}
                                        <option value="+31">NL +31</option> {/* Netherlands */}
                                        <option value="+687">NC +687</option> {/* New Caledonia */}
                                        <option value="+64">NZ +64</option> {/* New Zealand */}
                                        <option value="+505">NI +505</option> {/* Nicaragua */}
                                        <option value="+227">NE +227</option> {/* Niger */}
                                        <option value="+234">NG +234</option> {/* Nigeria */}
                                        <option value="+683">NU +683</option> {/* Niue */}
                                        <option value="+850">KP +850</option> {/* North Korea */}
                                        <option value="+47">NO +47</option> {/* Norway */}
                                        <option value="+968">OM +968</option> {/* Oman */}
                                        <option value="+92">PK +92</option> {/* Pakistan */}
                                        <option value="+680">PW +680</option> {/* Palau */}
                                        <option value="+970">PS +970</option> {/* Palestine */}
                                        <option value="+507">PA +507</option> {/* Panama */}
                                        <option value="+675">PG +675</option> {/* Papua New Guinea */}
                                        <option value="+595">PY +595</option> {/* Paraguay */}
                                        <option value="+51">PE +51</option> {/* Peru */}
                                        <option value="+63">PH +63</option> {/* Philippines */}
                                        <option value="+48">PL +48</option> {/* Poland */}
                                        <option value="+351">PT +351</option> {/* Portugal */}
                                        <option value="+1 787">PR +1 787</option> {/* Puerto Rico */}
                                        <option value="+974">QA +974</option> {/* Qatar */}
                                        <option value="+40">RO +40</option> {/* Romania */}
                                        <option value="+7">RU +7</option> {/* Russia */}
                                        <option value="+250">RW +250</option> {/* Rwanda */}
                                        <option value="+685">WS +685</option> {/* Samoa */}
                                        <option value="+378">SM +378</option> {/* San Marino */}
                                        <option value="+239">ST +239</option> {/* São Tomé and Príncipe */}
                                        <option value="+966">SA +966</option> {/* Saudi Arabia */}
                                        <option value="+221">SN +221</option> {/* Senegal */}
                                        <option value="+381">RS +381</option> {/* Serbia */}
                                        <option value="+248">SC +248</option> {/* Seychelles */}
                                        <option value="+232">SL +232</option> {/* Sierra Leone */}
                                        <option value="+65">SG +65</option> {/* Singapore */}
                                        <option value="+421">SK +421</option> {/* Slovakia */}
                                        <option value="+386">SI +386</option> {/* Slovenia */}
                                        <option value="+677">SB +677</option> {/* Solomon Islands */}
                                        <option value="+252">SO +252</option> {/* Somalia */}
                                        <option value="+27">ZA +27</option> {/* South Africa */}
                                        <option value="+82">KR +82</option> {/* South Korea */}
                                        <option value="+34">ES +34</option> {/* Spain */}
                                        <option value="+94">LK +94</option> {/* Sri Lanka */}
                                        <option value="+249">SD +249</option> {/* Sudan */}
                                        <option value="+597">SR +597</option> {/* Suriname */}
                                        <option value="+268">SZ +268</option> {/* Swaziland */}
                                        <option value="+46">SE +46</option> {/* Sweden */}
                                        <option value="+41">CH +41</option> {/* Switzerland */}
                                        <option value="+963">SY +963</option> {/* Syria */}
                                        <option value="+886">TW +886</option> {/* Taiwan */}
                                        <option value="+992">TJ +992</option> {/* Tajikistan */}
                                        <option value="+255">TZ +255</option> {/* Tanzania */}
                                        <option value="+66">TH +66</option> {/* Thailand */}
                                        <option value="+228">TG +228</option> {/* Togo */}
                                        <option value="+690">TK +690</option> {/* Tokelau */}
                                        <option value="+676">TO +676</option> {/* Tonga */}
                                        <option value="+1 868">TT +1 868</option> {/* Trinidad and Tobago */}
                                        <option value="+216">TN +216</option> {/* Tunisia */}
                                        <option value="+90">TR +90</option> {/* Turkey */}
                                        <option value="+993">TM +993</option> {/* Turkmenistan */}
                                        <option value="+688">TV +688</option> {/* Tuvalu */}
                                        <option value="+256">UG +256</option> {/* Uganda */}
                                        <option value="+380">UA +380</option> {/* Ukraine */}
                                        <option value="+971">AE +971</option> {/* United Arab Emirates */}
                                        <option value="+44">UK +44</option> {/* United Kingdom */}
                                        <option value="+1">US +1</option> {/* United States */}
                                        <option value="+598">UY +598</option> {/* Uruguay */}
                                        <option value="+998">UZ +998</option> {/* Uzbekistan */}
                                        <option value="+678">VU +678</option> {/* Vanuatu */}
                                        <option value="+379">VA +379</option> {/* Vatican City */}
                                        <option value="+58">VE +58</option> {/* Venezuela */}
                                        <option value="+84">VN +84</option> {/* Vietnam */}
                                        <option value="+967">YE +967</option> {/* Yemen */}
                                        <option value="+260">ZM +260</option> {/* Zambia */}
                                        <option value="+263">ZW +263</option> {/* Zimbabwe */}
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="numeroParticipantes">Número de Participantes</label>
                                    <input
                                        type="number"
                                        id="numeroParticipantes"
                                        name="numeroParticipantes"
                                        value={formData.numeroParticipantes}
                                        onChange={handleChange}
                                        min="1"
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="modalidade">Modalidade</label>
                                    <select
                                        id="modalidade"
                                        name="modalidade"
                                        value={formData.modalidade}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="presencial">Presencial</option>
                                        <option value="online">Online</option>
                                    </select>
                                </div>
                            
                                <button type="submit" className="submit-btn">
                                    Enviar Inscrição
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {alert.show && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={handleCloseAlert}
                />
            )}
        </>
    );
};

export default InscricaoModal; 
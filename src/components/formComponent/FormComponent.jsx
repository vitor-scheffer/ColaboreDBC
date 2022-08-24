import { Formik, Field, Form } from "formik";
import { Errors } from "../../pages/register/Register.Styled";
import { Button } from "../button/Button";
import { ContainerAddCampaign, ContainerForm, ListTagsStyle, RegisterCampaign, TestTags } from "./FormComponent.Styled";
import { Card } from "../card/Card"
import { useContext, useEffect, useState } from "react";
import { CampaignContext } from "../../context/CampaignContext";
import Dropzone from 'react-dropzone'
import { apiColabore } from "../../services/api";
import { useParams } from "react-router-dom";
import CurrencyInput from "../currencyInput/CurrencyInput";
import moment from 'moment'
import { CampaignSchema } from '../../utils/Schemas'

const FormComponent = () => {
  const { handleCreateCampaign, handleUpdateCampaign, handleDeleteCampaign } = useContext(CampaignContext)
  const [image, setImage] = useState();
  const [tags, setTags] = useState([]);
  const { idCampanha } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [campanha, setCampanha] = useState();
  const [showTag, setShowTag] = useState(false);
  const [searchTag, setSearchTag] = useState([]);
  const [listTagsDB, setListTagsDB] = useState([]);
  const [invalidDate, setInvalidDate] = useState(false);

  const setup = async () => {
    if (idCampanha) {
      setIsUpdate(true)
      try {
        const { data } = await apiColabore.get(`/campanha/campanhaPeloId?idCampanha=${idCampanha}`)
        setImage(data.fotoCampanha)
        setTags(data.tags)
        setCampanha(data)
      } catch (error) {
        console.log(error)
      }
    }
    await listTags()
  }

  useEffect(() => {
    setup()
  }, [])

  function handleKeyDown(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    setSearchTag('')
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }

  const handleShowTags = (nameTag) => {
    if (nameTag) {
      setTags([...tags, nameTag]);
    }
    setSearchTag('')

    showTag ? setShowTag(false) : setShowTag(true)

  }

  const listTags = async () => {
    try {
      const { data } = await apiColabore.get('/tag')

      const listTagsFormated = data.map((tag) => tag.nomeTag)

      setListTagsDB(listTagsFormated)

    } catch (error) {
      console.log(error)
    }
  }

  const filteredTags = (searchTag.length > 0 && listTagsDB.length > 0) ? listTagsDB.filter(tag => tag.includes(searchTag)) : listTagsDB

  const validDate = (e) => {
    const dataLimite = moment(e.target.value, 'YYYY-MM-DD').format('MM/DD/YYYY')
    const formatteddataLimite = new Date(dataLimite)
    const currentDate = new Date()
    formatteddataLimite < currentDate ? setInvalidDate(true) : setInvalidDate(false)
  }

  if ((isUpdate && campanha) || !isUpdate) {
    return (
      <ContainerForm>
        <Card padding="2rem" >
          <ContainerAddCampaign>
            <h2>{!isUpdate ? 'Cadastrar nova campanha' : 'Atualizar campanha'}</h2>
            <Formik
              initialValues={{
                titulo: isUpdate ? campanha.titulo : '',
                meta: isUpdate ? campanha.meta : '',
                descricao: isUpdate ? campanha.descricao : '',
                encerrarAutomaticamente: isUpdate ? campanha.encerrarAutomaticamente : '',
                dataLimite: isUpdate ? moment(campanha.dataLimite, 'YYYY-MM-DD').format('YYYY-MM-DD') : '',
                foto: '',
              }}
              validationSchema={CampaignSchema}
              onSubmit={(values) => {
                !isUpdate ? handleCreateCampaign(values, image, tags) : handleUpdateCampaign(values, image, tags, idCampanha)
              }}
            >
              {({ errors, touched, props }) => (
                <Form>
                  <RegisterCampaign>
                    <div>
                      <div>
                        <label htmlFor="titulo">Título da campanha*</label>
                        <Field id='titulo' name='titulo' placeholder='Digite o título da campanha' />
                        {errors.titulo && touched.titulo ? (<Errors id='erro-titulo'>{errors.titulo}</Errors>) : null}
                      </div>
                      <div>
                        <label htmlFor="meta">Quantidade a ser arrecadada*</label>
                        <Field
                          name="meta"
                          render={({ field }) => (
                            <CurrencyInput
                              {...field}
                              id="meta"
                              placeholder="R$ 0,00"
                            />
                          )}
                        />
                        {errors.meta && touched.meta ? (<Errors id='erro-meta'>{errors.meta}</Errors>) : null}
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="encerrarAutomaticamente">Ao atingir a meta, deseja concluir automaticamente a campanha?*</label>
                        <Field id='select' component='select' name='encerrarAutomaticamente' >
                          <option value={null}>Escolha uma opção</option>
                          <option value={true}>Sim</option>
                          <option value={false}>Não</option>
                        </Field>
                        {errors.encerrarAutomaticamente && touched.encerrarAutomaticamente ? (<Errors id='erro-select'>{errors.encerrarAutomaticamente}</Errors>) : null}
                      </div>
                      <div>
                        <label htmlFor="dataLimite">Selecione a data limite do projeto*</label>
                        <Field id='dataLimite' type='date' name='dataLimite' onKeyUp={(e) => validDate(e)}></Field>
                        {(errors.dataLimite || invalidDate) && touched.dataLimite ? (<Errors id='erro-dataLimite'>{invalidDate ? 'Digite uma data válida' : errors.dataLimite}</Errors>) : null}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="tags">Digite as tags que mais se encaixam no projeto*</label>
                      <ListTagsStyle>
                        <Field
                          id='tags'
                          name='tags'
                          placeholder='Digite as tags da campanha'
                          value={searchTag}
                          onChange={(e) => setSearchTag(e.target.value)}
                          onClick={() => handleShowTags()}
                          onKeyDown={handleKeyDown}
                          autoComplete="off" />
                        <ul className={showTag ? 'active' : ''}>

                          {(showTag || searchTag.length > 0) && filteredTags && filteredTags.map((tag, index) => (
                            <li key={index}>
                              <span onClick={() => handleShowTags(tag)}>{tag}</span>
                            </li>
                          ))}

                        </ul>
                        <div>
                          {tags.map((tag, index) => (
                            <div key={index}>
                              <span>{tag} <span onClick={() => removeTag(index)}>&times;</span></span>
                            </div>
                          ))}
                        </div>
                      </ListTagsStyle>
                      {tags.length < 1 && touched.tags ? (<Errors id='erro-tags'>Campo obrigatório!</Errors>) : null}
                    </div>
                    <div>
                      <label htmlFor="descricao">Descrição*</label>
                      <Field as='textarea' id='descricao' name='descricao' placeholder='Digite a descrição da campanha' />
                      {errors.descricao && touched.descricao ? (<Errors id='erro-descricao'>{errors.descricao}</Errors>) : null}
                    </div>
                    <div>
                      <label htmlFor="foto">Foto</label>
                      <Dropzone onDrop={acceptedFiles => setImage(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                          <section>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              {image ? <img src={(isUpdate && typeof image === 'string') ? image : URL.createObjectURL(image[0])} alt="" /> : <p>Arraste arquivos até aqui, ou clique para buscar.</p>}
                            </div>
                          </section>
                        )}
                      </Dropzone>
                    </div>
                    <Button
                      type='submit'
                      width="100%"
                      disabled={errors.titulo || errors.meta || errors.encerrarAutomaticamente || errors.descricao || tags.length === 0 || invalidDate}>{!isUpdate ? 'Cadastrar campanha' : 'Atualizar campanha'}</Button>
                    {!isUpdate ? null :
                      <Button width='100%' type="button" onClick={() => handleDeleteCampaign(idCampanha)}>Excluir</Button>
                    }
                  </RegisterCampaign>
                </Form>
              )}
            </Formik>
            <div>
              <Button onClick={() => window.history.go(-1)}>Voltar</Button>
            </div>
          </ContainerAddCampaign>
        </Card>
      </ContainerForm>
    )
  }
}

export default FormComponent
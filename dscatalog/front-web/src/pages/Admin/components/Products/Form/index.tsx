import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import { makePrivateRequest } from 'core/utils/request';
import { useHistory } from 'react-router-dom';
import './styles.scss';

type FormState = {
  name: string;
  price: string;
  imgUrl: string;
  description: string;
};

const Form = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();
  const history = useHistory();

  const onSubmit = (data: FormState) => {
    makePrivateRequest({ url: '/products', method: 'POST', data })
      .then(() => {
        toast.info('Produto salvo com sucesso!');
        history.push('/admin/products');
      })
      .catch(() => {
        toast.error('Erro ao salvar produto!');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title="CADASTRAR UM PRODUTO">
        <div className="row">
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 5,
                    message: 'O campo deve ter no mínimo 5 caracteres',
                  },
                  maxLength: {
                    value: 60,
                    message: 'O campo deve ter no máximo 60 caracteres',
                  },
                })}
                type="text"
                name="name"
                className="form-control input-base"
                placeholder="Nome do Produto"
              />
              {errors.name && (
                <div className="invalid-feedback d-block">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="input-bt30">
              <input
                ref={register({ required: 'Campo obrigatório' })}
                type="number"
                name="price"
                className="form-control input-base"
                placeholder="Preço"
              />
              {errors.price && (
                <div className="invalid-feedback d-block">
                  {errors.price.message}
                </div>
              )}
            </div>
            <div className="input-bt30">
              <input
                ref={register({ required: 'Campo obrigatório' })}
                type="text"
                name="imgUrl"
                className="form-control input-base"
                placeholder="Url Imagem"
              />
              {errors.imgUrl && (
                <div className="invalid-feedback d-block">
                  {errors.imgUrl.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <textarea
              ref={register({ required: 'Campo obrigatório' })}
              name="description"
              className="form-control input-base"
              placeholder="Descrição"
              cols={30}
              rows={10}
            />
            {errors.description && (
              <div className="invalid-feedback d-block">
                {errors.description.message}
              </div>
            )}
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;

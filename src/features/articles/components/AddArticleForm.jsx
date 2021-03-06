import React, { useState, } from 'react';
import Proptypes from 'prop-types';
import {
  Input,
  Button,
  Tag,
  Typography,
  Row,
  Col,
} from 'antd';

const {
  TextArea,
} = Input;

const {
  Text,
  Title,
} = Typography;

const AddArticleForm = ({
  onSubmitForm,
  onCancelForm,
}) => {
  const [
    articleTitle,
    setArticleTitle,
  ] = useState('');
  const [
    articleDescription,
    setArticleDescription,
  ] = useState('');
  const [
    articleImageUrl,
    setArticleImageUrl,
  ] = useState('');
  const [
    articleKeywords,
    setArticleKeywords,
  ] = useState([]);
  const [
    showAddKeyword,
    setShowAddKeyword,
  ] = useState(false);
  const [
    newKeyword,
    setNewKeyword,
  ] = useState('');
  const [
    newKeywordError,
    setNewKeywordError,
  ] = useState('');
  const articleFormTitle = 'Ajout d\'un artice';

  console.log('articleTitle : ', articleTitle);

  return (
    <form>
      <Title
        level={2}
      >
        {articleFormTitle}
      </Title>
      <Row
        gutter={[
          10,
          10,
        ]}
      >
        <Col span={12}>
          <Input
            placeholder="Titre de l'article"
            value={articleTitle}
            onChange={(event) => setArticleTitle(event?.target?.value)}
          />
        </Col>
      </Row>
      <Row
        gutter={[
          10,
          10,
        ]}
      >
        <Col span={12}>
          <TextArea
            placeholder="Description de l'article"
            value={articleDescription}
            onChange={(event) => setArticleDescription(event?.target?.value)}
          />
        </Col>
      </Row>
      <Row
        gutter={[
          10,
          10,
        ]}
      >
        <Col span={12}>
          <Input
            placeholder="Lien de l'image"
            value={articleImageUrl}
            onChange={(event) => setArticleImageUrl(event?.target?.value)}
          />
        </Col>
      </Row>
      <Row
        gutter={[
          10,
          10,
        ]}
      >
        <Col span={12}>
          <Button
            onClick={() => {
              setShowAddKeyword(true);
              setNewKeyword(null);
            }}
          >
            Ajouter un nouveau mot cl??
          </Button>
        </Col>
        <Col span={12}>
          {showAddKeyword && (
            <>
              <Input
                placeholder="Saisir le mot cl?? ?? ajouter"
                value={newKeyword}
                onChange={(event) => setNewKeyword(event?.target?.value)}
              />
              {newKeywordError && (
                <Text type="danger">
                  {newKeywordError}
                </Text>
              )}
              <Button
                onClick={() => {
                  if (newKeyword
                    && newKeyword.length
                    && !articleKeywords?.includes(newKeyword)) {
                    setArticleKeywords([
                      ...articleKeywords || [],
                      newKeyword,
                    ]);
                    setShowAddKeyword(false);
                    setNewKeywordError(null);
                  } else if (!newKeyword || !newKeyword.length) {
                    setNewKeywordError('Le mot cl?? ne peut pas ??tre vide');
                  } else {
                    setNewKeywordError('Mot de cl?? d??j?? existant');
                  }
                }}
              >
                Ajouter
              </Button>
            </>
          )}
        </Col>
        <Col span={12}>
          {articleKeywords?.map((tag, index) => (
            <Tag
              key={tag}
              closable={index !== 0}
              onClose={() => setArticleKeywords(articleKeywords.filter((item) => item !== tag))}
            >
              {tag}
            </Tag>
          ))}
        </Col>
      </Row>
      <Row
        gutter={[
          10,
          10,
        ]}
      >
        <Col span={12}>
          <Button
            type="primary"
            block
            onClick={() => {
              if (!newKeywordError) {
                onSubmitForm({
                  articleTitle,
                  articleDescription,
                  articleImageUrl,
                  articleKeywords,
                });
              }
            }}
          >
            Valider
          </Button>
          <Button
            type="default"
            block
            onClick={onCancelForm}
          >
            Annuler
          </Button>
        </Col>
      </Row>
    </form>
  );
};

AddArticleForm.propTypes = {
  onSubmitForm: Proptypes.func,
  onCancelForm: Proptypes.func,
};

AddArticleForm.defaultProps = {
  onSubmitForm: null,
  onCancelForm: null,
};

export default AddArticleForm;

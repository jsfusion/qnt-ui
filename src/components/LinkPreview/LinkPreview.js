/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import cx from 'classnames';
import { StyledLinkPreview } from './styles/LinkPreview.styles';
import { appPrefix } from '../../settings';
import Spinner from '../Spinner';
import { Icon } from '@blueprintjs/core';

const LinkPreview = React.forwardRef(
  (
    {
      className: customClassName,
      id,
      url,
      previewNotFoundText,
      isFullWidth = false,
      ...rest
    },
    ref,
  ) => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    const className = cx({
      [`${appPrefix}-linkpreview`]: true,
      [`${appPrefix}-linkpreview--loading`]: loading,
      [`${appPrefix}-linkpreview--no-preview`]:
        !image && !title && !description,
      [customClassName]: !!customClassName,
    });

    useEffect(() => {
      getLinkPreview(url);
    }, []);

    const fetchMetas = (data) => {
      let doc = document.implementation.createHTMLDocument('');
      doc.open();
      doc.write(data);
      doc.close();

      return doc;
    };

    const getWebsiteInfo = (data) => {
      const doc = fetchMetas(data);
      const metas = doc.getElementsByTagName('meta');
      const info = {};

      for (let i = 0; i < metas.length; i++) {
        info[metas[i].getAttribute('property')] = metas[i].getAttribute(
          'content',
        );
      }

      return info;
    };

    const getLinkPreview = async (url) => {
      setLoading(true);

      await fetch(url)
        .then(async (response) => {
          const htmlData = await response.text();
          const info = getWebsiteInfo(htmlData);

          setImage(info['og:image']);
          setTitle(info['og:title']);
          setDescription(info['og:description']);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };

    return (
      <ThemeProvider theme={{}}>
        <StyledLinkPreview
          id={id}
          ref={ref}
          className={className}
          href={url}
          target="_blank"
          isFullWidth={isFullWidth}
          {...rest}
        >
          {loading ? (
            <Spinner size={30}/>
          ) : !image && !title && !description ? (
            previewNotFoundText ? (
              previewNotFoundText
            ) : (
              url ? <>
                <span className={`${appPrefix}-linkpreview__link`}>
                  <Icon icon="link" />&nbsp;&nbsp;{url}
                </span>
              </> : 'URL is required'
            )
          ) : (
            <>
              <div className={`${appPrefix}-linkpreview__image`}>
                <img src={image} width="100" height="100" alt="" />
              </div>
              <div className={`${appPrefix}-linkpreview--info__wrapper`}>
                <span className={`${appPrefix}-linkpreview__title`}>
                  {title}
                </span>
                <span className={`${appPrefix}-linkpreview__description`}>
                  {description}
                </span>
              </div>
            </>
          )}
        </StyledLinkPreview>
      </ThemeProvider>
    );
  },
);

LinkPreview.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string.isRequired,
  previewNotFoundText: PropTypes.string,
  isFullWidth: PropTypes.bool,
};

export default LinkPreview;

import CheckmarkOutlineSvg from '../../icons/checkmark-outline/checkmark-outline.svg';
import ExclamationOutlineSvg from '../../icons/exclamation-outline/exclamation-outline.svg';
import React from 'react';
import {
  MessageContainer,
  IconContainer,
  MessageTitle,
  MessageContent
} from './response-message.styles';

type ResponseMessageProps = {
  title: string;
  content: string;
  type: string;
};

const ResponseMessage = ({ title, content, type }: ResponseMessageProps) => {
  let color = 'text-green-600';
  let icon = <CheckmarkOutlineSvg className="text-green-600 fill-current" />;
  switch (type) {
    case 'success':
      color = 'text-green-600';
      icon = <CheckmarkOutlineSvg className="text-green-600 fill-current" />;
      break;
    case 'info':
      color = 'text-orange-600';
      icon = <ExclamationOutlineSvg className="text-orange-600 fill-current" />;
  }

  return (
    <MessageContainer>
      <IconContainer>{icon}</IconContainer>
      <MessageTitle className={`${color}`}>{title}</MessageTitle>
      <MessageContent>{content}</MessageContent>
    </MessageContainer>
  );
};

export default ResponseMessage;

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageQuestionOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageQuestionOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageQuestionOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageQuestionOutline: MessageQuestionOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageQuestionOutlineSvg}></AntdIcon>;
};

MessageQuestionOutline.displayName = 'MessageQuestionOutline';
MessageQuestionOutline.inheritAttrs = false;
export default MessageQuestionOutline;
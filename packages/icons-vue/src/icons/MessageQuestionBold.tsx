// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageQuestionBoldSvg from '@ant-design/icons-svg/lib/asn/MessageQuestionBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageQuestionBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageQuestionBold: MessageQuestionBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageQuestionBoldSvg}></AntdIcon>;
};

MessageQuestionBold.displayName = 'MessageQuestionBold';
MessageQuestionBold.inheritAttrs = false;
export default MessageQuestionBold;
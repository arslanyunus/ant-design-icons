// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageQuestionTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageQuestionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageQuestionTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageQuestionTwoTone: MessageQuestionTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageQuestionTwoToneSvg}></AntdIcon>;
};

MessageQuestionTwoTone.displayName = 'MessageQuestionTwoTone';
MessageQuestionTwoTone.inheritAttrs = false;
export default MessageQuestionTwoTone;
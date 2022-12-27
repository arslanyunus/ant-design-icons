// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageQuestionBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageQuestionBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageQuestionBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageQuestionBroken: MessageQuestionBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageQuestionBrokenSvg}></AntdIcon>;
};

MessageQuestionBroken.displayName = 'MessageQuestionBroken';
MessageQuestionBroken.inheritAttrs = false;
export default MessageQuestionBroken;
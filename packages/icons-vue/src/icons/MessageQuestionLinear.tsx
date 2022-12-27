// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageQuestionLinearSvg from '@ant-design/icons-svg/lib/asn/MessageQuestionLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageQuestionLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageQuestionLinear: MessageQuestionLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageQuestionLinearSvg}></AntdIcon>;
};

MessageQuestionLinear.displayName = 'MessageQuestionLinear';
MessageQuestionLinear.inheritAttrs = false;
export default MessageQuestionLinear;
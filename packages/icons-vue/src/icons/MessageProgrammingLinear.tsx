// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageProgrammingLinearSvg from '@ant-design/icons-svg/lib/asn/MessageProgrammingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageProgrammingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageProgrammingLinear: MessageProgrammingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageProgrammingLinearSvg}></AntdIcon>;
};

MessageProgrammingLinear.displayName = 'MessageProgrammingLinear';
MessageProgrammingLinear.inheritAttrs = false;
export default MessageProgrammingLinear;
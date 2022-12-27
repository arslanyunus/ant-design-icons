// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageProgrammingBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageProgrammingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageProgrammingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageProgrammingBroken: MessageProgrammingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageProgrammingBrokenSvg}></AntdIcon>;
};

MessageProgrammingBroken.displayName = 'MessageProgrammingBroken';
MessageProgrammingBroken.inheritAttrs = false;
export default MessageProgrammingBroken;
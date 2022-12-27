// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageProgrammingBoldSvg from '@ant-design/icons-svg/lib/asn/MessageProgrammingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageProgrammingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageProgrammingBold: MessageProgrammingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageProgrammingBoldSvg}></AntdIcon>;
};

MessageProgrammingBold.displayName = 'MessageProgrammingBold';
MessageProgrammingBold.inheritAttrs = false;
export default MessageProgrammingBold;
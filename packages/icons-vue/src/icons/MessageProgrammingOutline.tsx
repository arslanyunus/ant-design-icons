// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageProgrammingOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageProgrammingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageProgrammingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageProgrammingOutline: MessageProgrammingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageProgrammingOutlineSvg}></AntdIcon>;
};

MessageProgrammingOutline.displayName = 'MessageProgrammingOutline';
MessageProgrammingOutline.inheritAttrs = false;
export default MessageProgrammingOutline;
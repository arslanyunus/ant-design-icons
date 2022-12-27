// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageOutline: MessageOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageOutlineSvg}></AntdIcon>;
};

MessageOutline.displayName = 'MessageOutline';
MessageOutline.inheritAttrs = false;
export default MessageOutline;
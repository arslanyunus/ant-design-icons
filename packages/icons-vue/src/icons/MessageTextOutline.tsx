// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTextOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageTextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTextOutline: MessageTextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTextOutlineSvg}></AntdIcon>;
};

MessageTextOutline.displayName = 'MessageTextOutline';
MessageTextOutline.inheritAttrs = false;
export default MessageTextOutline;
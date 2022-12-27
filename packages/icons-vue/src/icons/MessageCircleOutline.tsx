// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageCircleOutline: MessageCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageCircleOutlineSvg}></AntdIcon>;
};

MessageCircleOutline.displayName = 'MessageCircleOutline';
MessageCircleOutline.inheritAttrs = false;
export default MessageCircleOutline;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageCircleBoldSvg from '@ant-design/icons-svg/lib/asn/MessageCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageCircleBold: MessageCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageCircleBoldSvg}></AntdIcon>;
};

MessageCircleBold.displayName = 'MessageCircleBold';
MessageCircleBold.inheritAttrs = false;
export default MessageCircleBold;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageCircleBroken: MessageCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageCircleBrokenSvg}></AntdIcon>;
};

MessageCircleBroken.displayName = 'MessageCircleBroken';
MessageCircleBroken.inheritAttrs = false;
export default MessageCircleBroken;
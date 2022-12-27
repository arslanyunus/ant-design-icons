// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageCircleTwoTone: MessageCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageCircleTwoToneSvg}></AntdIcon>;
};

MessageCircleTwoTone.displayName = 'MessageCircleTwoTone';
MessageCircleTwoTone.inheritAttrs = false;
export default MessageCircleTwoTone;
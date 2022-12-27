// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSquareTwoTone: MessageSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSquareTwoToneSvg}></AntdIcon>;
};

MessageSquareTwoTone.displayName = 'MessageSquareTwoTone';
MessageSquareTwoTone.inheritAttrs = false;
export default MessageSquareTwoTone;
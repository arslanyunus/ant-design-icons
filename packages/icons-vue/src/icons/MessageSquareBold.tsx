// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSquareBoldSvg from '@ant-design/icons-svg/lib/asn/MessageSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSquareBold: MessageSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSquareBoldSvg}></AntdIcon>;
};

MessageSquareBold.displayName = 'MessageSquareBold';
MessageSquareBold.inheritAttrs = false;
export default MessageSquareBold;
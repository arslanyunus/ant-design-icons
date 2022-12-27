// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSquareBroken: MessageSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSquareBrokenSvg}></AntdIcon>;
};

MessageSquareBroken.displayName = 'MessageSquareBroken';
MessageSquareBroken.inheritAttrs = false;
export default MessageSquareBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageBroken: MessageBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageBrokenSvg}></AntdIcon>;
};

MessageBroken.displayName = 'MessageBroken';
MessageBroken.inheritAttrs = false;
export default MessageBroken;
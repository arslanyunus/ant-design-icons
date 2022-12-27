// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageNotifBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageNotifBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageNotifBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageNotifBroken: MessageNotifBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageNotifBrokenSvg}></AntdIcon>;
};

MessageNotifBroken.displayName = 'MessageNotifBroken';
MessageNotifBroken.inheritAttrs = false;
export default MessageNotifBroken;
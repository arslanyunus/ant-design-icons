// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageNotifBoldSvg from '@ant-design/icons-svg/lib/asn/MessageNotifBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageNotifBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageNotifBold: MessageNotifBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageNotifBoldSvg}></AntdIcon>;
};

MessageNotifBold.displayName = 'MessageNotifBold';
MessageNotifBold.inheritAttrs = false;
export default MessageNotifBold;
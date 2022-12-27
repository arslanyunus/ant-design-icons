// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageNotifBulkSvg from '@ant-design/icons-svg/lib/asn/MessageNotifBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageNotifBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageNotifBulk: MessageNotifBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageNotifBulkSvg}></AntdIcon>;
};

MessageNotifBulk.displayName = 'MessageNotifBulk';
MessageNotifBulk.inheritAttrs = false;
export default MessageNotifBulk;
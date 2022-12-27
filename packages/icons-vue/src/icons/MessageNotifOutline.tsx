// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageNotifOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageNotifOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageNotifOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageNotifOutline: MessageNotifOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageNotifOutlineSvg}></AntdIcon>;
};

MessageNotifOutline.displayName = 'MessageNotifOutline';
MessageNotifOutline.inheritAttrs = false;
export default MessageNotifOutline;
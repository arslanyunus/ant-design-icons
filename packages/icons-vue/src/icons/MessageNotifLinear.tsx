// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageNotifLinearSvg from '@ant-design/icons-svg/lib/asn/MessageNotifLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageNotifLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageNotifLinear: MessageNotifLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageNotifLinearSvg}></AntdIcon>;
};

MessageNotifLinear.displayName = 'MessageNotifLinear';
MessageNotifLinear.inheritAttrs = false;
export default MessageNotifLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageNotifTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageNotifTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageNotifTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageNotifTwoTone: MessageNotifTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageNotifTwoToneSvg}></AntdIcon>;
};

MessageNotifTwoTone.displayName = 'MessageNotifTwoTone';
MessageNotifTwoTone.inheritAttrs = false;
export default MessageNotifTwoTone;
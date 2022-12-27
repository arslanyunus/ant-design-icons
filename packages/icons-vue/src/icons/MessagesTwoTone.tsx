// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessagesTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessagesTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessagesTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessagesTwoTone: MessagesTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessagesTwoToneSvg}></AntdIcon>;
};

MessagesTwoTone.displayName = 'MessagesTwoTone';
MessagesTwoTone.inheritAttrs = false;
export default MessagesTwoTone;
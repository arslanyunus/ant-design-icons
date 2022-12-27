// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageEditTwoTone: MessageEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageEditTwoToneSvg}></AntdIcon>;
};

MessageEditTwoTone.displayName = 'MessageEditTwoTone';
MessageEditTwoTone.inheritAttrs = false;
export default MessageEditTwoTone;
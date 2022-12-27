// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageMinusTwoTone: MessageMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageMinusTwoToneSvg}></AntdIcon>;
};

MessageMinusTwoTone.displayName = 'MessageMinusTwoTone';
MessageMinusTwoTone.inheritAttrs = false;
export default MessageMinusTwoTone;
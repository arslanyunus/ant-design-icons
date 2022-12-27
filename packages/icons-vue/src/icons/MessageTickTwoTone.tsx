// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTickTwoTone: MessageTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTickTwoToneSvg}></AntdIcon>;
};

MessageTickTwoTone.displayName = 'MessageTickTwoTone';
MessageTickTwoTone.inheritAttrs = false;
export default MessageTickTwoTone;
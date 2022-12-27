// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSearchTwoTone: MessageSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSearchTwoToneSvg}></AntdIcon>;
};

MessageSearchTwoTone.displayName = 'MessageSearchTwoTone';
MessageSearchTwoTone.inheritAttrs = false;
export default MessageSearchTwoTone;
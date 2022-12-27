// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTimeTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTimeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTimeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTimeTwoTone: MessageTimeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTimeTwoToneSvg}></AntdIcon>;
};

MessageTimeTwoTone.displayName = 'MessageTimeTwoTone';
MessageTimeTwoTone.inheritAttrs = false;
export default MessageTimeTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTextTwoTone: MessageTextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTextTwoToneSvg}></AntdIcon>;
};

MessageTextTwoTone.displayName = 'MessageTextTwoTone';
MessageTextTwoTone.inheritAttrs = false;
export default MessageTextTwoTone;
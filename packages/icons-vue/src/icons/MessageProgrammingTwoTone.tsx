// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageProgrammingTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageProgrammingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageProgrammingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageProgrammingTwoTone: MessageProgrammingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageProgrammingTwoToneSvg}></AntdIcon>;
};

MessageProgrammingTwoTone.displayName = 'MessageProgrammingTwoTone';
MessageProgrammingTwoTone.inheritAttrs = false;
export default MessageProgrammingTwoTone;
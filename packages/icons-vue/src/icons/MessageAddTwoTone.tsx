// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAddTwoTone: MessageAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAddTwoToneSvg}></AntdIcon>;
};

MessageAddTwoTone.displayName = 'MessageAddTwoTone';
MessageAddTwoTone.inheritAttrs = false;
export default MessageAddTwoTone;
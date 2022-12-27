// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageText1TwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageText1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageText1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageText1TwoTone: MessageText1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageText1TwoToneSvg}></AntdIcon>;
};

MessageText1TwoTone.displayName = 'MessageText1TwoTone';
MessageText1TwoTone.inheritAttrs = false;
export default MessageText1TwoTone;
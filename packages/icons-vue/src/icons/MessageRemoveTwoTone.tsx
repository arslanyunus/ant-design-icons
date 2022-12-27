// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageRemoveTwoTone: MessageRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageRemoveTwoToneSvg}></AntdIcon>;
};

MessageRemoveTwoTone.displayName = 'MessageRemoveTwoTone';
MessageRemoveTwoTone.inheritAttrs = false;
export default MessageRemoveTwoTone;
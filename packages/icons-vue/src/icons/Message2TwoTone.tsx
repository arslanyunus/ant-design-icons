// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Message2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Message2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Message2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Message2TwoTone: Message2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2TwoToneSvg}></AntdIcon>;
};

Message2TwoTone.displayName = 'Message2TwoTone';
Message2TwoTone.inheritAttrs = false;
export default Message2TwoTone;
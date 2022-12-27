// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Message2OutlineSvg from '@ant-design/icons-svg/lib/asn/Message2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Message2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Message2Outline: Message2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2OutlineSvg}></AntdIcon>;
};

Message2Outline.displayName = 'Message2Outline';
Message2Outline.inheritAttrs = false;
export default Message2Outline;
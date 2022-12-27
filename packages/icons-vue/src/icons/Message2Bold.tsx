// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Message2BoldSvg from '@ant-design/icons-svg/lib/asn/Message2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Message2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Message2Bold: Message2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2BoldSvg}></AntdIcon>;
};

Message2Bold.displayName = 'Message2Bold';
Message2Bold.inheritAttrs = false;
export default Message2Bold;
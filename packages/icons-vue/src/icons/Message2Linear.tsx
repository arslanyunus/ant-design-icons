// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Message2LinearSvg from '@ant-design/icons-svg/lib/asn/Message2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Message2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Message2Linear: Message2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2LinearSvg}></AntdIcon>;
};

Message2Linear.displayName = 'Message2Linear';
Message2Linear.inheritAttrs = false;
export default Message2Linear;
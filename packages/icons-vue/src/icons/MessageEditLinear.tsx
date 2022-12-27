// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageEditLinearSvg from '@ant-design/icons-svg/lib/asn/MessageEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageEditLinear: MessageEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageEditLinearSvg}></AntdIcon>;
};

MessageEditLinear.displayName = 'MessageEditLinear';
MessageEditLinear.inheritAttrs = false;
export default MessageEditLinear;
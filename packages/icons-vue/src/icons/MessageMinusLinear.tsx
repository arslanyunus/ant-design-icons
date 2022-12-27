// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageMinusLinearSvg from '@ant-design/icons-svg/lib/asn/MessageMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageMinusLinear: MessageMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageMinusLinearSvg}></AntdIcon>;
};

MessageMinusLinear.displayName = 'MessageMinusLinear';
MessageMinusLinear.inheritAttrs = false;
export default MessageMinusLinear;
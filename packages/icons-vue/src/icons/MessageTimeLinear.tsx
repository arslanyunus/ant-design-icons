// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTimeLinearSvg from '@ant-design/icons-svg/lib/asn/MessageTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTimeLinear: MessageTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTimeLinearSvg}></AntdIcon>;
};

MessageTimeLinear.displayName = 'MessageTimeLinear';
MessageTimeLinear.inheritAttrs = false;
export default MessageTimeLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAddLinearSvg from '@ant-design/icons-svg/lib/asn/MessageAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAddLinear: MessageAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAddLinearSvg}></AntdIcon>;
};

MessageAddLinear.displayName = 'MessageAddLinear';
MessageAddLinear.inheritAttrs = false;
export default MessageAddLinear;
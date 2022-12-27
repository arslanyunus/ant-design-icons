// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageLinearSvg from '@ant-design/icons-svg/lib/asn/MessageLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageLinear: MessageLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageLinearSvg}></AntdIcon>;
};

MessageLinear.displayName = 'MessageLinear';
MessageLinear.inheritAttrs = false;
export default MessageLinear;
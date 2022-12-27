// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTextLinearSvg from '@ant-design/icons-svg/lib/asn/MessageTextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTextLinear: MessageTextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTextLinearSvg}></AntdIcon>;
};

MessageTextLinear.displayName = 'MessageTextLinear';
MessageTextLinear.inheritAttrs = false;
export default MessageTextLinear;
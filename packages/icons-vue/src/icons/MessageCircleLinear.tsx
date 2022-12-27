// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageCircleLinearSvg from '@ant-design/icons-svg/lib/asn/MessageCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageCircleLinear: MessageCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageCircleLinearSvg}></AntdIcon>;
};

MessageCircleLinear.displayName = 'MessageCircleLinear';
MessageCircleLinear.inheritAttrs = false;
export default MessageCircleLinear;
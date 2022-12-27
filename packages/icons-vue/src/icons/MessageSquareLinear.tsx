// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSquareLinearSvg from '@ant-design/icons-svg/lib/asn/MessageSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSquareLinear: MessageSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSquareLinearSvg}></AntdIcon>;
};

MessageSquareLinear.displayName = 'MessageSquareLinear';
MessageSquareLinear.inheritAttrs = false;
export default MessageSquareLinear;
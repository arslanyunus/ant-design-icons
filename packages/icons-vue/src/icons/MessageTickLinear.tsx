// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTickLinearSvg from '@ant-design/icons-svg/lib/asn/MessageTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTickLinear: MessageTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTickLinearSvg}></AntdIcon>;
};

MessageTickLinear.displayName = 'MessageTickLinear';
MessageTickLinear.inheritAttrs = false;
export default MessageTickLinear;
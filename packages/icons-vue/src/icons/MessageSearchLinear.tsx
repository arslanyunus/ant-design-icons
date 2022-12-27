// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSearchLinearSvg from '@ant-design/icons-svg/lib/asn/MessageSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSearchLinear: MessageSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSearchLinearSvg}></AntdIcon>;
};

MessageSearchLinear.displayName = 'MessageSearchLinear';
MessageSearchLinear.inheritAttrs = false;
export default MessageSearchLinear;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/MessageRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageRemoveLinear: MessageRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageRemoveLinearSvg}></AntdIcon>;
};

MessageRemoveLinear.displayName = 'MessageRemoveLinear';
MessageRemoveLinear.inheritAttrs = false;
export default MessageRemoveLinear;
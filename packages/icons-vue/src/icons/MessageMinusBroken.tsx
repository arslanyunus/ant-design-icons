// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageMinusBroken: MessageMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageMinusBrokenSvg}></AntdIcon>;
};

MessageMinusBroken.displayName = 'MessageMinusBroken';
MessageMinusBroken.inheritAttrs = false;
export default MessageMinusBroken;
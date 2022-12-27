// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTickBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTickBroken: MessageTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTickBrokenSvg}></AntdIcon>;
};

MessageTickBroken.displayName = 'MessageTickBroken';
MessageTickBroken.inheritAttrs = false;
export default MessageTickBroken;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTimeBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageTimeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTimeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTimeBroken: MessageTimeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTimeBrokenSvg}></AntdIcon>;
};

MessageTimeBroken.displayName = 'MessageTimeBroken';
MessageTimeBroken.inheritAttrs = false;
export default MessageTimeBroken;
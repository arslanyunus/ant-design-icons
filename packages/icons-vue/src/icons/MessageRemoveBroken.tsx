// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageRemoveBroken: MessageRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageRemoveBrokenSvg}></AntdIcon>;
};

MessageRemoveBroken.displayName = 'MessageRemoveBroken';
MessageRemoveBroken.inheritAttrs = false;
export default MessageRemoveBroken;
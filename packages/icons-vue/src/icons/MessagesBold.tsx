// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessagesBoldSvg from '@ant-design/icons-svg/lib/asn/MessagesBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessagesBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessagesBold: MessagesBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessagesBoldSvg}></AntdIcon>;
};

MessagesBold.displayName = 'MessagesBold';
MessagesBold.inheritAttrs = false;
export default MessagesBold;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageMinusBoldSvg from '@ant-design/icons-svg/lib/asn/MessageMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageMinusBold: MessageMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageMinusBoldSvg}></AntdIcon>;
};

MessageMinusBold.displayName = 'MessageMinusBold';
MessageMinusBold.inheritAttrs = false;
export default MessageMinusBold;
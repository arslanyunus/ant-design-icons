// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageMinusOutline: MessageMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageMinusOutlineSvg}></AntdIcon>;
};

MessageMinusOutline.displayName = 'MessageMinusOutline';
MessageMinusOutline.inheritAttrs = false;
export default MessageMinusOutline;
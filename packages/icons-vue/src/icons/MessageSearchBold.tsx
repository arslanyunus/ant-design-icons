// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSearchBoldSvg from '@ant-design/icons-svg/lib/asn/MessageSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSearchBold: MessageSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSearchBoldSvg}></AntdIcon>;
};

MessageSearchBold.displayName = 'MessageSearchBold';
MessageSearchBold.inheritAttrs = false;
export default MessageSearchBold;
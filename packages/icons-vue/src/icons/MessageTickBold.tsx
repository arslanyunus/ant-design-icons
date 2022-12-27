// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTickBoldSvg from '@ant-design/icons-svg/lib/asn/MessageTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTickBold: MessageTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTickBoldSvg}></AntdIcon>;
};

MessageTickBold.displayName = 'MessageTickBold';
MessageTickBold.inheritAttrs = false;
export default MessageTickBold;
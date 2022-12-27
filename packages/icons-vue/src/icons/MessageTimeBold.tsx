// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTimeBoldSvg from '@ant-design/icons-svg/lib/asn/MessageTimeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTimeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTimeBold: MessageTimeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTimeBoldSvg}></AntdIcon>;
};

MessageTimeBold.displayName = 'MessageTimeBold';
MessageTimeBold.inheritAttrs = false;
export default MessageTimeBold;
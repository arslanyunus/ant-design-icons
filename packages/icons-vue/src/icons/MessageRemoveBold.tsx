// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/MessageRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageRemoveBold: MessageRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageRemoveBoldSvg}></AntdIcon>;
};

MessageRemoveBold.displayName = 'MessageRemoveBold';
MessageRemoveBold.inheritAttrs = false;
export default MessageRemoveBold;
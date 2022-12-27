// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFavoriteBoldSvg from '@ant-design/icons-svg/lib/asn/MessageFavoriteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFavoriteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFavoriteBold: MessageFavoriteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFavoriteBoldSvg}></AntdIcon>;
};

MessageFavoriteBold.displayName = 'MessageFavoriteBold';
MessageFavoriteBold.inheritAttrs = false;
export default MessageFavoriteBold;
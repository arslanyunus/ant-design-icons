// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFavoriteTwoTone: MessageFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFavoriteTwoToneSvg}></AntdIcon>;
};

MessageFavoriteTwoTone.displayName = 'MessageFavoriteTwoTone';
MessageFavoriteTwoTone.inheritAttrs = false;
export default MessageFavoriteTwoTone;
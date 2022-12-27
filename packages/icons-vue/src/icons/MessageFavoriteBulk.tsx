// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/MessageFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFavoriteBulk: MessageFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFavoriteBulkSvg}></AntdIcon>;
};

MessageFavoriteBulk.displayName = 'MessageFavoriteBulk';
MessageFavoriteBulk.inheritAttrs = false;
export default MessageFavoriteBulk;
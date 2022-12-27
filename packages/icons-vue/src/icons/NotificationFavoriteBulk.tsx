// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/NotificationFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFavoriteBulk: NotificationFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFavoriteBulkSvg}></AntdIcon>;
};

NotificationFavoriteBulk.displayName = 'NotificationFavoriteBulk';
NotificationFavoriteBulk.inheritAttrs = false;
export default NotificationFavoriteBulk;
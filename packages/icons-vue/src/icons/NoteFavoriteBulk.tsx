// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteFavoriteBulkSvg from '@ant-design/icons-svg/lib/asn/NoteFavoriteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteFavoriteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteFavoriteBulk: NoteFavoriteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteFavoriteBulkSvg}></AntdIcon>;
};

NoteFavoriteBulk.displayName = 'NoteFavoriteBulk';
NoteFavoriteBulk.inheritAttrs = false;
export default NoteFavoriteBulk;
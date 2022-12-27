// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/NoteFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteFavoriteOutline: NoteFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteFavoriteOutlineSvg}></AntdIcon>;
};

NoteFavoriteOutline.displayName = 'NoteFavoriteOutline';
NoteFavoriteOutline.inheritAttrs = false;
export default NoteFavoriteOutline;
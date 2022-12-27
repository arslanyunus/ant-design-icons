// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/NoteFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteFavoriteLinear: NoteFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteFavoriteLinearSvg}></AntdIcon>;
};

NoteFavoriteLinear.displayName = 'NoteFavoriteLinear';
NoteFavoriteLinear.inheritAttrs = false;
export default NoteFavoriteLinear;
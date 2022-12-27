// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/NoteFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteFavoriteBroken: NoteFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteFavoriteBrokenSvg}></AntdIcon>;
};

NoteFavoriteBroken.displayName = 'NoteFavoriteBroken';
NoteFavoriteBroken.inheritAttrs = false;
export default NoteFavoriteBroken;
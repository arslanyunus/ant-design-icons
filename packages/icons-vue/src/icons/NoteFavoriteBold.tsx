// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteFavoriteBoldSvg from '@ant-design/icons-svg/lib/asn/NoteFavoriteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteFavoriteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteFavoriteBold: NoteFavoriteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteFavoriteBoldSvg}></AntdIcon>;
};

NoteFavoriteBold.displayName = 'NoteFavoriteBold';
NoteFavoriteBold.inheritAttrs = false;
export default NoteFavoriteBold;
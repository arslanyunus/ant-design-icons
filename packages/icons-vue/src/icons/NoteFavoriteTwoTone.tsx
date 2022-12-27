// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/NoteFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteFavoriteTwoTone: NoteFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteFavoriteTwoToneSvg}></AntdIcon>;
};

NoteFavoriteTwoTone.displayName = 'NoteFavoriteTwoTone';
NoteFavoriteTwoTone.inheritAttrs = false;
export default NoteFavoriteTwoTone;
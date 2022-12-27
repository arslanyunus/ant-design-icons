// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTimeBoldSvg from '@ant-design/icons-svg/lib/asn/BoxTimeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTimeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTimeBold: BoxTimeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTimeBoldSvg}></AntdIcon>;
};

BoxTimeBold.displayName = 'BoxTimeBold';
BoxTimeBold.inheritAttrs = false;
export default BoxTimeBold;
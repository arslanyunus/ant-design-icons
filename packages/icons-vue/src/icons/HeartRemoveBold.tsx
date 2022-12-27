// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/HeartRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartRemoveBold: HeartRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartRemoveBoldSvg}></AntdIcon>;
};

HeartRemoveBold.displayName = 'HeartRemoveBold';
HeartRemoveBold.inheritAttrs = false;
export default HeartRemoveBold;
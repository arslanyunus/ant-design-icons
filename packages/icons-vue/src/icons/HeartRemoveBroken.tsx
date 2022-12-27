// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartRemoveBroken: HeartRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartRemoveBrokenSvg}></AntdIcon>;
};

HeartRemoveBroken.displayName = 'HeartRemoveBroken';
HeartRemoveBroken.inheritAttrs = false;
export default HeartRemoveBroken;
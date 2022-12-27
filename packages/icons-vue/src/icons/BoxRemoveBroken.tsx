// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/BoxRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxRemoveBroken: BoxRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxRemoveBrokenSvg}></AntdIcon>;
};

BoxRemoveBroken.displayName = 'BoxRemoveBroken';
BoxRemoveBroken.inheritAttrs = false;
export default BoxRemoveBroken;